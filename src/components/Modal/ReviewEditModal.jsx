import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useMutation } from 'react-query';
import { instance } from '../../apis/util/instance';

function Modal({ isOpen, onClose, reviews, reviewId, refetch }) {

const editReview = reviews.find((review) => review.reviewId === reviewId);

const [review, setReview] = useState({
    reviewId: editReview.reviewId || '',
    title: editReview.title || '',
    content: editReview.content || '',
    rating: editReview.rating || 0,
})

const modifyReviewMutation = useMutation(
    async () => {
        return await instance.put("/user/review/{review.reviewId}", review)
    },
    {
        retry: 0,
        onSuccess: () => {
            refetch();
        }
    }
)

const handleModifyOnClick = () => {
    modifyReviewMutation.mutate();
    onClose(true);
}

const inputOnChange = (e) => {
    setReview((review) => ({
        ...review,
        [e.target.name] : e.target.value
    }))
}


    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 100,
                },
                content: {
                    position: "static",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "5px",
                    width: "300px",
                    maxWidth: "90%",
                    overflow: "auto",
                    inset: "auto",
                },
            }}
        >
            <div
                css={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "5px",
                    width: "300px",
                }}
            >
                <h2>리뷰 수정</h2>
                <input type="number" name="rating" onChange={inputOnChange} defaultValue={review.rating} placeholder='1 - 5까지 정수를 넣어주세요'/>
                <input type="text" name="title" onChange={inputOnChange} defaultValue={review.title} placeholder='리뷰 제목을 입력해주세요'/>
                <textarea type="text" name="content" onChange={inputOnChange} defaultValue={review.content} placeholder='내용을 입력해주세요'/>
                <button onClick={handleModifyOnClick}>완료</button>
                <button onClick={onClose}>닫기</button>
            </div>
        </ReactModal>
    );
};


export default Modal;