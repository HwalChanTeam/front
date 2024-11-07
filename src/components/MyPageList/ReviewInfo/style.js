import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const contentLayout = css`
    box-sizing: border-box;
    width: 800px;
`;

export const subLayout = css`
    box-sizing: border-box;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;

    & h2 {
        margin: 10px 0px 3px;
        padding-left: 5px;
    }

`;

export const productStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.02);
    }

`;

export const ReviewList = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0px;
`;

export const productImgLayout = css`
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    
    & img {
        box-sizing: border-box;
        width: 100px;
        height: 100px;
    }
`;

export const productReviewLayout = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 10px;
    width: 630px;

    & h2 {
        margin: 10px 0px;
        font-size: 18px;
        font-weight: bold;
    }

    & > p {
        margin: 10px 0px;
        flex-wrap: wrap;
        font-size: 16px;
        color: #333;
        white-space: normal; // 줄바꿈 허용
        overflow-wrap: break-word; // 긴 단어가 있는 경우 줄바꿈 허용
    }
`;

export const iconBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {

        & svg{
            color: #964747;
            cursor: pointer;
            &:nth-of-type(1) {
                margin-right: 10px;
            }
        }
    } 
`;

export const createData = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    & p {
        margin: 0px;
    }
`;