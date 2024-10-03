import { css } from '@emotion/react';

export const cartContainer = css`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const searchSection = css`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const searchInput = css`
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
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

export const cartListSection = css`
  margin-top: 30px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const itemImage = css`
  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
`;

export const itemDetails = css`
  flex-grow: 1;
  margin-left: 20px;
`;

/* 상품명, 상품설명, 수량 버튼을 감싸는 컨테이너 */
export const nameDescriptionContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #ccc;
  padding: 10px;
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
  font-size: 18px;
`;

export const itemDescription = css`
  margin: 10px 0;
  color: #555;
  font-size: 14px;
`;

export const itemActions = css`
  display: flex;
  gap: 10px;
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
  width: 150px;
  margin: 30px auto;
  padding: 15px;
  background-color: #D98585;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;
