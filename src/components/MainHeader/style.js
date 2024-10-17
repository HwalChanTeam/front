import { css } from "@emotion/react";

export const background = css`
  background-color: #f4f4f4;
`;

export const headerLayout = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1300px;

  & > a {
    text-decoration: none;
  }

  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    /* padding-left: 40px; */
    height: 80px;
    overflow: hidden;
    font-family: "Dancing Script", cursive;
    font-size: 30px;
    color: #964747;

    & > img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const buttonLayout = css`
  box-sizing: border-box;
  display: flex;
  /* padding-right: 60px; */

  & a {
    box-sizing: border-box;
    font-size: 24px;
    background-color: transparent;
    margin-left: 15px;
    border: none;
    height: 30px;
    font-weight: 600;
    color: #964747;
    &:nth-last-of-type(1) {
      border: none;
    }
  }
`;
