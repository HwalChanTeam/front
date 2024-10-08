import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;

export const searchSection = css`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const searchInput = css`
    box-sizing: border-box;
    width: 900px;
    height: 50px;
    padding: 20px;
    border: 1px solid #000000;
    border-radius: 50px;
    font-size: 18px;
    outline: none;
`;

export const searchButton = css`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #D98585;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;