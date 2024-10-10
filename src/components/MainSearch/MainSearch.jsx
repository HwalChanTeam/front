import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import *as s from './style';

function MainSearch(props) {

    return (
        <div css={s.layout}>
            <div css={s.searchSection}>
                <input type="text" placeholder="검색어를 입력하세요" css={s.searchInput} />
                <button css={s.searchButton}>검색</button>
            </div>
        </div>
    );
}

export default MainSearch;