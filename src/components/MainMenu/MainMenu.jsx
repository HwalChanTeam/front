
/** @jsxImportSource @emotion/react */
import *as s from './style';
import { useEffect, useState } from 'react';
import CategoryView from '../User/CategoryView/CategoryView';
import NewProductView from '../User/NewProductView/NewProductView';
import PopularityProduct from '../User/PopularityProductView/PopularityProduct';
import Review from '../User/Review/Review';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import MainFooter from '../MainFooter/MainFooter';
import MainSearch from '../MainSearch/MainSearch';
import { instance } from '../../apis/util/instance';
import FrozenProductView from '../Category/FrozenProductView/FrozenProductView';
import RefrigeratedView from '../Category/RefrigeratedView/RefrigeratedView';
import Soup from '../Category/Soup/Soup';
import Anju from '../Category/Snacks/Snacks';
import Mealkit from '../Category/Mealkit/Mealkit';
import SimplyCook from '../Category/SimplyCook/SimplyCook';

const selectMainMenus = [
    {
        id: 1,
        name: "카테고리",
        path: "/user/category"
    },
    {
        id: 2,
        name: "신상품",
        path: "/user/newproduct"
    },
    {
        id: 3,
        name: "인기 상품",
        path: "/user/popularityproduct"
    },
    {
        id: 4,
        name: "상품 후기",
        path: "/user/review"
    },
];

const subCategories = [
    {
        id: 1,
        name: "국.탕.찌개",
        path: "/user/category/soup"
    },
    {
        id: 2,
        name: "안주",
        path: "/user/category/anju"
    },
    {
        id: 3,
        name: "밀키트",
        path: "/user/category/mealkit"
    },
    {
        id: 4,
        name: "간편식",
        path: "/user/category/simplycook"
    },
];

const mealkitSubCategories = [
    {
        id: 1,
        name: "냉동",
        path: "/user/category/mealkit/frozen"
    },
    {
        id: 2,
        name: "냉장",
        path: "/user/category/mealkit/refrigerated"
    },
];

function MainMenu(props) {

    return (
        <div css={s.container}>
            <header css={s.headerLayout}>
                <div css={s.layout}>
                    <div css={s.buttonLayout}>
                        <div >
                            <div css={s.categoryButton} >
                                <button >
                                </button>
                                <ul css={s.categorySubLayout}>
                                    <li >
                                        <Link  >
                                        </Link>
                                        <ul css={s.categoryMealkitSubLayout}>
                                            <li >
                                                <Link>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                css={s.selectedMenu}>
                                <span></span>
                            </Link>

                        </div>
                    </div>
                    <MainSearch />
                </div>
            </header>
            <></>
            <body>
                <div css={s.menuLayout}>
                    <div css={s.menuListBox}>
                        <Routes>
                            <Route path="/category/*" element={<></>} />
                            <Route path="/soup" element={<Soup />} />
                            <Route path="/anju" element={<Anju />} />
                            <Route path="/mealkit/*" element={<Mealkit />} />
                            <Route path="/frozen" element={<FrozenProductView />} />
                            <Route path="/refrigerated" element={<RefrigeratedView />} />
                            <Route path="/simplycook" element={<SimplyCook />} />
                            <Route path="/newproduct" element={<NewProductView />} />
                            <Route path="/popularityproduct" element={<PopularityProduct />} />
                            <Route path="/review" element={<Review />} />
                        </Routes>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default MainMenu;