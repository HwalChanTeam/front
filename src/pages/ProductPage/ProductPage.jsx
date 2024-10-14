/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainMenu from '../../components/MainMenu/MainMenu';
import { FiShoppingCart } from "react-icons/fi";

function ProductPage(props) {
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
                    <div>
                        11,000
                    </div>
                    <div css={s.contentBox}>
                        <div>
                            <p>원산지: 대한민국</p>
                            <p>배송구분: 일반배송</p>
                            <p>배송비: 3000원</p>
                        </div>
                        <div>
                            <p>상품명: 부대찌개</p>
                            <p>
                                구매수량: 
                                    <span>
                                        <button>+</button>
                                                1
                                        <button>-</button>
                                    </span>
                            </p> 
                        </div>
                    </div>
                    <div>
                        <p>총 상품 금액: 14,000원
                            <span>
                                <button>구매하기</button>
                                <FiShoppingCart />
                            </span>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;