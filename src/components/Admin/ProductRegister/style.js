import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;

    & > h1 {
        display: flex;
        margin: 0px;
        padding: 18.5px 0px;
        justify-content: center;
        align-items: center;
        background-color: #3a3a3a;
        color: #ffffff;
    }
`;

export const mainBox = css`
    box-sizing: border-box;
    display: flex;
`;

export const registerBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    width: 600px;
    height: 600px;
    padding: 5px 0;
`;

export const inputBox = css`
    font-size: 18px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    & label {
        padding: 0px 7px;
    
    }

    & select {
        font-size: 16px;
        outline: none;
        border: 1px solid #dbdbdb;
        &:nth-of-type(2) {
        width: 60px;
        }
        
    }

    & input {
        font-size: 18px;
        padding: 0px 10px;
        width: 281px;
        height: 30px;
        border: 1px solid #000000;
        outline: none;
    }
    
    & div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        &:nth-last-of-type(1) {
            & button {
                display: flex;
                align-items: center;
                height: 30px;
                color: #ffffff;
                border: none;
                background-color: #3a3a3a;
                cursor: pointer;
                &:hover {
                    background-color: #686d76;
                }
                &:active {
                    background-color: #3d3b40;
                }
            }
        }

        &:nth-last-of-type(2) {
            & button {
                display: flex;
                align-items: center;
                height: 30px;
                color: #ffffff;
                border: none;
                background-color: #3a3a3a;
                cursor: pointer;
                &:hover {
                    background-color: #686d76;
                }
                &:active {
                    background-color: #3d3b40;
                }
            }
        }

    }

    & :nth-of-type(1) {
        display: flex;
        justify-content: left;
    }
    
    &:nth-last-of-type(1) {
        width: 50px;
        height: 50px;
    }
`;

export const selectBox = css`
    margin-left: 20px;
`;

// 상품 등록 버튼 
export const buttonBox = css`
    & button {
        box-sizing: border-box;
        padding: 0px 10px;
        height: 35px;
        background-color: #3a3a3a;
        border: 1px solid #000000;
        color: #f5f5f5;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
        background-color: #686d76;
        }
        &:active {
        background-color: #3d3b40;
        }
    }
`;

export const rightBox = css`
    box-sizing: border-box;
    margin-top: 50px;
    
    & p {
        margin: 0px;
        margin-bottom: 15px;
        font-size: 18px;
    }
`;

// thumbnailImg 등록 박스
export const thumbnailImgBox = css`
    height: 245px;
    border: none;

    & img {
        width: 230px;
        height: 230px;
    }
`;

// contentsImg 등록 박스

export const contentsImgLayout = css`
    box-sizing: border-box;
    border: none;
`;

export const contentsImgBox = css`
    display: flex;
    box-sizing: border-box;
    
    &:nth-last-of-type(1) {
        margin-right: 0px;
    }
    
    & img {
        margin-right: 10px;
        width: 180px;
        height: 180px;
    
    }
`;
