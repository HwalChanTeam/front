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
  width: 900px;
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
  font-size: 14px;
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
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #dbdbdb;
  & input {
    width: 400px;
    height: 40px;
    border: 1px solid #dbdbdb;
    padding-left: 10px;
  }
`;

export const addressInput = css`
    & > input {
        margin-left: 290px;
        width: 100px;
        border: 1px solid #dbdbdb;
    }
`;

export const adressButton = css`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 0 0 0 290px;
  & button {
    width: 80px;
    margin-top: 5px;
    background-color: transparent;
    border: 1px solid #dbdbdb;
    &:hover {
      background-color: #eaeaea;
    }
    &:active {
      background-color: #cfcfcf;
    }
  }
`;

export const productInfo = css`
  padding: 10px;
`;

export const productTable = css`
  border: 1px solid #dbdbdb;
  width: 100%;
  border-collapse: collapse;
  & td {
    font-size: 14px;
    height: 60px;
    border: 1px solid #dbdbdb;
    &:nth-of-type(2) {
      text-align: center;
    }
    img {
      width: 80px;
      height: 80px;
      padding: 0;
    }
  }
`;

export const payInfo = css`
  padding: 10px;
  & button {
    width: 200px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    background-color: transparent;
    margin-right: 50px;
    &:hover {
      background-color: #eaeaea;
    }
    &:active {
      background-color: #dbdbdb;
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
  font-size: 14px;
  font-weight: 600;
  & > div {
    border-bottom: 1px solid #dbdbdb;
  }
`;

export const payinfo = css`
  display: flex;
  justify-content: space-between;
`;

export const selectClick = (isSelected) => css`
    border: 1px solid ${isSelected ? "#964747" : "#dbdbdb"};
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
      background-color: #eaeaea;
    }
    &:active {
      background-color: #dbdbdb;
    }
  }
`;