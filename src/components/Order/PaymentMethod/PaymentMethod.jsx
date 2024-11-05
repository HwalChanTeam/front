/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";

// 결제창 띄우는 기능
function PaymentMethod({ setPatMentState }) {

    // 클릭하였을 때 빨간 테두리 뜨게할려고 만든 상태
    const [ redOutLine, setRedOutLine ] = useState(false);

    const handleCardClick = () => {
        setPatMentState(2);
        setRedOutLine(true);
    };

    const handleBankAccountClick = () => {
        setPatMentState(1);
        setRedOutLine(true);
    };


    console.log(redOutLine);

    return (
        <div css={s.payInfo}>
            <h2>결제수단 선택</h2>
            <button css={s.selectClick(redOutLine)} onClick={handleCardClick}>신용카드</button>
            <button onClick={handleBankAccountClick}>무통장 입금</button>
        </div>
    );
}

export default PaymentMethod;
