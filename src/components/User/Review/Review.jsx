/** @jsxImportSource @emotion/react */
import *as s from './style';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
import { useState } from 'react';

function Review(props) {

    const [reviews, setReviews] = useState([]);


    const getReviewAll = useQuery(
        ["getReviewAll"],
        async () => {
            console.log("요청날아감")
            return await instance.get("/user/review");
        },
        {
            retry: 0,
            onSuccess: (response) => {
                console.log(response)
                setReviews(response.data)
            },
        }
    )

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>전체 리뷰</h2>
                    </div>
                    {reviews.map((review) => {
                    <tbody css={s.ReviewLayout}
                        key={review.id}
                    >
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
                    })
                    }
                </table>
            </div>
        </div>
    );
}

export default Review;