import { css } from "@emotion/react";

export const mainLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 900px;
`;

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding: 50px;
    width: 700px;
    height: 900px;
    border: 3px solid #FF1A1A;
    border-radius: 20px;
`;

export const headerLayout = css`
    font-size: 20px;
    display: flex;
    position: relative;

    & h1 {
        margin-top: 0;
        margin-bottom: 30px;
        color: #CD2222;
        padding-right: 50px;
    }

    & h2 {
        position: relative;
        right: 130px;
        bottom: 20px;
        cursor: pointer;
    }
`;

export const container = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & input {
        font-size: 16px;
        font-weight: 600;
    }
`;

export const inputUser = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    & input {
        margin-bottom: 10px;
        padding: 0px 20px;
        width: 450px;
        height: 50px;
        border: 1px solid #000000;
        border-radius: 10px;
        :nth-last-of-type(1) {
            margin-bottom: 0;
        }
    }
`;

export const inputPhone = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; /* 버튼을 절대 위치로 배치할 부모 요소 */

    & input[type="text"] {
        padding: 0px 20px;
        width: 450px;
        height: 50px;
        margin-top: 10px;
        border: 1px solid #000000;
        border-radius: 10px;
    }

    /* 인증 요청 버튼만 절대 위치로 배치 */
    & button {
        position: absolute;
        top: 10px; /* 적절한 위치로 설정 */
        right: 0;
        height: 53px;
        background-color: #D98585;
        border: 1px solid #000000;
        border-bottom: none;
        color: white;
        font-size: 16px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 0 20px;
    }

    & input[name="phoneCheck"] {
        margin-top: 10px;
        width: 450px;
        height: 50px;
        border: 1px solid #000000;
        border-radius: 10px;
    }
`;

export const joinOkButton = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    & > button {
        margin-top: 80px;
        width: 450px;
        height: 80px;
        background-color: #D98585;
        border: 1px solid #000000;
        color: white;
        font-size: 35px;
        font-weight: 600;
        border-radius: 10px;
    }
`;
