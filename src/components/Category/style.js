import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
`;

export const contentLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const pageNumber = css`
    width: 1200px;
    & > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        margin-top: 50px;
        padding: 0px;

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
                height: 30px;
            }
            
        }
        & li:nth-of-type(1) {
            border: none;
        }
    }
`;