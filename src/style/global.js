import { css } from "@emotion/react";

export const UserReset = css`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap");

    * {
        font-family: "Noto Sans KR", sans-serif;
    }

    html,
    body,
    #root {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
        outline: none;
    }

    a:visited {
        color: inherit; /* 링크가 클릭되었을 때도 본래 색상 유지 */
        text-decoration: none; /* 방문 후에도 밑줄 등 스타일 유지 */
    }

    cursor: default;
`;

export const adminReset = css`
    html,
    body,
    #root {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
`;
