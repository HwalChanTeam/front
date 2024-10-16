/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainMenu from '../../components/MainMenu/MainMenu';
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MainFooter from "../../components/MainFooter/MainFooter";

const selectProductMenus = [
    {
        id: 1,
        name: "상세정보",
        path: "/product/information"

    },
    {
        id: 2,
        name: "구매후기",
        path: "/product/review"

    },
    {
        id: 3,
        name: "상품문의",
        path: "/product/inquiry"

    },
    {
        id: 4,
        name: "배송",
        path: "/product/delivery"

    },
]

function ProductPage(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    // 구매수량 상태 
    const [ productItems, setProductItems ] = useState({ buyItem: 1 });

    // 구매수량 숫자 증가 감소
    const handlebuyNumberChange = (delta) => {
        setProductItems((prevItem) => ({
            ...prevItem,
            buyItem: Math.max(1, prevItem.buyItem + delta)
        }));
    }

    // 구매하기 버튼
    const handlebuyOnClick = () => {
        if(window.confirm("장바구니에 추가하시겠습니까?")) {
            navigate("/basket");
        } 
    };

    return (
        <div css={s.layout}>
            <MainMenu />
            <div css={s.productLayout}>
                <div css={s.imgLayout}>
                    <img src="https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg" />
                </div>
                <div css={s.productContent}>
                    <div css={s.titleLayout}>
                        <h2>부대찌개</h2>
                        <p>부대찌개 설명</p>
                    </div>
                    <div css={s.price}>
                        <p>11,000 원</p>
                    </div>
                    <div css={s.contentBox}>
                        <div css={s.contury}>
                            <p>원산지: 대한민국</p>
                            <p>배송구분: 일반배송</p>
                            <p>배송비: 3000원</p>
                        </div>
                        <div css={s.productNameBox}>
                            <p>상품명: 부대찌개</p>
                            <p>
                                구매수량: 
                                    <span>
                                        <button onClick={() => handlebuyNumberChange(-1)} >-</button>
                                                {productItems.buyItem}
                                        <button onClick={() => handlebuyNumberChange(1)}>+</button>
                                    </span>
                            </p> 
                        </div>
                    </div>
                    <div css={s.buyProduct}>
                        <p>
                            총 상품 금액: 14,000원
                            <span>
                                <button>구매하기</button>
                                <FiShoppingCart onClick={handlebuyOnClick} size="40"  style={{cursor:"pointer"}}/>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* 상품 상세설명란 */}
            <div css={s.menuLayout}>
                <div css={s.menuBox}>
                    {
                        selectProductMenus.map((menu) => (
                            <Link 
                                key={menu.id}
                                to={menu.path}
                                css={s.selectProductMenu(pathname === menu.path)}>
                                <span>{menu.name}</span>
                            </Link>
                        ))

                    }
                </div>
            </div>
            <MainFooter />
        </div>
    );
}

export default ProductPage;