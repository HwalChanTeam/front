/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";

// 결제창 띄우는 기능
function PaymentMethod({ setPayMentState }) {

    // 클릭하였을 때 빨간 테두리 뜨게할려고 만든 상태
    // 신용카드
    const [ cardRedOutLine, setCardRedOutLine ] = useState(false);
    // 무통장
    const [ bankAccountRedOutLine, setBankAccountRedOutLine ] = useState(false);

    const handleCardClick = () => {
        setPayMentState("CARD");
        setCardRedOutLine(true); // 카드의 상태가 true로 바뀌면서 테두리 o
        setBankAccountRedOutLine(false); // 무통장의 상태가 false로 바뀌면서 테두리 x
    };

    // const handleBankAccountClick = () => {
    //     setPatMentState("bankbook");
    //     setCardRedOutLine(false); // 카드의 상태가 false로 바뀌면서 테두리 x
    //     setBankAccountRedOutLine(true); // 무통장의 상태가 true로 바뀌면서 테두리 o
    // };

    return (
        <div css={s.payInfo}>
            <h2>결제수단 선택</h2>
            <button css={s.selectClick(cardRedOutLine)} 
                onClick={handleCardClick}>신용카드</button>
            {/* <button css={s.selectClick(bankAccountRedOutLine)} 
                onClick={handleBankAccountClick}>무통장 입금</button> */}
        </div>
    );
}

export default PaymentMethod;
