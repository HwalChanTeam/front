import { css } from "@emotion/react";

export const mainBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    background-color: #364F6B;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    height: 70px;
    width: 500px;
  }
`;

export const tableBox = css`
    box-sizing: border-box;
    width: 980px;
    height: 500px;
    overflow-y: scroll;
    border: 1px solid #000000;
`;

export const table = css`
  box-sizing: border-box;
  padding: 20px;
  overflow-y: hidden;
  width: 100%;
  height: 500px;
  & h2 {
    display: flex;
    justify-content: center;
  }
`;

export const productBox = css`
  box-sizing: border-box;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    height: 75px;
    margin-bottom: 10px;
  }
`;

export const tableDiv = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const spanBox = css`
  display: flex;
  flex-grow: 1; /* 추가: 남는 공간을 차지하도록 설정 */
  padding-left: 40px;
  & span {
    font-size: 20px;
    font-weight: 600;
    margin-right: 30px;
  }
`;

export const buttonBox = css`
  display: flex;
  & button {
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: white;
    border-radius: 5px;
    margin-left: 7px;
    &:hover {
      background-color: #efefef99;
    }
    &:active {
      background-color: #aaaaaa99;
    }
  }
`;
