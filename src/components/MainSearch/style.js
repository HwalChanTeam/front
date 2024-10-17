import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const searchSection = css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 500px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #964747;
  padding-right: 20px;
  background-color: transparent;
  cursor: pointer;

  & svg {
    color: #964747;
  }
`;

export const searchInput = css`
  padding-left: 20px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  outline: none;
  background-color: transparent;
  border: none;
`;

export const searchButton = css`
  height: 45px;
  background-color: #db8a8a;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #c97a7a;
  }

  &:active {
    background-color: #a86363;
  }
`;
