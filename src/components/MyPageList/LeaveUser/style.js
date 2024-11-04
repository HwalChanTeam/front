import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const buttonBox = css`
    display: flex;
    justify-content: center;
& button {
    background-color: transparent;
    border: 1px solid #964747;
    font-size: 16px;
    font-weight: 500;
    color: #964747;
    width: 200px;
    height: 40px;
    margin-right: 40px;
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
    &:hover {
      background-color: #eaeaea;
    }
    &:active {
      background-color: #dbdbdb;
    }
  }
`;
