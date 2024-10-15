import { css } from "@emotion/react";

export const headerLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    height: 100%;

    & > div {
        &:nth-of-type(1) {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            margin-left: 170px;
            margin-right: 190px;
        }
    }
    
    & h1 {
        width: 140px;
        margin: 0px;
        font-size: 50px;
        cursor: pointer;
    }
`;

export const buttonLayout = css`
    box-sizing: border-box;
    display: flex;

    & button {
        box-sizing: border-box;
        font-size: 16px;
        background-color: transparent;
        border: none;
        width: 80px;
        height: 30px;
        border-right: 1px solid #000000;
        &:nth-last-of-type(1) {
            border: none;
        }
}
`;

