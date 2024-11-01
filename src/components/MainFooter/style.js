import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  display: flex;
  width: 100%;
`;
export const footLayout = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #dbdbdb;
`;

export const mainBox = css`
  box-sizing: border-box;
  display: flex;
  & > div:nth-of-type(1) {
    margin-right: 80px;
  }
  & > div:nth-of-type(2) {
    margin-left: 80px;
  }
`;

export const leftBox = css`
  display: flex;
  flex-direction: column;
  & h1,
  h2 {
    margin: 0;
  }
  & h2 {
    margin-top: 20px;
  }
  & h1 {
    margin-bottom: 20px;
  }
`;

export const buttonBox = css`
  margin-bottom: 20px;
  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:nth-of-type(1) {
      border-right: 1px solid #000000;
    }
  }
`;

export const box = css`
  display: flex;
  flex-direction: column;
`;

export const rightBox = css`
  display: flex;
  flex-direction: column;
`;

export const companyBox = css`
  display: flex;
  flex-direction: column;
`;
