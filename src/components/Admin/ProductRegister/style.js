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
    margin-bottom: 350px;
    border: 1px solid #000000;
    height: 70px;
    width: 500px;
  }
`;

export const inputBox = css`
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  & label {
    padding-right: 7px;
    padding-left: 7px;
  }
  & select {
    font-size: 18px;
    border-radius: 5px;
  }
  & input {
    font-size: 18px;
    border-radius: 5px;
    padding: 0px 10px;
  }
  & button {
    font-size: 20px;
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
