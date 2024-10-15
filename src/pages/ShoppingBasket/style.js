import { css } from '@emotion/react';

export const cartContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const basketHeader = css`
  display: flex;
  justify-content: space-around;
  & > h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin-left: 15%;
  }
`;


export const cartListSection = css`
  margin-top: 30px;

  input[type="checkbox"] {
  margin-bottom: 145px;
  width: 25px; 
  height: 25px; 
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
  justify-content: space-between;
  border: 1px solid #ddd;
  width: 1000px;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const itemImage = css`
display: flex;
  img {
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

/* 상품명, 상품설명, 수량 버튼을 감싸는 컨테이너 */
export const nameDescriptionContainer = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
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
  margin-top: 10px;
  font-size: 18px;
`;

export const itemDescription = css`
  box-sizing: border-box;
  margin: 10px 0;
  color: #555;
  font-size: 14px;
  width: 500px;
  overflow: hidden; /* 추가 */
  text-overflow: ellipsis;
  white-space: normal;
`;

export const itemActions = css`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  padding-right: 10%;
  & button:nth-of-type(1) {
    margin-right: 10px;
  }
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

export const bottonBox = css`

`;
