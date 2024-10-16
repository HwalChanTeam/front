import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 1300px;
  height: 100%;
  /* border: 1px solid #000000;
  padding: 20px; */
  margin: 20px;
  & > div:nth-of-type(1) {
    margin-right: 80px;
  }
  & > div:nth-of-type(2) {
    margin-left: 130px;
}
`;

export const mainBox = css`
    box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid #000000;
  padding: 10px; */
  width: 800px;
  height: 100%;
`;

export const userInfo = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* border: 1px solid #000000; */
    padding: 10px;
`;

export const inputBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #dbdbdb;
    & input {
        width: 400px;
        height: 40px;
        border: 1px solid #dbdbdb;
        padding-left: 10px;
    }
`;

export const productInfo = css`
padding: 10px;
  /* border: 1px solid #000000; */
`;

export const payInfo = css`
padding: 10px;
& button {
  width: 200px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  margin-right: 50px;
  border: 1px solid #dbdbdb;
  & button:nth-of-type(2) {
    margin-right: 0;
  }
}
  /* border: 1px solid #000000; */
`;

export const rightBox = css`
  display: flex;
  flex-direction: column;
  width: 320px;

  border: 1px solid #000000;
`;

export const payInfoRight = css`
  
  border: 1px solid #000000;
`;

export const submitButton = css`
  
`;
