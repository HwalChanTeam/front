/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import CategoryView from '../User/CategoryView/CategoryView';
import NewProductView from '../User/NewProductView/NewProductView';
import PopularityProduct from '../User/PopularityProductView/PopularityProduct';
import Review from '../User/Review/Review';

function MainMenu(props) {
    const [ selectMainMenu, setSelectMainMenu  ] = useState("");

    const mainSelect = () => {
        if(selectMainMenu === "카테고리") {
            return <CategoryView />;
        } else if(selectMainMenu === "신상품") {
            return <NewProductView />;
        } else if(selectMainMenu === "인기 상품") {
            return <PopularityProduct />;
        } else if(selectMainMenu === "상품 후기") {
            return <Review />;
        } else {
            return <CategoryView />;
        }
    }

    return (
        <>
            <header>
                <div css={s.layout}>
                    <div css={s.buttonLayout}>
                        <button onClick={() => setSelectMainMenu("카테고리")}>카테고리</button>
                        <button onClick={() => setSelectMainMenu("신상품")}>신상품</button>
                        <button onClick={() => setSelectMainMenu("인기 상품")}>인기 상품</button>
                        <button onClick={() => setSelectMainMenu("상품 후기")}>상품 후기</button>
                    </div>
                    <div css={s.line}></div>
                </div>
            </header>
            <body>
                <div css={s.menuLayout}>
                    <div css={s.menuListBox}>
                        <div>
                            {mainSelect()}
                        </div>
                    </div>
                </div>
            </body>
            <footer>
                <div css={s.footLayout}>
                    
                </div>
            </footer>
        </>
    );
}

export default MainMenu;