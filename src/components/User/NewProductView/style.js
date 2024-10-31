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
`;


export const menuLayout = css`
    box-sizing: border-box;
    width: 1200px;
    table-layout: fixed;
    & td {
        padding: 0px;

        &:nth-of-type(5n) > div {
            margin-right: 0px;
        }
    }

`;

export const menuList = css`
    box-sizing: border-box;
    margin-top: 50px;
    margin-right: 50px;
    width: 200px;
    padding: 0px;
`;

export const imgLayout = css`
    box-sizing: border-box;
    width: 200px;
    cursor: pointer;

    & img {
        box-sizing: border-box;
        width: 200px;
        height: 200px;
    }
`;



export const productLayout = css`
    width: 200px;
    & p {
        margin: 0px;
        margin-top: 10px;
        width: 200px;
        font-size: 14px;
        color: #c2c2c2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    & h2 {
        margin: 5px 0px;
        font-size: 18px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:nth-last-of-type(1) {
            margin-top: 30px;
            font-style: italic;
        }
    }
`;