import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 1200px;
    height: 100%;
`;

export const headerLayout = css`
    box-sizing: border-box;
    width: 100%;
`;

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const menusLayout = css`
    box-sizing: border-box;
    display: flex;
    padding-left: 4px;
    width: 100%;

    & a {
        box-sizing: border-box;
        margin-right: 60px;
        text-decoration: none;
        font-size: 16px;
        color: #5B5B5B;
    }
    

`;

export const categoryButton = css`
    position: relative;

    & button {
        background-color: transparent;
        border: none;
        padding: 0px;

        & span {
            margin-right: 60px;
            font-size: 16px;
            color: #5B5B5B;
        }
    }
`;

export const categorySubLayout = css`
    box-sizing: border-box;
    margin: 0px;
    margin-top: 5px;
    padding: 5px;
    width: 90px;
    height: 125px;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    background-color: #ffffff;
    border: 1px solid #dbdbdb;

    & li {
        width: 70px;
        list-style: none;
        padding-bottom: 5px;

        & a{
            margin: 0px;
            width: 100px;
            font-size: 16px;
            color: #5B5B5B;

            &:hover {
                font-weight: 600;
            }
        }
    }
`;

export const categoryMealkitSubLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 5px;
    width: 90px;
    height: 92px;
    position: absolute;
    top: -1px;
    left: 100%;
    z-index: 1000;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;

    & li {
        list-style: none;
        padding-bottom: 5px;

        & a{
            display: flex;
            justify-content: center;
            margin: 0px;
            width: 100%;
            font-size: 16px;
            color: #5B5B5B;

            &:hover {
                font-weight: 600;
            }
        }
    }
`;

export const selectedMenu = (isSelected) => css`
    border-top: ${isSelected ? "2px solid #964747" : "transparent"};

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


