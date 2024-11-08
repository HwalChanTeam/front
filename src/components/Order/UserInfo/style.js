import { css } from "@emotion/react";



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

export const pointBox = css`
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
    height: 30px;
    border: 1px solid #dbdbdb;
    padding-left: 10px;
  }
`;

export const pointInputBox = css`
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