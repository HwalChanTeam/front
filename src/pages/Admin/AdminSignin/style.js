import { css } from "@emotion/react";


export const container = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const signin = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 900px;
    height: 900px;

    & input {
        display: flex;
        padding: 0px 20px;
        width: 450px;
        height: 50px;
        border-radius: 10px;
        border: 1px solid #000000;
        :nth-of-type(1) {
            margin-bottom: 10px;
        }
    }

    & button {
        margin-top: 80px;
        width: 450px;
        height: 50px;
        border-radius: 10px;
        font-size: 30px;
        font-weight: 600;
        background-color: white;
        border: 1px solid #000000;
    }
`;

export const signinHeader = css`
    box-sizing: border-box;
    padding-bottom: 200px;
`;

