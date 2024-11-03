/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BankAccount(props) {
    return (
        <div css={s.bankAccountLayout}>
            <h3>무통장 입금 전용계좌</h3>
            <p>하나은행 : 100-1111-110-121</p>
            <p>우리은행 : 100-1111-110-121</p>
            <p>농협 : 100-1111-110-121</p>
            <p>국민은행 : 100-1111-110-121</p>
            <p>토스뱅크 : 100-1111-110-121</p>
        </div>
    );
}

export default BankAccount;