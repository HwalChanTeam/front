import { css } from '@emotion/react';

export const containerStyle = css`
    padding: 20px;
    width: 800px;
    margin: auto;
`;

export const productStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.02);
    }
`;

export const imageStyle = css`
    width: 100px;
    height: 100px;
    /* object-fit: cover;  // 필요하면 추가*/ 
    border: 1px solid #dbdbdb;
    margin-right: 10px;
    border-radius: 4px;
    cursor: pointer;
`;

export const textStyle = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 10px;
    width: 500px;
`;

export const titleStyle = css`
    font-size: 18px;
    font-weight: bold;
`;

export const contentBox = css`
    flex-wrap: wrap;
    font-size: 16px;
    color: #333;
    width: 100%; // 부모 컨테이너에 맞게 크기 조정
    max-width: 500px; // 최대 너비 500px 설정
    white-space: normal; // 줄바꿈 허용
    overflow-wrap: break-word; // 긴 단어가 있는 경우 줄바꿈 허용
`;

export const createDateStyle = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    p { 
        margin: 0px;
    }

`;