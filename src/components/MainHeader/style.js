import { css } from "@emotion/react";

export const headerLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 110px;
    background-color: #FF9191;
    

    & > button {
        box-sizing: border-box;
        background-color: transparent;
        border: none;
    }

    & > h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 0px 0px 170px;
        margin:0px;
        font-size: 50px;
    }

`;

export const buttonLayout = css`
    box-sizing: border-box;
    display: flex;

    & button {
        height: 20px;
        margin-top: 5px;
        padding-right: 5px;
        size: 16px;
        background-color: transparent;
        border: none;
        border-right: 1px solid #000000;
        &:nth-last-of-type(1) {
            margin-right: 10px;
            border: 0px;
        }
}
`;

