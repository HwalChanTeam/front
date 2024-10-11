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
    margin-bottom: 100px;
    background-color: #364F6B;
    border: 1px solid #000000;
    color: #ffffff;
    height: 70px;
    width: 500px;
  }
`;

export const imgBox = css`
  & img {
    width: 250px;
    height: 250px;
    border: 1px solid #000000;
    margin-bottom: 100px;
  }
`;

export const inputBox = css`
  font-size: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 330px;
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
    border: 1px solid #000000;
  }
  & span {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    :nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }
  & :nth-of-type(1) {
    display: flex;
    justify-content: left;
  }
`;

export const buttonBox = css`
    & button {
  font-size: 20px;
  border: 1px solid #000000;
  background-color: white;
  border-radius: 5px;
  margin-top: 40px;
  margin-left: 7px;
  &:hover {
      background-color: #efefef99;
  }
  &:active {
      background-color: #aaaaaa99;
  }
}
`;
