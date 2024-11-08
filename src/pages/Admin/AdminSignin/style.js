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
    width: 600px;
    height: 600px;

    & input {
        display: flex;
        padding: 0px 20px;
        width: 450px;
        height: 50px;
        border: 1px solid #000000;
        outline: none;
        :nth-of-type(1) {
            margin-bottom: 20px;
        }
    }

    & button {
        margin-top: 50px;
        width: 492px;
        height: 50px;
        font-size: 20px;
        font-weight: 600;
        background-color: white;
        border: 1px solid #000000;
        cursor: pointer;
        &:hover {
            background-color: #dbdbdb;
        }
        &:active {
            background-color: #efefef;
        }
    }
`;

export const signinHeader = css`
    box-sizing: border-box;
    padding-bottom: 50px;
    & h1 {
        font-size: 24px;
    }
`;

