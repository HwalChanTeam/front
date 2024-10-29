/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const mainBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    & > div {
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        height: 87.33px;
        width: 100%;
        background-color: #3a3a3a;
    }

    & h1 {
        display: flex;
        align-items: center;
        margin: 0px;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
`;

function DefaultComponent(props) {
    return (
        <div css={mainBox}>
            <div></div>
            <h1>좌측 메뉴 선택에서 메뉴를 선택해 주십시오</h1>
        </div>
    );
}

export default DefaultComponent;