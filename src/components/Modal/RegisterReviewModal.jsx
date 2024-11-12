import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
/** @jsxImportSource @emotion/react */
import * as s from "./RegisterReviewStyle";
import { useMutation } from "react-query";
import { instance } from "../../apis/util/instance";

function RegisterReviewModal({ isOpen, onClose, product }) {

    console.log(product)

    const [reviewData, setReviewData] = useState({
        productId: 0,
        rating: 0,
        title: "",
        content: ""
    })

    useEffect(() => {
        if (product) {
            setReviewData((review) => ({
                ...review,
                productId: product
            }));
        }
    }, [product]);

    const handleWriteReview = async () => {
        try {
            await instance.post("/user/review", reviewData);
            alert("리뷰가 등록되었습니다.");
            setReviewData({
                productId: 0,
                rating: 0,
                title: "",
                content: ""
            })
            onClose(true);
        } catch (e) {
            console.error(e);
        }
    }

    const handleReviewInput = (e) => {
        setReviewData((review) => ({
            ...review,
            [e.target.name]: e.target.value
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
                    width: "350px",
                    height: "450px",
                    maxWidth: "90%",
                    overflow: "auto",
                    inset: "auto",
                },
            }}
        >
            <div css={s.layout}>
                <h2>리뷰 작성</h2>
                <div css={s.container}>
                    <div>
                        <label for="rating">별점</label>
                        <input min={1} max={5} type="number" placeholder="1~5 사이 숫자 입력해 주세요" name="rating" value={reviewData.rating} onChange={handleReviewInput} />
                    </div>
                    <div>
                        <label for="title">제목</label>
                        <input type="text"
                            placeholder="리뷰 제목을 입력해 주세요."
                            onChange={handleReviewInput}
                            name="title" value={reviewData.title}
                        />
                    </div>
                    <div css={s.contentBox}>
                        <label for="content">내용</label>
                        <textarea type="text" placeholder="리뷰 내용을 입력해 주세요." onChange={handleReviewInput} name="content" value={reviewData.content} />
                    </div>
                    <div css={s.buttonBox}>
                        <button onClick={handleWriteReview}>완료</button>
                        <button onClick={onClose}>닫기</button>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
}

export default RegisterReviewModal;
