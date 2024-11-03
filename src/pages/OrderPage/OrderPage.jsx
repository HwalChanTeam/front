/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState, useResetRecoilState } from "recoil";
import { productOrderAtom, selectedItemsAtom } from "../../apis/util/atom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { instance } from "../../apis/util/instance";
import DaumPost from "../../components/PostSearch/PstSearch";

function OrderPage(props) {

    //장바구니에서 가져온 여러개 아이디
    const [selectedProductIds, setSelectedProductIds] = useRecoilState(selectedItemsAtom); // atom 사용

    //상품 디테일 페이지에서 가져온 하나의 아이디
    const [selectedProduct, setSelectedProduct] = useRecoilState(productOrderAtom); // atom 사용

    //페이지 이동하면 아톰 삭제
    const resetSelectedProductIds = useResetRecoilState(selectedItemsAtom);
    const resetSelectedProduct = useResetRecoilState(productOrderAtom);

    useEffect(() => {
        return () => {
            resetSelectedProductIds();
            resetSelectedProduct();
        };
    }, [resetSelectedProductIds, resetSelectedProduct]);

    const quantities = selectedProductIds.map((item) => item.quantity);

    const token = localStorage.getItem("accessToken");
    const location = useLocation();
    const [productList, setProductList] = useState([]);

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        detailAddress: "",
        message: "",
    });

    // 상품 페이지에서 가져온 경우(단건)
    const productOrder = useQuery(
        ["productOrder"],
        async () => {
            return await instance.get("/user/order", { params: { id: selectedProduct.productId } });
        },
        {
            retry : 0,
            refetchOnWindowFocus : false
        }
    )

    //장바구니에서 가져온 경우(다건)
    const {
        data: products,
        isLoading: isProductsLoading,
        isError: isProductsError,
    } = useQuery(
        ["selectedProducts"],
        async () => {
            const cartItemId = selectedProductIds.map((item) => item.cartItemId);

            return await instance.get("/user/cart/order", { params: { id: cartItemId.join(",") } });
        },
        {
            onSuccess: (response) => {
                setProductList(response.data.cartItemList);
            },
            enabled: selectedProductIds.length > 0, // 상품 ID가 있을 때만 쿼리 실행
            retry: 0,
            refetchOnWindowFocus : false
        }
    );



    // 유저 정보 불러오기 - 장바구니 조회할때 같이 오므로, 수정 예정
    const {
        data: userInfoData,
        isLoading: isUserInfoLoading,
        isError: isUserInfoError,
    } = useQuery(
        "userInfo",
        async () => {
            return await instance.get("/user"); // 유저 정보 가져오는 API 호출
        },
        {
            onSuccess: (response) => {
                setUserInfo(response.data); // 성공 시 userInfo 상태 업데이트
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

        // 주소 선택 완료 시 호출될 함수
        const handleAddressComplete = (address) => {
            setUserInfo((user) => ({
                ...user,
                address: {
                    address: address.address, // 지역 주소 업데이트
                    detailAddress: address.detailAddress, // 나머지 주소 업데이트
                    zipCode: address.zipCode,
                },
            }));
        };

    // 로딩 상태 처리
    if (isProductsLoading || isUserInfoLoading) {
        return <div>로딩 중...</div>;
    }

    // 에러 발생 시 처리
    if (isProductsError || isUserInfoError) {
        return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
    }

    // 유저 정보 변경 시 사용
    const handleInputChange = (e) => {
        setUserInfo((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }));
    };

    const addressSaveButtonOnClick = () => { };

    const buyButtonOnClick = async () => {
        await instance.post("/user/buy", selectedProductIds);
    };

    const calculateTotalPrice = (product) => {
        return product.product.price * product.quantity;
    };
    
    const calculateTotals = () => {
        let totalProductAmount = 0;
        let deliveryFee = 0;
        let totalAmount = 0;
    
        if (Array.isArray(productList) && productList.length > 0) {
            totalProductAmount = productList.reduce((total, product) => {
                return total + calculateTotalPrice(product);
            }, 0);
        } else if (productOrder?.data && selectedProduct) {
            totalProductAmount = productOrder.data.data.price * selectedProduct.quantity;
        }
    
        deliveryFee = totalProductAmount >= 30000 ? 0 : 3000;
        totalAmount = totalProductAmount + deliveryFee;
    
        return { totalProductAmount, totalAmount, deliveryFee };
    };
    
    const { totalProductAmount, totalAmount, deliveryFee } = calculateTotals();

    return (
        <div css={s.layout}>
            <div css={s.mainBox}>
                <div css={s.userInfo}>
                    <h2>주문자 정보</h2>
                    <div css={s.inputBox}>
                        <span>이름 : </span>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="name"
                            defaultValue={userInfo.name}
                            placeholder="이름을 입력해 주세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="email">이메일 : </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="email"
                            defaultValue={userInfo.email}
                            placeholder="이메일 주소를 입력해 주세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="phoneNumber">연락처 : </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="phoneNumber"
                            defaultValue={userInfo.phoneNumber}
                            placeholder="연락처를 입력해 주세요"
                        />
                    </div>
                    <div css={s.addressInput}>
                    <p css={s.adressButton}>
                        <DaumPost onComplete={handleAddressComplete} />
                        {/* <button onClick={addressSaveButtonOnClick}>배송지 저장</button> */}
                    </p>
                    <input
                            type="text"
                            name="zipCode"
                            readOnly
                            value={userInfo.address.zipCode}
                        />
                    </div>
                    <div css={s.adressInputBox}>
                        <label htmlFor="address">지역 주소 : </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="address"
                            defaultValue={userInfo.address.address}
                            placeholder="배송지 입력해 주세요"
                        />
                    </div>
                    <div css={s.adressInputBox}>
                        <label htmlFor="detailAddress">나머지 주소 : </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="detailAddress"
                            defaultValue={userInfo.address.detailAddress}
                            placeholder="배송지 입력해 주세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="message">배송 메세지 : </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="message"
                            defaultValue={userInfo.message}
                            placeholder="배송 메시지를 입력해 주세요"
                        />
                    </div>
                </div>
                <div css={s.productInfo}>
                    <h2>주문상품 정보</h2>
                    <table css={s.productTable}>
                        {
                            // 다건조회
                            selectedProductIds.length > 0
                                ? (
                                    productList.map((product) => (
                                        <tr key={product.cartItemId}>
                                            <td>{product.title}</td>
                                            <td>
                                                <img src={product.product.thumbnailImg} />
                                            </td>
                                            <td>수량: {product.quantity}</td>
                                            <td>상품금액: {product.product.price.toLocaleString()}원</td>
                                            <td>할인금액: 0원</td>
                                            <td>배송비: {deliveryFee.toLocaleString()}원</td>
                                            <td>
                                                합계금액:{" "}
                                                {(product.product.price * product.quantity).toLocaleString()}원
                                            </td>
                                        </tr>
                                    ))
                                    // 단건조회
                                ) : (
                                    productOrder?.data && (
                                        <tr>
                                            <td>{productOrder?.data?.data.title}</td>
                                            <td>
                                                <img src={productOrder?.data?.data.thumbnailImg} />
                                            </td>
                                            <td>수량: {selectedProduct.quantity}</td>
                                            <td>상품금액: {productOrder?.data?.data.price.toLocaleString()}원</td>
                                            <td>할인금액: 0원</td>
                                            <td>배송비: {deliveryFee.toLocaleString()}원</td>
                                            <td>
                                                합계금액:{" "}
                                                {(productOrder?.data?.data.price * selectedProduct.quantity).toLocaleString()}원
                                            </td>
                                        </tr>
                                    )
                                )}
                    </table>
                    <p>배송비 : {deliveryFee.toLocaleString()}원</p>
                </div>
                <div css={s.payInfo}>
                    <h2>결제수단 선택</h2>
                    <button>신용카드</button>
                    <button>무통장 입금</button>
                </div>
            </div>
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
                        <p>총 결제 금액 : </p>
                        <p>{totalAmount.toLocaleString()}원</p>
                    </div>
                </div>
                <div css={s.submitButton}>
                    <button onClick={buyButtonOnClick}>결제하기</button>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;

/* 주문자 정보 - input창으로 / 입력 되어 있으면 불러오고, 입력이 없으면 입력 가능하게
                이름, 이메일, 폰번호, 주소, 배송 메세지

                주문 상품 / 총 가격
                배송비(50,000원 이상 무료배송)

                결제 수단 선택
            */
