import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 100%;
    height: 100%;
`;

export const headerLayout = css`
    box-sizing: border-box;
    width: 100%;
    border-bottom: 2px solid #000000;
`;

export const layout = css`
    box-sizing: border-box;
    width: 100%;
`;

export const buttonLayout = css`
    box-sizing: border-box;
    padding: 0px 300px;
    width: 100%;
    display: flex;
    justify-content: center;

    & a {
        box-sizing: border-box;
        margin-right: 60px;
        margin-bottom: 5px;
        text-decoration: none;
        font-size: 13px;
        color: #5B5B5B;
    }
    

`;

export const selectedMenu = (isSelected) => css`
    border-top: ${isSelected ? "2px solid #E21717" : "transparent"};
`; 

export const menuLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 300px;
    width: 100%;
    height: 100%;
`;

export const menuListBox = css`
    box-sizing: border-box;
    margin-top: 15px;
    padding: 0px auto;
    width: 100%;
    height: 100%;
    border: 2px solid #D84343;
`;


