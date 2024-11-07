import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
/** @jsxImportSource @emotion/react */
import *as s from './style';
import Star from '../../User/Review/Star/Star';
import { FaRegEdit, FaTrash } from "react-icons/fa";

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
                console.log(response.data)
                setReviews(response.data)
            },
        }
    )

    const handleDelectOnClick = () => {
        alert("aaa")
    }

    const handleModifyOnClick = () => {
        alert("aaa")
    }

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                    <div css={s.subLayout}>
                        <h2>나의 리뷰</h2>
                    </div>
                    <ul >
                    { reviews.map((review) => (
                        <li key={review.id} css={s.productStyle}>
                            <div css={s.ReviewList}>
                                <div css={s.productImgLayout}>
                                    <img src={review?.product.thumbnailImg} />
                                </div>
                                <div css={s.productReviewLayout}>
                                    <div css={s.iconBox}>
                                        <Star rating={review.rating}/>
                                        <div>
                                            <FaTrash onClick={handleDelectOnClick}/>
                                            <FaRegEdit onClick={handleModifyOnClick}/>
                                        </div>
                                    </div>
                                    <h2>{review.title}</h2>
                                    <p>{review.content}</p>
                                    <div css={s.createData}>
                                        <p>{review.createdAt}2024-11-07 12:02:00</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
            </div>
        </div>
    );
}

export default ReviewInfo;