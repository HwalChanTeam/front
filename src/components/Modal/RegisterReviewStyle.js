import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const container = css`
    box-sizing: border-box;
    width: 100%;
    & input {
        box-sizing: border-box;
        padding: 5px 10px;
        width: 100%;
    }
    & > div {
        margin-bottom: 5px;
    }
    & > div:nth-last-of-type(2) {
        margin-bottom: 0px;
    }
`;

export const contentBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 200px;

    & > textarea {
        box-sizing: border-box;
        resize: none;
        outline: none;
        width: 100%;
        height: 80%;
        padding: 5px 10px;
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    height: 35px;
    width: 100%;
    & > button {
        box-sizing: border-box;
        width: 49%;
    }
`;
