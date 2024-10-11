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
    border: 1px solid #000000;
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
    padding-bottom: 5px;
    width: 980px;
    height: 500px;
    border: 1px solid #000000;
    border-radius: 5px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
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
    border-bottom: 1px solid #000000;
    border-right: 1px solid #000000;
    padding: 0px;
    width: 100px;
    height: 40px;
    cursor: default;

    & span {
        display: flex;
        justify-content: center;
    }

    &:nth-last-of-type(1) {
        border-right: none;
    }

    &:nth-of-type(1) {
        box-sizing: border-box;
        padding-left: 22px;
        width: 50px;
        height: 40px;
        
    }
    
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
        background-color: white;
        border: 1px solid #000000;
        border-radius: 10px;

        &:nth-last-of-type(1) {
            margin-left: 80px;
        }

        &:hover {
            background-color: #f0f0f0;
        }

        &:active {
            background-color: #dbdbdb;
        }
    }
`;