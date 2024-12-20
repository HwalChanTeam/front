import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 1200px;
`;

export const titleLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: #f5f5f5;

    & p {
        width: 1200px;
        margin: 0px;
        font-size: 36px;
        font-weight: 600;
        color: #964747;

        &:nth-last-of-type(1) {
            margin-top: 10px;
            font-size: 24px;
            color: #000000;
        }
    }
`;

export const productLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    width: 1200px;
`;

export const productTitle = css`
    box-sizing: border-box;
    & p {
        margin: 0px;
        font-size: 20px;
        color: #c2c2c2;

        &:nth-last-of-type(1) {
            margin-bottom: 20px;
            font-size: 28px;
            font-weight: 600;
            color: #000000;
        }
    }
`;

export const productContentLayout = css`
    box-sizing: border-box;
    display: flex;
    width: 1200px;

    & div {
        &:nth-last-of-type(1) {
            & > img {
                margin-right: 0px;
            }
        }
    }
`;

// 신상품
export const newProductLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    & img {
        width: 220px;
        height: 220px;
        cursor: pointer;
    }

    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 220px;
        height: 110px;
        background-color: #797979;

        & p {
            box-sizing: border-box;
            margin: 0px;
            padding: 0px 15px;
            width: 220px;
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            &:nth-of-type(1) {
                font-size: 16px;
                font-weight: 400;
            }
            
            &:nth-last-of-type(1) {
                margin-top: 10px;
                font-size: 18px;
                color: #000000;
            }

        }
    }

`;

// new, best 상품
export const ProductLink = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 1180px;

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 40px;
        text-decoration: none;
        color: #000000;
        border: 1px solid #964747;
    }
`;

// best, md 상품
export const productImgLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    & img {
        width: 220px;
        height: 220px;
        background-color: #dbdbdb;
        cursor: pointer;
    }

    & > div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 220px;
        & > p {
            margin: 0px;
            font-size: 18px;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            &:nth-of-type(1) {
                color: #c2c2c2;
                font-size: 14px;
            }

            &:nth-of-type(2) {
                margin: 5px 0px;
            }
        }
    }

`;

export const footerBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding-right: 10px;

    & p {
        margin: 0px;
        width: 100px;
        font-style: italic;
        font-size: 18px;
        font-weight: 600;
    }
`;

// pageNumber
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