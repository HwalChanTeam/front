import { css } from "@emotion/react";

export const headerLayout = css`
    box-sizing: border-box;
    margin: 0px 70px;
    padding: 0px 50px;
`;

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const buttonLayout = css`
    box-sizing: border-box;
    padding: 0px 50px;
    display: flex;
    justify-content: center;

    & a {
        box-sizing: border-box;
        margin-right: 40px;
        height: 40px;
        text-decoration: none;
        font-size: 25px;
        color: #5B5B5B;
    }
    border-bottom: 2px solid #000000;
    width: 100%;

`;

export const selectedMenu = (isSelected) => css`
    border-top: ${isSelected ? "2px solid #E21717" : "transparent"};
`; 

export const menuLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 200px;
    width: 100%;
    height: 100%;
`;

export const menuListBox = css`
    box-sizing: border-box;
    margin-top: 15px;
    padding: 0px;
    padding: 0px 20px;
    width: 100%;
    height: 100%;
    border: 2px solid #D84343;
`;

export const footLayout = css`
    box-sizing: border-box;
    margin-top: 50px;
    width: 100%;
    height: 200px;
    background-color: #dbdbdb;
`;
