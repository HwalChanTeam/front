// /** @jsxImportSource @emotion/react */
// import { useEffect, useState } from "react";
// import * as s from "./style";
// import PortOne from "@portone/browser-sdk/v2";


// // 오른쪽 결제 박스
// function OrderSummary({ productList, payMentState, userInfo, totalAmount, buyButtonOnClick }) {

//     const [orderData, setOrderData] = useState({
//         customerId: "",
//         fullName: "",
//         products: [],
//         totalAmount: 0,
//         orderItemCount: 0,
//         // orderStatus: "",
//         orderName: "",
//         zipcode: "",
//         addressDefault: "",
//         addressDetail: "",
//         phoneNumber: "",
//         email: "",
//         request: "",
//         paymentId: "", //포트원에서 받아온 아이디
//         paymentMethod: "",
//         payMethod: "",
//         currency: "",
//         country: "",
//         card: ""
//     });

//     const portoneData = {
//         storeId: "store-a497dea2-bbec-4135-8fb2-c2283879a5b9",
//         customer: {},           // 줘야해
//         orderType: 0,           // 줘야해
//         paymentId: "payment",          // 줘야해 
//         orderName: "mn",
//         totalAmount: 1000,         // 줘야해
//         currency: 'CURRENCY_KRW',
//         locale: 'KO_KR',
//         // channelKey: portEtcData.paymentChannelKey,
//         payMethod: "",
//         products: [],             // 줘야해
//     };

//     const portoneData1 = {
//         storeId: "store-da6c7cb4-5165-42e3-8184-e54dd94d2b78",
//         paymentId: "우리가 주는 고유번호", // 랜덤uuid
//         orderName: "Cuisson",
//         totalAmount: totalAmount,
//         currency: 'CURRENCY_KRW',
//     };


//     const products = productList.map((item) => ({
//         id: item.cartItemId,
//         name: item.product.title,
//         amount: item.product.price,
//         quantity: item.quantity
//     }));


//     // PortOne.requestPayment

//     console.log(userInfo?.data);

//     useEffect(() => {
//         setOrderData({
//             customerId: userInfo.userId,
//             fullName: userInfo.name,
//             products: products,
//             totalAmount: totalAmount,
//             orderItemCount: 0,
//             // orderStatus: "",
//             orderName: "Cuisson",
//             zipcode: userInfo.address.zipCode,
//             address: userInfo.address.address,
//             detailAddress: userInfo.address.detailAddress,
//             phoneNumber: userInfo.phoneNumber,
//             email: userInfo.email,
//             paymentId: "", //포트원에서 받아온 아이디
//             payMethod: payMentState,
//             currency: "KRW",
//             country: "KR",
//             card: "CARD"


//         })
//     }, [userInfo])

//     console.log(productList)
//     console.log(productList.map((item) => item.title));
//     console.log(productList.map((item) => item.product.title));
//     console.log(orderData);

//     return (
//         <div css={s.rightBox}>
//             <div css={s.payInfoMain}>
//                 <div css={s.payinfo}>
//                     <h2>결제금액</h2>
//                 </div>
//                 <div css={s.payinfo}>
//                     <p>상품 금액 : </p>
//                     <p>{totalProductAmount.toLocaleString()}원</p>
//                 </div>
//                 <div css={s.payinfo}>
//                     <p>할인 금액 : </p>
//                     <p>0원</p>
//                 </div>
//                 <div css={s.payinfo}>
//                     <p>배송비 : </p>
//                     <p>{deliveryFee.toLocaleString()}원</p>
//                 </div>
//                 <div css={s.payinfo}>
//                     <p>적립금 : </p>
//                     <p>{deliveryFee.toLocaleString()}원</p>
//                 </div>
//                 <div css={s.payinfo}>
//                     <p>총 결제 금액 : </p>
//                     <p>{totalAmount.toLocaleString()}원</p>
//                 </div>
//             </div>
//             <div css={s.submitButton}>
//                 <button onClick={buyButtonOnClick}>결제하기</button>
//             </div>
//         </div>
//     );
// }

// export default OrderSummary;
