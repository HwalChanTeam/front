import { css } from "@emotion/react";

export const layout = css`
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
  width: 1600px;
  height: 480px;
`;

export const theadLayout = css`
  box-sizing: border-box;
  border-collapse: collapse;
  border: 1px solid #000000;
  border-bottom: none;
  padding: 0px;
  width: 100%;
  height: 22px;
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
    width: 140px;
  }
  &:nth-of-type(3) {
    width: 150px;
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
  border: 1px solid #000000;
  padding: 0px;
  cursor: default;

  &:nth-of-type(1) {
    text-align: center;
    width: 40px;
    border-left: none;
  }
  &:nth-of-type(2) {
    padding-left: 5px;
    width: 140px;
  }
  &:nth-of-type(3) {
    padding-left: 5px;
    width: 150px;
  }
  &:nth-of-type(4) {
    padding-left: 5px;
    width: 300px;
  }
  &:nth-of-type(5) {
    padding-left: 5px;
    width: 160px;
  }
  &:nth-of-type(6) {
    padding-right: 5px;
    width: 160px;
    text-align: right;
  }
  &:nth-of-type(7) {
    padding-right: 5px;
    width: 100px;
    text-align: right;
  }

  :nth-of-type(8) {
    padding-right: 5px;
    width: 100px;
    text-align: right;
  }

  &:nth-of-type(9) {
    padding-right: 5px;
    text-align: right;
    border-right: none;
  }
`;

export const productEditInput = css`
  display: flex;
  align-items: center;
  height: 35px;
`;


export const modalLayout = css`
    width: 100%;
    height: 100%;

    & > h1 {
        display: flex;
        margin: 0px;
        padding: 18.5px 0px;
        justify-content: center;
        align-items: center;
        background-color: #3a3a3a;
        color: #ffffff;
    }
`;

export const mainBox = css`
    box-sizing: border-box;
    display: flex;
`;

export const registerBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    width: 600px;
    height: 600px;
    padding: 5px 0;
`;

export const inputBox = css`
    font-size: 18px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    & label {
        padding: 0px 7px;
    
    }

    & select {
        font-size: 16px;
        outline: none;
        border: 1px solid #dbdbdb;
        &:nth-of-type(2) {
        width: 60px;
        }
        
    }

    & input {
        font-size: 18px;
        padding: 0px 10px;
        width: 281px;
        height: 30px;
        border: 1px solid #000000;
        outline: none;
    }
    
    & div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        &:nth-last-of-type(1) {
            & button {
                display: flex;
                align-items: center;
                height: 30px;
                color: #ffffff;
                border: none;
                background-color: #3a3a3a;
                cursor: pointer;
                &:hover {
                    background-color: #686d76;
                }
                &:active {
                    background-color: #3d3b40;
                }
            }
        }

        &:nth-last-of-type(2) {
            & button {
                display: flex;
                align-items: center;
                height: 30px;
                color: #ffffff;
                border: none;
                background-color: #3a3a3a;
                cursor: pointer;
                &:hover {
                    background-color: #686d76;
                }
                &:active {
                    background-color: #3d3b40;
                }
            }
        }

    }

    & :nth-of-type(1) {
        display: flex;
        justify-content: left;
    }
    
    &:nth-last-of-type(1) {
        width: 50px;
        height: 50px;
    }
`;

export const selectBox = css`
    margin-left: 20px;
`;

// 상품 등록 버튼 
export const buttonBox = css`
    & button {
        box-sizing: border-box;
        padding: 0px 10px;
        height: 35px;
        background-color: #3a3a3a;
        border: 1px solid #000000;
        color: #f5f5f5;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;

        &:hover {
        background-color: #686d76;
        }
        &:active {
        background-color: #3d3b40;
        }
    }
`;

export const rightBox = css`
    box-sizing: border-box;
    margin-top: 50px;
    
    & p {
        margin: 0px;
        margin-bottom: 15px;
        font-size: 18px;
    }
`;

// thumbnailImg 등록 박스
export const thumbnailImgBox = css`
    height: 245px;
    border: none;

    & img {
        width: 230px;
        height: 230px;
    }
`;

// contentsImg 등록 박스

export const contentsImgLayout = css`
    box-sizing: border-box;
    border: none;
`;

export const contentsImgBox = css`
    display: flex;
    box-sizing: border-box;
    
    &:nth-last-of-type(1) {
        margin-right: 0px;
    }
    
    & img {
        margin-right: 10px;
        width: 180px;
        height: 180px;
    
    }
`;

// pageNumber
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
