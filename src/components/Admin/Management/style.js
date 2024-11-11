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

export const contentsBox = css`
  box-sizing: border-box;
  padding: 10px;
`;

export const topBox = css`
  display: flex;
  width: 750px;
  & h3 {
    margin: 10px 0px;
  }
`;

export const container = css`
  box-sizing: border-box;
  margin: 0px 20px;
  width: 1600px;
  height: 100%;
`;

export const theadLayout = css`
  box-sizing: border-box;
  border-collapse: collapse;
  border: 1px solid #000000;
  padding: 0px;
  width: 80%;
  height: 25px;
  &:nth-of-type(1) {
    border-bottom: none;
  }
`;

export const theadItems = css`
  box-sizing: border-box;
  padding: 0px;
  text-align: center;
  cursor: default;

  &:nth-of-type(1) {
    text-align: center;
    width: 50px;
  }
  &:nth-of-type(2) {
    width: 70px;
  }
  &:nth-of-type(3) {
    width: 70px;
  }
  &:nth-of-type(4) {
    width: 300px;
  }
  &:nth-of-type(5) {
    width: 160px;
  }
  &:nth-of-type(6) {
    width: 160px;
  }
  &:nth-of-type(7) {
    width: 100px;
  }
  &:nth-of-type(8) {
    width: 100px;
  }
  &:nth-of-type(9) {
    border-right: none;
  }
`;

export const tableLayout = css`
  width: 100%;
  border-collapse: collapse;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
`;

export const productItem = css`
  box-sizing: border-box;
  /* border: 1px solid #000000; */
  padding: 0px;
  cursor: default;

  &:nth-of-type(1) {
    text-align: center;
    width: 50px;
  }
  &:nth-of-type(2) {
    width: 70px;
  }
  &:nth-of-type(3) {
    width: 70px;
  }
  &:nth-of-type(4) {
    width: 300px;
  }
  &:nth-of-type(5) {
    width: 160px;
  }
  &:nth-of-type(6) {
    width: 160px;
  }
  &:nth-of-type(7) {
    width: 100px;
  }
  &:nth-of-type(8) {
    width: 100px;
  }
  &:nth-of-type(9) {
    border-right: none;
  }
`;

export const pageNumber = css`
    & > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        padding-left: 20px;
        width: 1600px;
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
                height: 30px;
            }
        }
        & li:nth-of-type(1) {
            border: none;
        }
    }
`;