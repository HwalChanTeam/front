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
                <div css={s.newProductImgLayout}>
                    <div>
                        <img src="" />
                    </div>
                    <div>
                        <img src="" />
                    </div>
                    <div>
                        <img src="" />
                    </div>
                </div>
            </div>
            {/* 베스트 상품top4 */}

            {/* MD 추천상품(4개) */}

        
        </>
    );
}

export default MainPage;