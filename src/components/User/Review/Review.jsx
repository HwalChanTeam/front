/** @jsxImportSource @emotion/react */
import *as s from './style';

function Review(props) {
    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>PHOTO REVIEW</h2>
                    </div>

                    <tbody css={s.menuLayout}>
                        
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Review;