import { css } from "@emotion/react";

export const mainBox = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 95%;
  padding: 0 50px;
  margin: 0 auto;
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
    border-bottom: none;

    border-radius: 5px;
    :nth-last-of-type(1) {
      border: 1px solid #000000;
    }
  }
`;


export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1500px;
    height: 100%;
    border: 1px solid #000000;
    border-top: none;
    border-bottom: none;
    border-left: none;
`;
