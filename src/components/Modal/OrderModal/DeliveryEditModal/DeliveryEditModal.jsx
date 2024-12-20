import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useMutation } from 'react-query';
import { instance } from '../../../../apis/util/instance';
/** @jsxImportSource @emotion/react */
import *as s from './style';



function DeliveryEditModal({ isOpen, onClose, orderQuery, checkId }) {

    // 수정할 값을 담기위한 상태  
    const [ orderData, setOrderData ] = useState({}); // 변수명 정해지면 객체안에 쓸 예정

    // 수정창에 배송정보를 입력할 onChange
    const handleOrderOnChange = (e) => {
        setOrderData((order) => ({
            ...order,
            [e.target.name] : e.target.value
        }))
    };

    // 수정 mutation
    const orderModifyMutation = useMutation(
        async () => {
            return await instance.put("") // 요청url 추후에 수정예정
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: () => {
                alert("수정이 완료되었습니다")
                orderQuery.refetch();
            }
        }
    );

    // 수정 버튼
    const handleModifyOnClick = () => {
        orderModifyMutation.mutate();
        onClose();
    };

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
                    width: "350px",
                    maxWidth: "90%",
                    overflow: "auto",
                    inset: "auto",
                },
            }}
        >
            <div css={s.modalLayout}>
                <h2>상태수정</h2>
                <div css={s.mainBox}>
                    <div css={s.registerBox}>
                        <div css={s.inputBox}>
                            <div>
                                <label for="" >주문상태</label>
                                <select>
                                    <option value="">배송준비중</option>
                                    <option value="">배송중</option>
                                    <option value="">배송완료</option>
                                    <option value="">주문취소</option>
                                    <option value="">환불</option>
                                </select>
                            </div>
                            <div>
                                <label >결제상태</label>
                                <select>
                                    <option value="">결제중</option>
                                    <option value="">결제완료</option>
                                    <option value="">결제취소</option>
                                </select>
                            </div>
                        </div>
                        <div css={s.buttonBox}>
                            <button onClick={handleModifyOnClick}>수정</button>
                            <button onClick={onClose}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
}

export default DeliveryEditModal;