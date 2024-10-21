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
            margin-bottom: 30px;
            font-size: 32px;
            font-weight: 600;
            color: #000000;
        }
    }
`;

export const newProductImgLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    width: 1200px;
    height: 500px;
    
    & img {
        flex: 1;
        margin-right: 15px;
        height: 390px;
        background-color: #dbdbdb;

        &:nth-last-of-type(1) {
            margin: 0px;
        }
    }
`;

