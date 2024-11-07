import { css } from '@emotion/react';
import React, { useState } from 'react';
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

function DeliveryEditModal({ isOpen, onClose, orderQuery, checkId }) {

    // 수정할 값을 담기위한 상태  
    const [ orderData, setOrderData ] = useState({}); // 변수명 정해지면 객체안에 쓸 예정 (운송장번호, 배송사, 주문상태, 배송일자)

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
                    width: "300px",
                    maxWidth: "90%",
                    overflow: "auto",
                    inset: "auto",
                },
            }}
        >
            <div css={inputBox}>
                <h2>배송수정</h2>
                <input type="text" name="" placeholder="운송장번호를 입력하세요" onChange={handleOrderOnChange} value="" /> {/* name과 value도 변수명 정해지면 쓰기 */}
                <input type="text" name="" placeholder="배송사를 입력하세요" onChange={handleOrderOnChange} value="" />
                <p>주문상태</p>
                <select>
                    <option value="">배송준비중</option>
                    <option value="">배송중</option>
                    <option value="">배송완료</option>
                    <option value="">주문취소</option>
                    <option value="">환불</option>
                </select>
                <button onClick={handleModifyOnClick}>수정하기</button>
                <button onClick={onClose}>닫기</button>
            </div>
        </ReactModal>
    );
}

export default DeliveryEditModal;