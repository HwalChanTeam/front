import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import *as s from './style';
import MainSearch from '../../components/MainSearch/MainSearch';
import MainMenu from '../../components/MainMenu/MainMenu';

function MainPage() {

    const [ selectMainMenu, setSelectMainMenu  ] = useState("");

    const handleSelectMenuOnClick = () => {

    }

    return (
        <div>
            <header>
                <MainSearch />
                <MainMenu />
            </header>
            <body>
                <div css={s.layout}>
                    <div css={s.menuListBox}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </body>
            <footer>
                <div css={s.footLayout}>
                    
                </div>
            </footer>
        </div>
    );
}

export default MainPage;