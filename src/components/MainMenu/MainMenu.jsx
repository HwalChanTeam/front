/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';

function MainMenu(props) {

    

    return (
        <div css={s.layout}>
            <div css={s.buttonLayout}>
                <button>카테고리</button>
                <button>신상품</button>
                <button>인기 상품</button>
                <button>상품 후기</button>
            </div>
            <div css={s.line}></div>
        </div>
    );
}

export default MainMenu;