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
  padding-left: 20px;
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

    &:nth-of-type(1) {
      width: 80px;
    }

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
  margin-left: 20px;
  border: 1px solid #000000;
  width: 1600px;
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
    width: 200px;
  }

  &:nth-of-type(4) {
    width: 160px;
  }

  &:nth-of-type(5) {
    width: 250px;
  }

  &:nth-of-type(6) {
    width: 200px;
  }
  
  &:nth-of-type(7) {
    width: 80px;
  }

  &:nth-of-type(8) {
    width: 200px;
  }

  &:nth-of-type(9) {
    width: 160px;
  }

  &:nth-last-of-type(1) {
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
    padding-right: 5px;
    text-align: right;
  }

  &:nth-of-type(3) {
    width: 200px;
  }

  &:nth-of-type(4) {
    width: 160px;
  }

  &:nth-of-type(5) {
    width: 250px;
  }

  &:nth-of-type(6) {
    width: 200px;
    padding-right: 5px;
    text-align: right;
  }

  &:nth-of-type(7) {
    width: 80px;
    padding-right: 5px;
    text-align: right;
  }

  &:nth-of-type(8) {
    width: 200px;
    padding-right: 5px;
    text-align: right;
  }

  &:nth-of-type(9) {
    width: 160px;
  }

  &:nth-last-of-type(1) {
    padding: 0px;
    padding-right: 5px;
    text-align: right;
    border-right: none;
  }
`;

// pageNumber 
export const numberBox = css`
  width: 1200px;
`;

export const pageNumber = css`
    & > ul {
        display: flex;
        justify-content: center;
        margin-left: 20px;
        padding: 0px;
        width: 1200px;
        list-style-type: none;
        & > li {
            margin: 0px 5px;
            & a {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 0 3px;
                border: 1px solid #dbdbdb;
                border-radius: 50%;
                width: 30px;
            }
            
        }
        & li:nth-of-type(1) {
            border: none;
        }
    }
`;


