import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const contentLayout = css`
    box-sizing: border-box;
    width: 100%;
    & table {
        width: 100%;
    }
`;

export const tableLayout = css`
    width: 100%;
`;

export const subLayout = css`
    box-sizing: border-box;
    margin-left: 95px;
    margin-bottom: 12px;
    width: 80px;
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid #AA1414;

    & h2 {
        margin: 10px 0px 3px;
        padding-left: 5px;
        font-size: 18px;
    }

`;

export const menuLayout = css`
    box-sizing: border-box;
    width: 100%;
    margin: 0px 10px;
    display: flex;
    flex-wrap: wrap;
`;

export const menuList = css`
    box-sizing: border-box;
    width: 245px;
    padding: 0px;
`;

export const imgLayout = css`
    box-sizing: border-box;
    margin-left: 82px;
    width: 160px;
    height: 160px;
    background-color: #dbdbdb;
    cursor: pointer;

    & img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
`;



export const productLayout = css`
    margin-left: 82px;
    & h2 {
        margin: 5px 0px;
        font-size: 15px;
        font-weight: 600;
        &:nth-last-of-type(1) {
            font-weight: 750;
            font-style: italic;
            font-size: 15px;
        }
    }
`;