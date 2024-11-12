import React, { useState } from "react";
import ReactModal from "react-modal";
/** @jsxImportSource @emotion/react */
import * as s from "./RegisterReviewStyle";

function RegisterReviewModal({ isOpen, onClose, product }) {

    console.log(product)

    const [reviewData, setReviewData] = useState({
        rating: 0,
        title: "",
        content: ""
    })

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
          width: "700px",
          height: "700px",
          maxWidth: "90%",
          overflow: "auto",
          inset: "auto",
        },
      }}
    >
      <div css={s.container}>
        <h2>리뷰 작성</h2>
        <div css={s.mainBox}>
          <div>
            <label for="rating">별점</label>
            <input
              type="text"
            />
          </div>
          <div>
            <label for="title">제목</label>
            <input
              type="text"
              placeholder="리뷰 제목을 입력해 주세요."
            />
          </div>
          <div>
            <label for="content">내용</label>
            <textarea
              type="text"
              placeholder="리뷰 내용을 입력해 주세요."
            />
          </div>
        </div>
        <button>완료</button>
        <button onClick={onClose}>닫기</button>
      </div>
    </ReactModal>
  );
}

export default RegisterReviewModal;
