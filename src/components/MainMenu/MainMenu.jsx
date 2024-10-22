
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
import FrozenProductView from '../User/FrozenProductView/FrozenProductView';
import RefrigeratedView from '../User/RefrigeratedView/RefrigeratedView';

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
        name: "냉동",
        path: "/user/category/frozen"
    },
    {
        id: 2,
        name: "냉장",
        path: "/user/category/refrigerated"
    },

];

function MainMenu(props) {
    const location = useLocation();
    const pathname = location.pathname;

    const [productList, setProductList] = useState([]);

    const [mainSearch, setMainSearch] = useState("");

    const [ dropDownOpen, setDropDownOpen ] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
        if (mainSearch) {
            try {
            const response = await instance.get(
                `/admin/product/search?title=${mainSearch}`
            );
            setProductList(response.data);
            } catch (error) {
            console.error("상품을 가져오는 데 실패했습니다:", error);
            }
        } // else {
        //   //   검색어가 없을 때 전체 조회 로직
        //   const response = await instance.get(`/admin/product/search`);
        //   setProduct(response.data);
        // }
        };

        fetchProduct();
    }, [mainSearch]);

    
    const handleMainSearch = (name) => {
        setMainSearch(name);
    };

    const handleCategoryOnClick = () => {
        setDropDownOpen(prev => !prev);
    };

    const handleSubPageOnClick = (path) => {
        setDropDownOpen(false);
    }

    return (
        <div css={s.container}>
            <header css={s.headerLayout}>
                <div css={s.layout}>
                    <div css={s.buttonLayout}>
                        {
                            selectMainMenus.map((menu) => (
                                <div key={menu.id} >
                                    { menu.name === "카테고리" ? (
                                        <div css={s.categoryButton}>
                                            <button onClick={handleCategoryOnClick} >
                                                <span css={s.selectedMenu(pathname === "user/category")} >{menu.name}</span>
                                            </button>
                                            {dropDownOpen && (
                                                <ul css={s.categorySubLayout}>
                                                    {subCategories.map((sub) => (
                                                        <li key={sub.id}>
                                                            <Link to={sub.path}
                                                                onClick={() => handleSubPageOnClick(sub.path)} >
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={menu.path}
                                            css={s.selectedMenu(pathname === menu.path)}>
                                                <span>{menu.name}</span>
                                        </Link>

                                    )}
                                </div>
                            ))
                        }
                    </div>
                    <MainSearch onSearch={handleMainSearch} />
                </div>
            </header>
                        {
                            location.pathname.startsWith("/product") ? (
                                <></>
                            ) :
                            (
                                <body>
                                    <div css={s.menuLayout}>
                                        <div css={s.menuListBox}>
                                            <Routes>
                                                <Route path="/category" element={<CategoryView />}/>
                                                <Route path="/category/frozen" element={<FrozenProductView />}/>
                                                <Route path="/category/refrigerated" element={<RefrigeratedView />}/>
                                                <Route path="/newproduct" element={<NewProductView />}/>
                                                <Route path="/popularityproduct" element={<PopularityProduct />}/>
                                                <Route path="/review" element={<Review />}/>
                                            </Routes>
                                        </div>
                                    </div>
                                </body>
                            )
                        }
        </div>
    );
}

export default MainMenu;