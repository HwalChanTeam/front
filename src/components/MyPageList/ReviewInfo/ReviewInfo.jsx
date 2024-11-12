import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
/** @jsxImportSource @emotion/react */
import *as s from './style';
import Star from '../../User/Review/Star/Star';
import { FaRegEdit, FaTrash } from "react-icons/fa";
import ReviewEditModal from '../../Modal/ReviewEditModal';
import { useNavigate } from 'react-router';

function ReviewInfo(props) {

    // 모달 띄우는 상태 추가
    const [openEditModal, setOpenEditModal] = useState(false);

    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    const closeModal = () => {
        setOpenEditModal(false);
    };

    // 리뷰 가져오는 쿼리
    const getReviewAll = useQuery(
        ["getReviewAll"],
        async () => {
            return await instance.get("/user/review");
        },
        {
            retry: 0,
            onSuccess: (response) => {
                setReviews(response.data)
            },
        }
    )

    // 리뷰 삭제 뮤테이션
    const deleteReviewMutation = useMutation(
        async (id) => {
            const checkedIds = [id]
            return await instance.delete("user/review", {data : {checkedIds: checkedIds}})
        },
        {
            retry: 0,
            onSuccess: () => {
                alert("삭제가 완료되었습니다.")
            }
        }
    )

    const handleDelectOnClick = (id) => {
        if(window.confirm("리뷰가 삭제됩니다.")) {
            deleteReviewMutation.mutate(id);
        }
    }

    const handleProductImgOnClick = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                    <div css={s.subLayout}>
                        <h2>나의 리뷰</h2>
                    </div>
                    <ul >
                    { reviews.map((review) => (
                        <li key={review.reviewId} css={s.productStyle}>
                            <div css={s.ReviewList}>
                                <div css={s.productImgLayout}>
                                    <img src={review?.product?.thumbnailImg} onClick={() => handleProductImgOnClick(review.productId)}/>
                                </div>
                                <div css={s.productReviewLayout}>
                                    <div css={s.iconBox}>
                                        <Star rating={review?.rating}/>
                                        <div>
                                            <FaTrash onClick={() => handleDelectOnClick(review.reviewId)}/>
                                            <FaRegEdit onClick={() => setOpenEditModal(true)}/>
                                                <ReviewEditModal isOpen={openEditModal} onClose={closeModal} reviews={reviews} reviewId={review.reviewId} refetch={getReviewAll.refetch}/>
                                        </div>
                                    </div>
                                    <h2>{review?.title}</h2>
                                    <p>{review?.content}</p>
                                    <div css={s.createData}>
                                        <p>{review?.createdAt}</p>
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