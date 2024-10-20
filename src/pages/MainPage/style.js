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
    margin-top: 30px;
    width: 1903px;
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

// 신상품

export const newProudctLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    width: 1200px;
`;

export const newProductTitle = css`
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

export const newProductContentLayout = css`
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


export const imgLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    & img {
        margin-right: 30px;
        width: 250px;
        height: 250px;
        background-color: #dbdbdb;
        cursor: pointer;
    }

    & div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 110px;
        background-color: #797979;
        & p {
            margin: 0px;
            font-size: 24px;
            font-weight: 600;
            color: #ffffff;

            &:nth-last-of-type(1) {
                font-size: 20px;
                color: #000000;
            }

        }
    }

`;

// best 상품

export const bestProductLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    width: 1200px;
`;

export const bestProductTitle = css`
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

export const bestProductContentLayout = css`
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


export const bestImgLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    & img {
        margin-right: 20px;
        width: 200px;
        height: 200px;
        background-color: #dbdbdb;
        cursor: pointer;
    }

    & div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 200px;
        & p {
            margin: 0px;
            font-size: 18px;
            font-weight: 600;

            &:nth-of-type(1) {
                margin: 5px 0px;
            }
        }
    }

`;

// MD 추천 상품

export const MDProductLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    width: 1200px;
`;

export const MDProductTitle = css`
    box-sizing: border-box;

    & p {
        margin-bottom: 20px;
        font-size: 28px;
        font-weight: 600;
    }
`;

export const MDProductContentLayout = css`
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


export const MDProductImgLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    & img {
        margin-right: 20px;
        width: 200px;
        height: 200px;
        background-color: #dbdbdb;
        cursor: pointer;
    }

    & div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 200px;
        & p {
            margin: 0px;
            font-size: 18px;
            font-weight: 600;

            &:nth-of-type(1) {
                margin: 5px 0px;
            }
        }
    }

`;