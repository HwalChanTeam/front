
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
import Anju from '../Category/Anju/Anju';
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
    const location = useLocation();
    const pathname = location.pathname;

    const [productList, setProductList] = useState([]);

    const [mainSearch, setMainSearch] = useState("");

    const [ dropDownOpen, setDropDownOpen ] = useState(false);

    const [ activeMealkitSubCategory, setActiveMealkitSubCategory ] = useState(null);

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

    // 해당 목록 클릭 시 drop close
    const handleSubCloseOnClick = () => {
        setDropDownOpen(false);
    };

    // 마우스 갖다 될시 sub 목록이 뜨는
    const handleSubMouseEnter = (subCategory) => {
        setActiveMealkitSubCategory(subCategory);
    };

    // 마우스 안 갖다 될시 안뜨는
    const handleCategoryMouseLeave = () => {
        setDropDownOpen(false);
    };


    return (
        <div css={s.container}>
            <header css={s.headerLayout}>
                <div css={s.layout}>
                    <div css={s.buttonLayout}>
                        {
                            selectMainMenus.map((menu) => (
                                <div key={menu.id} >
                                    { menu.name === "카테고리" ? (
                                        <div css={s.categoryButton} >
                                            <button onClick={handleCategoryOnClick} >
                                                <span >{menu.name}</span>
                                            </button>
                                            {  dropDownOpen && (
                                                <ul css={s.categorySubLayout}
                                                    onMouseLeave={handleCategoryMouseLeave}>
                                                    {subCategories.map((sub) => (
                                                        <li key={sub.id} 
                                                            onMouseEnter={() => handleSubMouseEnter(sub.path)}>
                                                            <Link to={sub.path} onClick={handleSubCloseOnClick}>
                                                                {sub.name}
                                                            </Link>
                                                            {
                                                                sub.name === "밀키트" && activeMealkitSubCategory === sub.path && (
                                                                    <ul css={s.categoryMealkitSubLayout} 
                                                                        onMouseLeave={handleCategoryMouseLeave}>
                                                                        {mealkitSubCategories.map((mealkitSub) => (
                                                                            <li key={mealkitSub.id}>
                                                                                <Link to={mealkitSub.path} onClick={handleSubCloseOnClick}>
                                                                                    {mealkitSub.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )
                                                            }
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
                                                <Route path="/category/*" element={<></>}/>
                                                <Route path="/soup" element={<Soup />}/>
                                                <Route path="/anju" element={<Anju />}/>
                                                <Route path="/mealkit/*" element={<Mealkit />}/>
                                                <Route path="/frozen" element={<FrozenProductView />}/>
                                                <Route path="/refrigerated" element={<RefrigeratedView />}/>
                                                <Route path="/simplycook" element={<SimplyCook />}/>
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