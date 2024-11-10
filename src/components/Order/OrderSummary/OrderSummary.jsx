/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import PortOne from "@portone/browser-sdk/v2";
import { useMutation } from "react-query";
import { instance } from "../../../apis/util/instance";
import { Navigate, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { channelKey } from "../../../portone/portone";

// 오른쪽 결제 박스
function OrderSummary({ productList, payMentState, userInfo, totalAmount, buyButtonOnClick, deliveryFee, totalProductAmount }) {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const [orderData, setOrderData] = useState({
        customerId: "",
        fullName: "",
        products: [],
        totalAmount: 0,
        orderItemCount: 0,
        // orderStatus: "",
        orderName: "",
        zipcode: "",
        addressDefault: "",
        addressDetail: "",
        phoneNumber: "",
        email: "",
        request: "",
        paymentId: "", //포트원에서 받아온 아이디
        paymentMethod: "",
        payMethod: "",
        currency: "",
        country: "",
        card: ""
    });

    
    // const portoneData = {
    //     storeId: "store-a497dea2-bbec-4135-8fb2-c2283879a5b9",
    //     customer: {},           // 줘야해
    //     orderType: 0,           // 줘야해
    //     paymentId: "payment",          // 줘야해 
    //     orderName: "mn",
    //     totalAmount: 1000,         // 줘야해
    //     currency: 'CURRENCY_KRW',
    //     locale: 'KO_KR',
    //     channelKey: "",
    //     payMethod: "",
    //     products: [],             // 줘야해
    // };

    const portoneData = {
        storeId: "store-da6c7cb4-5165-42e3-8184-e54dd94d2b78",
        paymentId: crypto.randomUUID(), // 랜덤uuid 
        orderName: "Cuisson",
        totalAmount: totalAmount,
        currency: 'CURRENCY_KRW',
        products: products
    };

    console.log(userInfo);

    useEffect(() => {
        setOrderData({
            customerId: userInfo.userId,
            fullName: userInfo.name,
            products: productList.map((item) => ({
                productId: item.productId.toString(),
                name: item.product.title,
                price: item.product.price,
                quantity: item.quantity,
            })),
            totalAmount: totalAmount,
            orderItemCount: productList.length,
            // orderStatus: "",
            orderName: "Cuisson",
            zipcode: userInfo.address.zipCode,
            address: userInfo.address.address,
            detailAddress: userInfo.address.detailAddress,
            phoneNumber: userInfo.phoneNumber,
            email: userInfo.email,
            paymentId: "", //포트원에서 받아온 아이디
            payMethod: payMentState,
            currency: "KRW",
            country: "KR",
            card: "CARD"
        })
    }, [userInfo, productList, payMentState])

    console.log(orderData);

    const registerOrderMutaion = useMutation(
        async (registerOrderData) => await instance.post("/user/order", registerOrderData),
        {
            onSuccess: response => console.log(response), //결제완료창 띄우기
            onError: error => console.log(error)
        }
    );

    const isEmpty = () => {
        console.log(userInfo);
        if(!userInfo.name || !userInfo.phoneNumber 
            || !userInfo.address.zipCode || !userInfo.address.address 
            || !userInfo.address.detailAddress
            || !userInfo.email) {
                Swal.fire({
                    icon:"error",
                    text: "주문정보를 확인하세요",
                    timer: 1500,
                    confirmButtonColor: "#9d6c4c",
                    confirmButtonText: "확인",
                });
                return true;
        }
        if (!payMentState || !channelKey) {
            console.log(payMentState)
            console.log(channelKey)
            Swal.fire({
                icon:"error",
                text: "결제방법을 선택하세요",
                timer: 1500,
                confirmButtonColor: "#9d6c4c",
                confirmButtonText: "확인",
            });
            return true;
        }
        return false;
    }


    const handlePaymentButtonOnClick = () => {
        if (isEmpty()) {
            return;
        }
        console.log(payMentState);
        const requestData = {
            ...portoneData,
            paymentId: crypto.randomUUID(),
            channelKey: channelKey,
            payMethod: payMentState,
            totalAmount: totalAmount,
            customer: {
                userId: userInfo?.userId,
                fullName: userInfo.name,
                phoneNumber: userInfo.phoneNumber,
                email: userInfo.email,
            },
            products: products,
            productType: "PRODUCT_TYPE_REAL",
        }
        console.log("!!" + requestData);
        PortOne.requestPayment(requestData).then(response => {
            if (!response.code) { //성공했을 때
                //(추가)결제완료창 만들어서 넘기기
                setOrderData(order => ({
                    ...order,
                    paymentId: response.paymentId
                }));
                const registerOrderData = {
                    ...orderData,
                    paymentId: response.paymentId
                }
                console.log(registerOrderData);

                registerOrderMutaion.mutateAsync(registerOrderData);

                let timerInterval;
                Swal.fire({
                    title: "결제가 완료되었습니다!",
                    color: "#9d6c4c",
                    html: "<b>5</b>초 뒤 자동으로 홈화면으로 이동합니다!",
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    didOpen: () => {
                        const b = Swal.getHtmlContainer().querySelector('b');
                        timerInterval = setInterval(() => {
                            b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
                        }, 1000)
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then(result => {
                    navigate("/");
                })
            }
        }
        ).catch(error => {
            Swal.fire({
                icon: "error",
                text: "결제에 실패했습니다.",
                timer: 1500,
                confirmButtonColor: "#9d6c4c",
                confirmButtonText: "확인"
            });
        });
    };

    return (
        <div css={s.rightBox}>
            <div css={s.payInfoMain}>
                <div css={s.payinfo}>
                    <h2>결제금액</h2>
                </div>
                <div css={s.payinfo}>
                    <p>상품 금액 : </p>
                    <p>{totalProductAmount.toLocaleString()}원</p>
                </div>
                <div css={s.payinfo}>
                    <p>할인 금액 : </p>
                    <p>0원</p>
                </div>
                <div css={s.payinfo}>
                    <p>배송비 : </p>
                    <p>{deliveryFee.toLocaleString()}원</p>
                </div>
                <div css={s.payinfo}>
                    <p>적립금 : </p>
                    <p>{deliveryFee.toLocaleString()}원</p>
                </div>
                <div css={s.payinfo}>
                    <p>총 결제 금액 : </p>
                    <p>{totalAmount.toLocaleString()}원</p>
                </div>
            </div>
            <div css={s.submitButton}>
                <button onClick={handlePaymentButtonOnClick}>결제하기</button>
            </div>
        </div>
    );
}

export default OrderSummary;
