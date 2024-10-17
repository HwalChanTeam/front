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
    margin-left: 10%;
  }
`;


export const cartListSection = css`
  margin-top: 30px;

  input[type="checkbox"] {
  width: 25px; 
  height: 25px;
  margin-bottom: 50px;
  margin-right: 8px;
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
  width: 1300px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
`;

export const itemImage = css`
display: flex;
  img {
    width: 170px;
    height: 170px;
    border-radius: 5px;
    padding-bottom: 35px;
  }
`;

export const itemDetails = css`
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-left: 20px;

  & p {
    margin-bottom: 0;
  }
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
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #964747;
  color: #964747;
  font-size: 12px;
  font-weight: 600;
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
  justify-content: right;
  & button:nth-of-type(1) {
    margin-right: 10px;
  }
`;

export const confirmButton = css`
  padding: 5px 10px;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #964747;
  color: #964747;
`;

export const deleteButton = css`
  padding: 5px 10px;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #964747;
  color: #964747;
`;

export const orderButton = css`
  width: 100px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #964747;
  color: #964747;
  cursor: pointer;
  font-size: 16px;
`;

export const bottonBox = css`
  display: flex;
  justify-content: center;
`;
