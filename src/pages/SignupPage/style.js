import { css } from "@emotion/react";

export const mainLayout = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1300px;
  height: 800px;
`;

export const logo = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
`;

export const layout = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 50px 100px;
  padding: 50px 50px;
  border: 2px solid #964747;
  border-radius: 4px;
  flex-grow: 1;
`;

export const headerLayout = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    overflow: hidden;

    & img {
      width: 140%;
    }
  }

  & h2 {
    margin: 0px 0px 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const inputUser = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  & input {
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 0px 20px;
    outline: none;
    width: 100%;
    height: 40px;
    font-size: 14px;
    border: 1px solid #964747;
    border-radius: 4px;
    :nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }
`;

export const inputEmail = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;

    & input[type="text"] {
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 0px 20px;
    outline: none;
    width: 100%;
    height: 40px;
    font-size: 14px;
    border: 1px solid #964747;
    border-radius: 4px;
    }
    
    & input[name="emailCheck"] {
        margin-top: 10px;
        width: 450px;
        height: 50px;
        border: 1px solid #000000;
    }

    & button {
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    border: 1px solid #964747;
    border-radius: 4px;
    color: #964747;
    font-weight: 600;
  }
`;

export const emailCkeck = css`
  display: flex;
  width: 100%;

  & input {
    border-right: none; /* 오른쪽 보더 없애기 */
    border: 1px solid #964747; /* 나머지 보더 설정 */
    border-radius: 4px 0 0 4px; /* 왼쪽만 둥글게 */
    margin-bottom: 0;
  }

  & button {
     width: 100px; /* 버튼 너비 조정 */
    border-radius: 0 4px 4px 0; /* 오른쪽만 둥글게 */
    margin-left: -10px; /* 버튼과 입력란 사이의 경계 보더 문제 해결 */
    margin-bottom: 0;
  }
`;

export const joinOkButton = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;

    & > button {
    margin-bottom: 10px;
    width: 100%;
    height: 40px;
    background-color: #222222;
    border: 1px solid #000000;
    border-radius: 4px;
    color: white;
    font-weight: 600;
    }
`;

export const oauth2Buttons = css`
  display: flex;
  width: 100%;

  & > button {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 173px;
    height: 40px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    font-weight: 600;

    &:nth-of-type(1) {
      margin-right: 5px;
      background-color: #03c75a;
      color: #ffffff;
    }

    &:nth-of-type(2) {
      margin-left: 5px;
      background-color: #242424;
      color: #ffffff;
    }

    & svg {
      margin-right: 10px;
    }
  }
`;
