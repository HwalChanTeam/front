import { css } from '@emotion/react';

export const containerStyle = css`
    padding: 20px;
    max-width: 800px;
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
`;

export const buttonStyle = css`
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    font-size: 18px;
    color: #555;
    &:hover {
        color: #000;
    }
    & svg {
        color: #964747;
    }
`;

export const textStyle = css`
    flex: 1;
    margin-left: 10px;
`;

export const titleStyle = css`
    font-size: 18px;
    font-weight: bold;
`;

export const descriptionStyle = css`
    font-size: 16px;
    color: #666;
`;

export const priceStyle = css`
    font-size: 16px;
    color: #333;
`;