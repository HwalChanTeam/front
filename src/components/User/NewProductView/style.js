import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
`;

export const contentLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & table {
        width: 1200px;
        table-layout: fixed;
    }
`;


export const menuLayout = css`
    box-sizing: border-box;
    margin-top: 54px;

    & tr {
        & td {
            padding: 0px;
            width: 200px;
            &:nth-of-type(5n) > div {
                margin-right: 0px;
            }
        }

    } 

`;

export const menuList = css`
    box-sizing: border-box;
    margin-right: 47.28px;
    padding: 0px;
    width: 200px;
`;

export const imgLayout = css`
    box-sizing: border-box;
    cursor: pointer;
    width: 200px;

    & a {
        box-sizing: border-box;
        width: 200px;
        height: 200px;
        & img {
            box-sizing: border-box;
            width: 200px;
            height: 200px;
        }
    }
`;



export const productLayout = css`
    & h2 {
        width: 200px;
        margin: 5px 0px;
        font-size: 18px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:nth-last-of-type(1) {
            font-style: italic;
        }
    }
`;