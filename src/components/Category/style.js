import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const mainMenuLayout = css`
    box-sizing: border-box;
    width: 1200px;
`;

export const contentLayout = css`
    box-sizing: border-box;
    margin-top: 54px;
    width: 1200px;
    & table {
        width: 100%;
    }
`;

export const tableLayout = css`
    width: 100%;
`;

export const menuLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & td {
        padding: 0px;
    }
`;

export const menuList = css`
    box-sizing: border-box;
    width: 235px;
    padding: 0px;
`;

export const imgLayout = css`
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    background-color: #dbdbdb;
    cursor: pointer;

    & img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
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

export const pageNumber = css`
    & > ul {
        display: flex;
        list-style-type: none;
        & > li {
            margin: 0px 5px;
            & a {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 0 3px;
                border: 1px solid #dbdbdb;
                border-radius: 50%;
                width: 30px;
                

            }
            
        }
        & li:nth-of-type(1) {
            border: none;
        }
    }
`;