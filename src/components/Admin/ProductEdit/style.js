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
    width: 980px;
    height: 500px;
    border: 1px solid #000000;
    overflow-y: scroll;
`;

export const tableLayout = css`
    width: 100%;
    height: 100%;
`;

export const tbodyLayout = css`
    width: 100%;
    height: 100%;
`;

export const layout = css`
    box-sizing: border-box;
    padding: 0px 20px 0px 15px;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000000;
`;



export const listBox = css`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;

    & input {
        width: 20px;
        height: 20px;
        border: 1px solid #000000;
    }

    & span {
        font-size: 20px;
        font-weight: 600;

        &:nth-of-type(5) {
            margin-right: 20px;
        }
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