import { css } from "@emotion/react";

export const mainBox = css`
  flex-direction: column;
  width: 100%;
  height: 100%;
  & > h1 {
    display: flex;
    margin: 0px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    background-color: #3a3a3a;
    color: #ffffff;
  }
`;

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: none;
  width: 800px;
  
  & > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 100px;
    background-color: #3a3a3a;
    border: 1px solid #000000;
    color: #ffffff;
    width: 200px;
    height: 70px;
  }
`;

export const registerBox = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  width: 600px;
  height: 600px;
  padding: 5px 0;
`;

export const inputBox = css`
  font-size: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  & label {
    padding-right: 7px;
    padding-left: 7px;
  }
  & select {
    font-size: 18px;
  }
  & input {
    font-size: 18px;
    padding: 0px 10px;
    border: 1px solid #000000;
  }
  & span {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  & :nth-of-type(1) {
    display: flex;
    justify-content: left;
  }
  &:nth-last-of-type(1) {
    width: 50px;
    height: 50px;
  }
`;

export const selectBox = css`
  margin-left: 55px;
`;

export const buttonBox = css`
  & button {
    box-sizing: border-box;
    width: 50px;
    height: 30px;
    background-color: #3a3a3a;
    border: 1px solid #000000;
    color: #f5f5f5;
    font-size: 14px;
    font-weight: 600;

    &:hover {
      background-color: #686d76;
    }
    &:active {
      background-color: #3d3b40;
    }
  }
`;
