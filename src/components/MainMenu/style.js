import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    align-items: center;
    padding: 20px 0px;
    width: 100%;
`;

export const menusLayout = css`
    box-sizing: border-box;
    display: flex;
    padding-left: 4px;
    flex-grow: 1;

    & > a {
        box-sizing: border-box;
        margin-right: 60px;
        text-decoration: none;
        font-size: 20px;
        color: #5B5B5B;
    }
    

`;

export const categoryButton = css`
    position: relative;

    & li {
        background-color: transparent;
        border: none;
        padding: 0px;

        & > span {
            margin-right: 60px;
            font-size: 16px;
            color: #5B5B5B;
        }
    }
`;

export const categorySubLayout = css`
    list-style-type: none;
    box-sizing: border-box;
    margin: 0px;
    padding: 20px 0px;
    position: absolute;
    top: 29px;
    left: 0;
    width: max-content;
    z-index: 99;
    background-color: #ffffff;
    border: 1px solid #dbdbdb;

    & a {
        padding-bottom: 5px;
        text-decoration: none;

        & li {
            box-sizing: border-box;
            margin: 0px;
            padding: 5px 25px;
            font-size: 20px;
            width: 100%;
            color: #5B5B5B;

            &:hover {
                color: #964747;
            }
        }

        
    }
`;

export const categorySubSideLayout = css`
    list-style-type: none;
    box-sizing: border-box;
    margin: 0px;
    padding: 20px 50px 20px 20px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    width: max-content;
    height: 100%;
    z-index: 99;
    background-color: #fdfdfd;
    border: 1px solid #dbdbdb;

    & a {
        padding-bottom: 5px;
        text-decoration: none;

        & li {
            margin: 0px;
            padding: 5px 0px;
            font-size: 20px;
            color: #5B5B5B;

            &:hover {
                color: #964747;
            }
        }

        
    }
`;

export const selectedMenu = (isSelected) => css`
    position: relative;
    border-top: ${isSelected ? "2px solid #964747" : "transparent"};

    & > span:nth-of-type(1) {
        margin-right: 5px;
    }

    &:hover {
        color: #964747;
        font-weight: 600;
    }
    
`; 

export const menuLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 100%;
`;

export const menuListBox = css`
    box-sizing: border-box;
    margin-top: 20px;
    width: 100%;
    height: 100%;
`;


