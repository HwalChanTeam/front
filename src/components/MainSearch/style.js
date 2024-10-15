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
  height: 50px;
  border: 1px solid #000000;
  border-radius: 50px;
  padding-right: 20px;
  background-color: white;
  cursor: pointer;
`;

export const searchInput = css`
    width: 100%;
    padding: 20px;
    font-size: 18px;
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