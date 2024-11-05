import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    align-items: center;
    padding: 20px 0px;
    width: 1200px;
    position: sticky;
    top: 100px;
    z-index: 100;
    background-color: white;
`;

export const menusLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    padding-left: 4px;
`;

export const selectedMenu = (isSelected) => css`
    position: relative;
    display: flex;
    color: #5B5B5B;
    text-decoration: none; // 방문 후에도 밑줄 등 스타일 유지
    
    & a {
        text-decoration: none;
        margin-right: 25px;
        
        & span {
            border-top: ${isSelected ? "2px solid #964747" : "transparent"};
            font-size: 18px;
            color: #5B5B5B;
            
            &:nth-of-type(1) {
                margin-right: 5px;
            }
        }
    }

    &:hover {
        color: #964747;
        font-weight: 600;
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


