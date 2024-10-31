import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const contentLayout = css`
    box-sizing: border-box;
    margin-top: 54px;
    width: 100%;
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
    width: 272px;
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
    & h2 {
        width: 200px;
        margin: 5px 0px;
        font-size: 20px;
        font-weight: 600;
        &:nth-last-of-type(1) {
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