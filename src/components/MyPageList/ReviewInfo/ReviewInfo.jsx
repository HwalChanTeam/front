import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
/** @jsxImportSource @emotion/react */
import *as s from './style';

function ReviewInfo(props) {

    const [reviews, setReviews] = useState([]);

    const getReviewAll = useQuery(
        ["getReviewAll"],
        async () => {
            return await instance.get("/user/review");
        },
        {
            retry: 0,
            onSuccess: (response) => {
                console.log(response)
                console.log(response.data.map((r) => r.id))
                setReviews(response.data)
            },
        }
    )

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                    <div css={s.subLayout}>
                        <h2>나의 리뷰</h2>
                    </div>
                <table css={s.tableLayout}>
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

export default ReviewInfo;