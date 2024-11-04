import { css } from "@emotion/react";

export const mainBox = css`
  flex-direction: column;
  width: 100%;
  height: 100%;
  & > h1 {
    display: flex;
    margin: 0px;
    padding: 18.5px;
    justify-content: center;
    align-items: center;
    background-color: #3a3a3a;
    color: #ffffff;
  }
`;

export const buttonLayout = css`
  box-sizing: border-box;
  padding: 90px 0 50px 20px;
  width: 300px;
  height: 50px;

  & button {
    box-sizing: border-box;
    width: 50px;
    height: 30px;
    background-color: #3a3a3a;
    border: 1px solid #000000;
    color: #f5f5f5;
    font-size: 14px;
    font-weight: 600;

    &:hover {
      background-color: #686d76;
    }
    &:active {
      background-color: #3d3b40;
    }

    &:nth-last-of-type(1) {
      margin-left: 20px;
    }
  }
`;

export const container = css`
  box-sizing: border-box;
  margin: 0px 20px;
  border: 1px solid #000000;
  width: 1000px;
  height: 500px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const theadLayout = css`
  box-sizing: border-box;
  border-collapse: collapse;
  padding: 0px;
  width: 100%;
  height: 22px;
  position: sticky; /* 스티키 포지션 적용 */
  top: 0; /* 상단 고정 */
  background-color: #fff; /* 배경색 추가 */
  /* z-index: 1; 다른 요소 위에 있도록 설정 */

`;

export const theadItems = css`
  box-sizing: border-box;
  padding: 0px;
  border-right: 1px solid #000000;
  cursor: default;

  &:nth-of-type(1) { 
    text-align: center;
    width: 40px;
  }

  &:nth-of-type(2) {
    width: 40px;
  }

  &:nth-of-type(3) {
    width: 140px;
  }

  &:nth-of-type(4) {
    width: 120px;
  }

  &:nth-of-type(5) {
    width: 140px;
  }

  &:nth-of-type(6) {
    width: 220px;
  }
  
  &:nth-of-type(7) {
    width: 160px;
  }

  &:nth-of-type(8) {
    border-right: none;
  }
`;

export const tableLayout = css`
  width: 100%;
  border-collapse: collapse;
`;

export const productItem = css`
  box-sizing: border-box;
  border: 1px solid #000000;
  border-left: none;
  padding: 0px;
  padding-left: 5px;
  cursor: default;

  &:nth-of-type(1) {
    padding: 0px;
    text-align: center;
    width: 40px;
  }

  &:nth-of-type(2) {
    width: 40px;
  }

  &:nth-of-type(3) {
    width: 140px;
  }

  &:nth-of-type(4) {
    width: 120px;
  }

  &:nth-of-type(5) {
    width: 140px;
  }

  &:nth-of-type(6) {
    width: 220px;
  }

  &:nth-of-type(7) {
    width: 160px;
  }

  &:nth-of-type(8) {
    padding: 0px;
    padding-right: 5px;
    text-align: right;
    border-right: none;
  }
`;


