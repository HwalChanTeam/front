/** @jsxImportSource @emotion/react */
import *as s from './style';
import MainMenu from '../../components/MainMenu/MainMenu';
function MainPage() {

    return (
        <>
            <div css={s.layout}>
                <MainMenu />
            </div>
            <div css={s.titleLayout}>
                <p>쿡 배송</p>
                <p>빠르게 배송해드립니다!</p>
            </div>
            {/* 이달의 상품 */}
            <div css={s.newProudctLayout} > 
                <div css={s.newProductTitle}>
                    <p>NEW PRODUCT</p>
                    <p>이 달의 신상품</p>
                </div>
                <div>

                </div>
                <div css={s.newProductContentLayout}>
                    <div css={s.imgLayout}>
                        <img src="https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg" />
                        <div>
                            <p>부대찌개</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.imgLayout}>
                        <img src="" />
                        <div>
                            <p>fffff</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.imgLayout}>
                        <img src="" />
                        <div>
                            <p>gggg</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.imgLayout}>
                        <img src="" />
                        <div>
                            <p>gggg</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 베스트 상품top5 */}
            <div css={s.bestProductLayout} > 
                <div css={s.bestProductTitle}>
                    <p>BEST PRODUCT</p>
                    <p>베스트 상품 TOP5</p>
                </div>
                <div css={s.bestProductContentLayout}>
                    <div css={s.bestImgLayout}>
                        <img src="https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg" />
                        <div>
                            <p>부대찌개</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.bestImgLayout}>
                        <img src="" />
                        <div>
                            <p>fffff</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.bestImgLayout}>
                        <img src="" />
                        <div>
                            <p>gggg</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.bestImgLayout}>
                        <img src="" />
                        <div>
                            <p>gggg</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.bestImgLayout}>
                        <img src="" />
                        <div>
                            <p>gggg</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MD 추천상품(5개) */}
            <div css={s.MDProductLayout} > 
                <div css={s.MDProductTitle}>
                    <p>MD 추천상품</p>
                </div>
                <div css={s.MDProductContentLayout}>
                    <div css={s.MDProductImgLayout}>
                        <img src="https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg" />
                        <div>
                            <p>부대찌개</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.MDProductImgLayout}>
                        <img src="" />
                        <div>
                            <p>fffff</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.MDProductImgLayout}>
                        <img src="" />
                        <div>
                            <p>gggg</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.MDProductImgLayout}>
                        <img src="" />
                        <div>
                            <p>gggg</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                    <div css={s.MDProductImgLayout}>
                        <img src="" />
                        <div>
                            <p>gggg</p>
                            <p>11,000 원</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default MainPage;