import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #e6e6e6;
`;

export const iconBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
    }
`;