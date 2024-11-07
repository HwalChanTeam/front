import { css } from '@emotion/react';
import React from 'react';
import ReactModal from 'react-modal';
import { useMutation } from 'react-query';
import { instance } from '../../apis/util/instance';
/** @jsxImportSource @emotion/react */

const inputBox = css`
    background-color: "white";
    padding: "20px";
    border-radius: "5px";
    width: "300px";

    & p {
        margin: 0px;
        font-size: 14px;
    }

    & button:nth-of-type(1) {
        margin: 0px 5px;
    }
`;

function DeliveryStartModal({ isOpen, onClose, orderQuery }) {

    // 배송 정보 등록 mutation
    const deliveryPostMutation = useMutation(
        async () => {
            return await instance.post("") // 요청url 추후에 수정 
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: () => {
                alert("배송등록 완료")
                orderQuery.refetch()
            }
        }
    )

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
            <div css={inputBox}>
                <h2>배송등록</h2>
                <input type="text" placeholder="운송장번호를 입력하세요" />
                <input type="text" placeholder="배송사를 입력하세요" />
                <input type="text" placeholder="배송일자" /> {/* 배송시작일자  */}
                <p>주문상태</p>
                <select> {/* 주문상태 바꾸는 select  */}
                    <option value="">배송준비중</option>
                    <option value="">배송중</option>
                    <option value="">배송완료</option>
                    <option value="">주문취소</option>
                    <option value="">환불</option>
                </select> 
                <button onClick={() => deliveryPostMutation.mutate}>배송등록</button>
                <button onClick={onClose}>닫기</button>
            </div>
        </ReactModal>
    );
}

export default DeliveryStartModal;