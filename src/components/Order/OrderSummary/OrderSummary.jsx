/** @jsxImportSource @emotion/react */
import * as s from "./style";


// 오른쪽 결제 박스
function OrderSummary({ totalProductAmount, deliveryFee, totalAmount, buyButtonOnClick }) {
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
                    <p>총 결제 금액 : </p>
                    <p>{totalAmount.toLocaleString()}원</p>
                </div>
            </div>
            <div css={s.submitButton}>
                <button onClick={buyButtonOnClick}>결제하기</button>
            </div>
        </div>
    );
}

export default OrderSummary;
