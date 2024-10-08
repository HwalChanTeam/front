import { css } from "@emotion/react";

export const reset = css`
    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
    }

    a:visited {
    color: inherit; /* 링크가 클릭되었을 때도 본래 색상 유지 */
    text-decoration: none; /* 방문 후에도 밑줄 등 스타일 유지 */
    }

    cursor: default;
`;
