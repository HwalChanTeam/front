import { css } from "@emotion/react";

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;

`;

export const userInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
    & > p {
        margin: 0;
    }
`;

export const menuBox = css`
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
