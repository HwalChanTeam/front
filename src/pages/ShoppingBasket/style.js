import { css } from '@emotion/react';

export const cartContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const cartListSection = css`
  margin-top: 30px;
  width: 1300px;

`;

export const basketHeader = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
  & > h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export const title = css`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const basketBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const productTable = css`
  border-collapse: collapse; /* 테이블 경계 중복 제거 */
  width: 1100px; /* 테이블 전체 너비를 100%로 설정 */
  margin-bottom: 20px; /* 줄 사이 간격을 위해 추가 */

  & button {
    font-weight: 500;
    color: #964747;
    background-color: transparent;
    border: 1px solid #964747;
    &:hover {
      background-color: #eaeaea
    }
    &:active {
      background-color: #dbdbdb
    }
    &:nth-of-type(1) {
      margin-right: 5px;
    }
    &:nth-last-of-type(1) {
      margin-left: 5px;
    }
  }

  th, td {
    text-align: center; /* 헤더와 내용 모두 가운데 정렬 */
    border-bottom: 1px solid #dcdcdc; /* 각 행 밑에 구분선 추가 */
    padding-top: 10px;
    padding-bottom: 10px;
    &:nth-last-of-type(1) {
    }
  }
  

& > tr {
  & td {
      border: 1px solid #000000; /* 각 셀에 테두리 추가 */
      padding: 16px; /* 셀 안쪽 여백을 늘려서 줄 간격 조정 */
    }

  & td:nth-of-type(1) {
    border: 1px solid #000000;
  }
  & td:nth-of-type(2) {
    width: 130px;
  }
  & td:nth-of-type(3) {
    width: 250px;
  }
  & td:nth-of-type(4) {
    width: 100px;
  }
  & td:nth-of-type(5) {
    width: 100px;
  }
  & td:nth-of-type(6) {
    width: 100px;
  }
  input[type="checkbox"] {
  /* width: 20px; 
  height: 20px; */
}
}
`;

export const thead = css`
  text-align: center; /* 카테고리명을 가운데 정렬 */
  background-color: #f2f2f2; /* 헤더 배경색 추가 (선택 사항) */
  width: 1100px; /* 헤더의 너비를 전체로 설정 */
  & th {
    padding: 10px 20px 10px 0;
  }
`;

export const img = css`

  & img {
    width: 100px;
    height: 100px;
  }
`;

export const productName = css`
  font-size: 18px;
  font-weight: 600;
`;

export const buttonBox = css`
display: flex;
justify-content: center;
& button {
  background-color: transparent;
  border: 1px solid #964747;
  font-size: 16px;
  font-weight: 500;
  color: #964747;
  width: 200px;
  height: 40px;
  margin-right: 40px;
  &:nth-last-of-type(1) {
    margin-right: 0;
  }
  &:hover {
      background-color: #eaeaea
    }
    &:active {
      background-color: #dbdbdb
    }
}

`;