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
`;

export const menuBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 300px;
    border: 1px solid #000000;
    background-color: #364F6B;


  & button {
    width: 200px;
    height: 70px;
    font-size: 25px;
    margin-bottom: 20px;
    background-color: #3FC1C9;
    border: 1px solid #ffffff;
    color: #F5F5F5;
    /* border-bottom: none; */
    &:hover {
      background-color: #37B7C3;
    }
    &:active {
      background-color: #088395;
    }
  }
`;

export const contentBox = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
