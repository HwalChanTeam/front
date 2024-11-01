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
    width: 1200px;
`;

export const subLayout = css`
    box-sizing: border-box;
    margin-bottom: 12px;
    width: 85px;
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid #AA1414;

    & h2 {
        margin: 10px 0px 3px;
        padding-left: 5px;
        width: 100%;
        font-size: 18px;
    }

`;

export const ReviewLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 1200px;    

    & tr {
        margin-bottom: 15px;
    }
`;

export const ReviewList = css`
    box-sizing: border-box;
    display: flex;
    width: 1200px;
    height: 151px;
    padding: 0px;
    border: 1px solid #dbdbdb;
`;

export const productImgLayout = css`
    box-sizing: border-box;
    border: none;
    background-color: #dbdbdb;
    cursor: pointer;
    
    & img {
        box-sizing: border-box;
        width: 150px;
        height: 150px;
    }
`;

export const productReviewLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 1049px;
    height: 150px;
`;

export const userLayout = css`
    box-sizing: border-box;
    display: flex;
    padding-top: 5px;
    padding-left: 10px;
    align-items: center;
    height: 30px;

    & h2 {
        margin: 0px;
        padding-left: 5px;
        font-size: 12px;
        font-weight: 600;
    }
`;

export const reviewContent = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 5px;
    padding: 0px 10px;
    width: 1049px;
    height: 85px;
    border-top: 1px solid #dbdbdb;
    overflow-wrap: break-word;

    & p {
        margin: 0px;
        width: 1029px;
        font-size: 12px;
    }
`;

export const createData = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;

    & p {
        margin: 0px;
        padding-right: 10px;
        padding-bottom: 5px;
    }
`;