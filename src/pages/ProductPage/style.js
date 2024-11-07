import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px
`;

export const productLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px 0px;  
    width: 100%;

    border-bottom: 2px solid #dbdbdb;

`;

export const imgLayout = css`   
    box-sizing: border-box;
    padding-left: 4px;
    width: 500px;
    height: 500px;

    & img {
        width: 100%;
        height: auto;
    }
`;

export const productContent = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: calc(100%-500px); /* 이미지 너비를 뺀 나머지 너비 */
`;

export const titleLayout = css`
    box-sizing: border-box;
    padding-bottom: 20px;
    width: 500px;
    border-bottom: 2px solid #dbdbdb;
    & h2 {
        margin: 0px;
        font-size: 24px;
    }

    & p {
        margin: 0px;
        font-size: 18px;
    }
`;

export const price = css`
    box-sizing: border-box;
    padding: 20px 0px;
    border-bottom: 2px solid #dbdbdb;
    & p {
        margin: 0px;
        font-size: 24px;
        font-weight: 600;
    }
`;

export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    border-bottom: 2px solid #dbdbdb;
`;

export const contury = css`
    box-sizing: border-box;
    padding-right: 41px;
    border-right: 2px solid #dbdbdb;

    & p {
        margin: 0px;
        font-size: 20px;
        padding: 20px 0px;

        &:nth-of-type(1) {
            padding-bottom: 0px;
        }
    }
`;

export const productTitleBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-left: 15px;

    & p {
        margin: 0px;
        font-size: 18px;
        padding: 20px 0px;

        &:nth-last-of-type(1) {
            box-sizing: border-box;
            display: flex;
            padding: 0px;

            & span {
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 5px;
                padding-top: 2px;
                width: 90px;
                font-size: 18px;

                & button {
                    box-sizing: border-box;
                    padding: 0px;
                    width: 24px;
                    height: 24px;
                    background-color: transparent;
                    border: 1px solid #964747;
                    font-weight: 600;
                    color: #964747;
                    cursor: pointer;

                    &:nth-of-type(1) {
                        box-sizing: border-box;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding-bottom: 5px;
                        font-size: 18px;
                    }
                }
            }


        }
    }
`;

export const buyProduct = css`
    box-sizing: border-box;
    padding: 20px 70px 20px 0px;
    
    & p {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px;
        font-size: 20px;

        & span {
            box-sizing: border-box;
            display: flex;
            align-items: center;

            & button {
                box-sizing: border-box;
                margin-right: 10px;
                padding: 0px;
                width: 100px;
                height: 40px;
                font-size: 20px;
                font-weight: 600;
                color: #964747;
                border: 1px solid #964747;
                background-color: transparent;

                &:hover {
                    background-color: #eaeaea;
                }

                &:active {
                    background-color: #dbdbdb;
                }
            }
            & svg {
                &:nth-last-of-type(1) {
                    margin: 0px 10px;
                }
            }

        }
    }
`;

// 상품 상세 설명란

export const menuLayout = css`
    box-sizing: border-box;
    margin-top: 60px;
    width: 1200px;
    height: 100%;
`;

export const menuBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 100%;
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
        color: #000000;
        
    }
`;

export const selectProductMenu = (redOutLine) => css`
    border: ${redOutLine ? "2px solid #964747" : "transparent"};
`;  

export const productInfor = css`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;


