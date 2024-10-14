import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const productLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 40px;
    width: 100%;
    height: 100%;

`;

export const imgLayout = css`   
    box-sizing: border-box;
    width: 500px;
    height: 500px;
    
    & > img {
        width: 100%;
        height: 100%;
    };
`;

export const productContent = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    width: 100%;
    height: 100%;
`;

export const titleLayout = css`
    & h2 {
        margin: 0px;
    }
`;

export const contentBox = css`
    box-sizing: border-box;
    display: flex;
`;
