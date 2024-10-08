import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const buttonLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    & button {
        box-sizing: border-box;
        width: 160px;
        height: 80px;
        margin-right: 10px;
        font-size: 25px;
        background-color: transparent;
        border: none;
        color: #5B5B5B;
    }

`;

export const line = css`
    width: 95%;
    border: 1px solid #000000;
`;

export const menuLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const menuListBox = css`
    box-sizing: border-box;
    margin-top: 15px;
    width: 95%;
    height: 100%;
    border: 2px solid #D84343;
`;

export const footLayout = css`
    box-sizing: border-box;
    margin-top: 50px;
    width: 100%;
    height: 200px;
    background-color: #dbdbdb;
`;
