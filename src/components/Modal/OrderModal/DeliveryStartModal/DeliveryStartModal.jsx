import React from 'react';
import ReactModal from 'react-modal';
import { useMutation } from 'react-query';
/** @jsxImportSource @emotion/react */
import *as s from './style';
import { instance } from '../../../../apis/util/instance';

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
    );

    // 배송등록 버튼
    const handelDeliverySubmitOnClick = () => {
        deliveryPostMutation.mutate();
        onClose();
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
                },
                content: {
                    position: "static",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "5px",
                    width: "400px",
                    maxWidth: "90%",
                    overflow: "auto",
                    inset: "auto",
                },
            }}
        >
            <div css={s.modalLayout}>
                <h2>배송등록</h2>
                <div css={s.mainBox}>
                    <div css={s.registerBox}>
                        <div css={s.inputBox}>
                            <div>
                                <label >운송장번호</label>
                                <input type="text" placeholder="운송장번호를 입력하세요" />
                            </div>
                            <div>
                                <label >배송사</label>
                                <input type="text" placeholder="배송사를 입력하세요" />
                            </div>
                        </div>
                        <div css={s.buttonBox}>
                            <button onClick={handelDeliverySubmitOnClick}>배송등록</button>
                            <button onClick={onClose}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
}

export default DeliveryStartModal;