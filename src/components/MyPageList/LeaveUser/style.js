import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
`;

export const containerStyle = css`
    padding: 20px;
    max-width: 800px;
    margin: auto;
    margin-top: 20px;
    border: 1px solid #dbdbdb;
`;

export const headingStyle = css`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const subHeadingStyle = css`
    font-size: 18px;
    margin-top: 20px;
`;

export const paragraphStyle = css`
    font-size: 16px;
    color: #333;
`;

export const listStyle = css`
    margin-left: 20px;
`;

export const buttonBox = css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
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

