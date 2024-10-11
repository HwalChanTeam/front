import { css } from "@emotion/react";

export const layout = css`
  width: 100%;
  height: 100%;
`;

export const mainBox = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
`;

export const menuBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 450px;
  border: 1px solid #000000;

  & > h1 {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 350px;
    border: 1px solid #000000;
    border-radius: 5px;
  }

  & button {
    width: 350px;
    height: 70px;
    font-size: 25px;
    background-color: white;
    border: 1px solid #000000;
    border-bottom: none;
    &:hover {
        background-color: #efefef99;
      }
      &:active {
        background-color: #aaaaaa99;
      }
  }
  & :nth-last-of-type(1) {
      border-bottom: 1px solid #000000;
    }
`;


export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 100%;
`;
