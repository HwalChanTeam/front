import React from 'react';
import ReactModal from 'react-modal';

function Modal({ isOpen, onClose }) {

    return (
        <ReactModal
            isOpen={isOpen}
            css={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                <h2>매니저 등록</h2>
                <input type="text" />
                <button onClick={onClose}>닫기</button>
            </div>
        </ReactModal>
    );
};


export default Modal;