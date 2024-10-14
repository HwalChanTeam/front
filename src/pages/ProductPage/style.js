import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box; 
    width: 100%;
`;

export const productLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 0px;
    width: 100%;

    border-bottom: 2px solid #dbdbdb;

`;

export const imgLayout = css`   
    box-sizing: border-box;
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
    padding-left: 50px;
    width: calc(100%-500px); /* 이미지 너비를 뺀 나머지 너비 */
`;

export const titleLayout = css`
    box-sizing: border-box;
    padding-bottom: 20px;
    border-bottom: 2px solid #dbdbdb;
    width: 400px;
    & h2 {
        margin: 0px;
        font-size: 26px;
    }

    & p {
        margin: 0px;
        font-size: 20px;
    }
`;

export const price = css`
    box-sizing: border-box;
    padding: 20px 0px;
    border-bottom: 2px solid #dbdbdb;
    & p {
        margin: 0px;
        font-size: 28px;
        font-style: italic;
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
        padding-bottom: 20px;
    }
`;

export const productNameBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;

    & p {
        margin: 0px;
        font-size: 20px;
        padding-bottom: 20px;

        &:nth-last-of-type(1) {
            box-sizing: border-box;
            display: flex;
            padding: 0px;

            & span {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 3px;
                font-size: 18px;

                & button {
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0px 5px;
                    padding: 0px;
                    width: 20px;
                    height: 20px;
                    background-color: #D98585;
                    border-radius: 5px;
                    border: none;
                    color: #ffffff;
                    cursor: pointer;
                }
            }


        }
    }
`;

export const buyProduct = css`
    box-sizing: border-box;
    padding: 20px 0px;
    
    & p {
        box-sizing: border-box;
        display: flex;
        margin: 0px;
        font-size: 20px;

        & span {
            box-sizing: border-box;
            display: flex;
            margin-left: 20px;

            & button {
                box-sizing: border-box;
                margin-right: 10px;
                padding: 0px;
                width: 100px;
                height: 40px;
                font-size: 20px;
                font-weight: 600;
                color: #ffffff;
                border: none;
                background-color: #D98585;
            }

        }
    }
`;
