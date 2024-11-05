import { css } from '@emotion/react';

export const wishListContainer = css`
    box-sizing: border-box;
    width: 1300px;
`;

export const wishListSection = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    input[type="checkbox"] {
    width: 25px; 
    height: 25px;
    margin-right: 8px;
}
`;

export const wishListHeader = css`
    display: flex;

    & h2 {
        margin: 0px;
        margin-bottom: 20px;
    }
`;

export const emptyCartMessage = css`
    text-align: center;
    color: #888;
    font-size: 18px;
`;

export const tableLayout = css`
    box-sizing: border-box;
    width: 1300px;
    height: 100%;
`;

export const menuLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & td {
        padding: 0px;
    }
`;

export const menuList = css`
    box-sizing: border-box;
    margin-left: 80px;
    margin-bottom: 15px;
    padding: 0px;
`;

export const imgLayout = css`
    box-sizing: border-box;
    width: 160px;
    height: 160px;
    background-color: #dbdbdb;
    cursor: pointer;

    & img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
`;

export const contentLayout = css`
    box-sizing: border-box;
    width: 160px;
    display: flex;

    & svg {
        margin: 5px 0px;
        color: #964747;
    }
`;

export const productLayout = css`
    box-sizing: border-box;
    width: 110px;

    & h2 {
        margin: 5px 0px;
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
        &:nth-last-of-type(1) {
            font-weight: 750;
            font-style: italic;
            font-size: 15px;
        }
    }
`;

export const icons = css`
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;

    & button {
      display: flex;
      justify-content: flex-start;
      padding: 0px;
      border: none;
      background-color: transparent;

      &:nth-last-of-type(1) {
        & svg {
            margin-left: 3px;
        }
      }

      & svg {
        margin: 0px;
        margin-bottom: 5px;
      }
    }
`;

export const itemName = css`
    margin: 0;
    width: 135px;
    font-size: 18px;
`;

export const itemDescription = css`
    box-sizing: border-box;
    margin: 0;
    color: #555;
    font-size: 14px;
    width: 880px;
    overflow: hidden; /* 추가 */
    text-overflow: ellipsis;
    white-space: normal;
`;

export const itemActions = css`
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
`;

export const confirmButton = css`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #D98585;
    color: white;
`;

export const containButton = css`
    margin-right: 10px;
    padding: 5px 10px;
    border: 1px solid #964747;
    cursor: pointer;
    background-color: #ffffff;
    color: #964747;
    font-weight: 600;
`;

export const deleteButton = css`
    padding: 5px 10px;
    border: 1px solid #964747;
    cursor: pointer;
    background-color: #ffffff;
    color: #964747;
    font-weight: 600;
`;

export const bottonBox = css`
    box-sizing: border-box;
    display: flex;
    width: 100px;
    height: 40px;

`;


export const orderButton = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0px;
    border: 1px solid #964747;
    color: #964747;
    font-weight: 600;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 18px;

    &:hover {
        background-color: #e6e4e4;
    }

    &:active {
        background-color: #cfcfcf;
    }
`;

