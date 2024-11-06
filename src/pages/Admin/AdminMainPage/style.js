import { css } from "@emotion/react";

export const layout = css`
  width: 100%;
  height: 100%;
`;

export const mainBox = css`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const menuBox = css`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 260px;
  background-color: #3a3a3a;
  /* #1F2544 */

  & a {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    text-decoration: none;
    color: #f5f5f5;
    &:not(&:nth-of-type(1)):hover {
      background-color: #686d76;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
    & > span {
      margin-left: 15px;
    }
  }
`;

export const menuBotton = css`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  width: 100%;
  height: 50px;
  background-color: #2e2e2e;
`;

export const logoutButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 5px 30px;
  font-size: 14px;
  color: #fafafa;
  background-color: transparent;

  & > svg {
    margin-right: 15px;
  }
`;

export const selectedMenu = (isSelected) => css`
  background-color: ${isSelected ? "#2998FF" : "transparent"};
`;

export const logo = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  color: #ffffff;
  font-size: 25px !important;
  font-weight: 600;
  cursor: pointer;

  & > a {
    text-decoration: none;
  }
`;

export const contentBox = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;
