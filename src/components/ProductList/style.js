import { css } from "@emotion/react";

export const menuLayout = css`
    box-sizing: border-box;
    display: flex;
    margin: 0px;
    padding: 0px;
    width: 1200px;
    list-style-type: none;

    &:nth-of-type(1) {
        margin-top: 24px;
    }

    & li {
        &:nth-of-type(5n) > div {
            margin-right: 0px;
        }
    }
`;

export const menuList = css`
    box-sizing: border-box;
    margin-top: 30px;
    margin-right: 50px;
    width: 200px;
    padding: 0px;
`;

export const imgLayout = css`
    box-sizing: border-box;
    width: 200px;
    cursor: pointer;

    & img {
        box-sizing: border-box;
        width: 200px;
        height: 200px;
    }
`;



export const productLayout = css`

    & p {
        margin: 0px;
        margin-top: 10px;
        width: 200px;
        font-size: 14px;
        color: #c2c2c2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    & h2 {
        margin: 5px 0px;
        font-size: 18px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
`;

export const footerBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    margin-top: 30px;

    & h2 {
        margin: 0px;
        width: 100px;
        font-style: italic;
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