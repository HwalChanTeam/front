import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 100%;
  margin: 20px 0px;
  & > div:nth-of-type(1) {
    margin-right: 80px;
  }
  & > div:nth-of-type(2) {
    margin-left: 130px;
  }
`;

export const mainBox = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  height: 100%;
`;

export const userInfo = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const inputBox = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #dbdbdb;
  & input {
    width: 400px;
    height: 40px;
    border: 1px solid #dbdbdb;
    padding-left: 10px;
  }
`;

export const adressInputBox = css`
    box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #dbdbdb;
  & input {
    width: 400px;
    height: 40px;
    border: 1px solid #dbdbdb;
    padding-left: 10px;
  }
`;

export const adressButton = css`
  display: flex;
  justify-content: right;
  margin-top: 10px;
  & button {
    background-color: transparent;
    border: 1px solid #dbdbdb;
    &:hover {
      background-color: #eaeaea
    }
    &:active {
      background-color: #cfcfcf
    }
  }
`;

export const productInfo = css`
  padding: 10px;
`;

export const productTable = css`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100px;
  padding: 10px 5px;
  border: 1px solid #dbdbdb;
  font-size: 16px;
  font-weight: 500;
  & > tr {
    display: flex;
    & td:nth-of-type(1) {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    & td:nth-of-type(2) {
      margin-right: 20px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    & td:nth-of-type(3) {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    & td:nth-of-type(4) {
      display: flex;
      align-items: center;
      margin-right: 20px;
      width: 70px;
      word-break: break-word;
    }
    & td:nth-of-type(5) {
      display: flex;
      align-items: center;
      margin-right: 20px;
      width: 70px;
      word-break: break-word;
    }
    & td:nth-of-type(6) {
      display: flex;
      align-items: center;
      margin-right: 20px;
      width: 70px;
      word-break: break-word;
    }
  }
`;

export const payInfo = css`
  padding: 10px;
  & button {
    width: 200px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    background-color: transparent;
    margin-right: 50px;
    border: 1px solid #dbdbdb;
    &:hover {
      background-color: #eaeaea
    }
    &:active {
      background-color: #dbdbdb
    }
    & button:nth-of-type(2) {
      margin-right: 0;
    }
  }
`;

export const rightBox = css`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const payInfoMain = css`
  font-size: 16px;
  font-weight: 600;
  & > div {
    border-bottom: 1px solid #dbdbdb;
  }
`;

export const payinfo = css`
  display: flex;
  justify-content: space-between;
`;

export const submitButton = css`
  display: flex;
  justify-content: center;
  & button {
    border: 1px solid #964747;
    background-color: transparent;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 30px;
    margin-top: 20px;
    cursor: pointer;
    color: #964747;
    &:hover {
      background-color: #eaeaea
    }
    &:active {
      background-color: #dbdbdb
    }
  }
`;
