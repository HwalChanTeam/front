import { css } from "@emotion/react";

export const mainBox = css`
  flex-direction: column;
  width: 100%;
  height: 100%;
  & > h1 {
    display: flex;
    margin: 0px;
    padding: 18.5px;
    justify-content: center;
    align-items: center;
    background-color: #3a3a3a;
    color: #ffffff;
  }
`;

export const contentsBox = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const leftBox = css`
  width: 750px;
`;

export const rightBox = css`
  width: 750px;
`;