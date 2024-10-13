/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import CategoryView from '../User/CategoryView/CategoryView';
import NewProductView from '../User/NewProductView/NewProductView';
import PopularityProduct from '../User/PopularityProductView/PopularityProduct';
import Review from '../User/Review/Review';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const selectMainMenus = [
    {
        id: 1,
        name: "카테고리",
        path: "/category"
    },
    {
        id: 2,
        name: "신상품",
        path: "/newproduct"
    },
    {
        id: 3,
        name: "인기 상품",
        path: "/popularityproduct"
    },
    {
        id: 4,
        name: "상품 후기",
        path: "/review"
    },
]

function MainMenu(props) {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>
            <header>
                <div css={s.layout}>
                    <div css={s.buttonLayout}>
                        {
                            selectMainMenus.map((menu) => (
                                <Link
                                    key={menu.id}
                                    to={menu.path}
                                    css={s.selectedMenu(pathname === menu.path)}>
                                        <span>{menu.name}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </header>
                        {
                            location.pathname.startsWith("/product") ? (
                                <></>
                            ) : (
                                <>
                                    <body>
                                        <div css={s.menuLayout}>
                                            <div css={s.menuListBox}>
                                                <Routes>
                                                    <Route path="/" element={<CategoryView />}/>
                                                    <Route path="/category" element={<CategoryView />}/>
                                                    <Route path="/newproduct" element={<NewProductView />}/>
                                                    <Route path="/popularityproduct" element={<PopularityProduct />}/>
                                                    <Route path="/review" element={<Review />}/>
                                                </Routes>
                                            </div>
                                        </div>
                                    </body>
                                    <footer>
                                        <div css={s.footLayout}>
                                            
                                        </div>
                                    </footer>
                                </>
                            )
                        }
        </>
    );
}

export default MainMenu;