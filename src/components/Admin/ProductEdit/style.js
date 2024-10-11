import { css } from "@emotion/react";

export const mainBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    background-color: #364F6B;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    height: 70px;
    width: 500px;
  }
`;

export const titleLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px 0px 15px;
    font-size: 18px;
    width: 980px;
    height: 60px;
    border: 1px solid #000000;
    border-bottom: none;

    & input {
        width: 20px;
        height: 20px;
        border: 1px solid #000000;
    }

`;

export const container = css`
    box-sizing: border-box;
    width: 980px;
    height: 500px;
    border: 1px solid #000000;
    overflow-y: scroll;
`;

export const tableLayout = css`
    width: 100%;
    border-collapse: collapse;
`;

export const tbodyLayout = css`
    width: 100%;
`;

export const productItem = css`
    box-sizing: border-box;
    border: 1px solid #000000;
    height: 40px;
    cursor: default;
`;


export const buttonLayout = css`
    box-sizing: border-box;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 100px;

    & button {
        box-sizing: border-box;
        width: 150px;
        height: 60px;
        background-color: #364F6B;
        border: 1px solid #000000;
        border-radius: 5px;
        color: #F5F5F5;
        font-size: 18px;
        font-weight: 600;
        
        &:hover {
        background-color: #686D76;
        }
        &:active {
        background-color: #3D3B40;
        }

        &:nth-last-of-type(1) {
            margin-left: 80px;
        }
    }
`;