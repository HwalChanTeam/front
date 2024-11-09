import { css } from "@emotion/react";

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;

`;

export const userInfoContainer = css`
  display: flex;
  margin-bottom: 20px;
  width: 1200px;
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    box-shadow: 0px 0px 2px #00000088;
    cursor: pointer;

    & > img {
        height: 100%;
    }
`;

export const userInfoBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 10px;
    & > p {
        margin: 0;
    }
`;

export const menuBox = css`
  display: flex;
  align-items: center;
  height: 60px;
  & a {
    color: inherit; /* 링크가 클릭되었을 때도 본래 색상 유지 */
    text-decoration: none; /* 방문 후에도 밑줄 등 스타일 유지 */
    color: #000000;
    margin-right: 20px;
    & svg {
      color: #964747;
    }
    &:nth-last-of-type(1) {
        margin-right: 0;
    }
  }
`;

export const selectedMenu = (isSelected) => css`
  border: ${isSelected ? "2px solid #964747" : "1px solid #dbdbdb"};
  padding: 10px; /* 여백을 추가해 클릭 영역을 늘림 */
`;

export const contentsBox = css`
    width: 100%;
    height: 100%;
`;
