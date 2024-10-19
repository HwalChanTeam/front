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

export const buttonLayout = css`
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

export const selectedMenu = (isSelected) => css`
    border-top: ${isSelected ? "2px solid #964747" : "transparent"};
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


