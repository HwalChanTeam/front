import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 100%;
  margin: 20px 0px;
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
  & p {
    display: flex;
    justify-content: right;
    margin-right: 10px;
    margin-bottom: 0;
    & button {
      background-color: transparent;
      border: 1px solid #dbdbdb;
      padding: 5px;
      &:hover {
        background-color: #eaeaea;
      }
      &:active {
        background-color: #dbdbdb;
      }
    }
  }
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

export const addressBox = css`
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

export const buttonBox = css`
  display: flex;
  align-items: center;
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
