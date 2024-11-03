/** @jsxImportSource @emotion/react */
import * as s from "./style";

// 결제창 띄우는 기능
function PaymentMethod({ setPatMentState }) {
    const handleBankAccountClick = () => {
        setPatMentState(1);
    };

    const handleCardClick = () => {
        setPatMentState(2);
    };

    return (
        <div css={s.payInfo}>
            <h2>결제수단 선택</h2>
            <button onClick={handleCardClick}>신용카드</button>
            <button onClick={handleBankAccountClick}>무통장 입금</button>
        </div>
    );
}

export default PaymentMethod;
