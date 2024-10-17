import { css } from '@emotion/react';

export const wishListContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const wishListSection = css`
  margin-top: 30px;

  input[type="checkbox"] {
  width: 25px; 
  height: 25px;
  margin-right: 8px;
}
`;

export const wishListHeader = css`
  display: flex;
  justify-content: space-around;
  & > h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin-left: 10%;
  }
`;



export const title = css`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const emptyCartMessage = css`
  text-align: center;
  color: #888;
  font-size: 18px;
`;

export const cartItem = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    width: 1300px;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #f9f9f9;
`;

export const itemBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const itemImage = css`
display: flex;
  img {
    box-sizing: border-box;
    width: 170px;
    height: 170px;
    border-radius: 5px;
  }
`;

export const itemDetails = css`
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-left: 20px;
`;

/* 상품명, 상품설명 컨테이너 */
export const nameDescriptionContainer = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  height: 100px;
  border-radius: 5px;
  background-color: #fff;
`;

/* 수량 조절 버튼 */
export const quantityControl = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const quantityButton = css`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #D98585;
  color: white;
`;

export const quantityValue = css`
  font-size: 16px;
  font-weight: bold;
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

export const deleteButton = css`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #D98585;
  color: white;
`;

export const orderButton = css`
  display: block;
  width: 120px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #D98585;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;

export const bottonBox = css`
  display: flex;

`;
