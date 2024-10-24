/** @jsxImportSource @emotion/react */
import *as s from './style';

function Review(props) {
    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>전체 리뷰</h2>
                    </div>

                    <tbody css={s.ReviewLayout}>
                        <tr>
                            <div css={s.ReviewList}>
                                <div css={s.productImgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productReviewLayout}>
                                    <div css={s.userLayout}>
                                        <h2>user1234</h2>
                                    </div>
                                    <div css={s.reviewContent}>
                                        <p>ddd</p>
                                    </div>
                                    <div css={s.createData}>
                                        <p>2024-10-23 11:20</p>
                                    </div>
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