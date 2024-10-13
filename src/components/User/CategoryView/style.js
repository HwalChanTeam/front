import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const titleLayout = css`
    box-sizing: border-box;
    width: 100%;

    & h2 {
        margin-top: 15px;
        padding-left: 8px;
        margin-bottom: 5px;
        border-bottom: 3px solid #AA1414;
        width: 107px;
    }

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
    width: 107px;
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid #AA1414;

    & h2 {
        margin: 10px 0px 3px;
        padding-left: 5px;
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
    margin-left: 85px;
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
    margin-left: 85px;
    & h2 {
        margin: 5px 0px;
        font-size: 18px;
        font-weight: 600;
        &:nth-last-of-type(1) {
            font-weight: 750;
            font-style: italic;
            color: #5DB755;
        }
    }
`;