import { css } from "@emotion/react";

export const headerLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 110px;
    background-color: #FF9191;

    & div {
        &:nth-of-type(1) {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            margin-left: 20px;
        }
    }
    
    & h1 {
        display: flex;
        align-items: center;
        margin: 0px;
        padding-left: 50px;
        font-size: 50px;
        cursor: pointer;
    }
        
    & > button {
        box-sizing: border-box;
        background-color: transparent;
        border: none;
    }
`;

export const buttonLayout = css`
    box-sizing: border-box;
    display: flex;

    & button {
        height: 28px;
        margin-top: 5px;
        padding-right: 5px;
        font-size: 16px;
        background-color: transparent;
        border: none;
        border-right: 1px solid #000000;
        &:nth-last-of-type(1) {
            margin-right: 10px;
            border: 0px;
        }
}
`;

