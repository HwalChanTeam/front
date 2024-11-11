import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useMutation } from 'react-query';
import { instance } from '../../../apis/util/instance';
/** @jsxImportSource @emotion/react */
import *as s from './style';

function UserEditModal({ isOpen, onClose, users, checkId, userQuery }) {

    const [userData, setUserData] = useState({
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        checkId: checkId[0]
    })

    const handleInputOnChange = (e) => {
        setUserData((user) => ({
            ...user,
            [e.target.name] : e.target.value
        }))
    }
    const editUserData = users.filter(user => checkId.includes(user.userId));

    //인풋창 불러오려고 쓰는 것
    useEffect(() => {
        if (editUserData.length > 0) {
            const user = editUserData[0];  // 첫 번째 직원 선택
            setUserData({
                username: user.username,
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                checkId: checkId[0]
            });
        }
    }, [checkId]);

    const userEditMutation = useMutation(
        async () => {
            console.log(checkId);
            return await instance.put(`/admin/user/${userData.checkId}`, userData)
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: () => {
                alert("유저 수정이 완료되었습니다.");
                userQuery.refetch();
                onClose(true);
            },
            onError: (error) => {
                console.error(error);
                alert("유저 수정 실패!!!");
            }
        }
    )

    const handleSubmit = () => {
        userEditMutation.mutate();
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
                    width: "400px",
                    maxWidth: "90%",
                    overflow: "auto",
                    inset: "auto",
                },
            }}
        >
            <div css={s.modalLayout}>
                <h2>유저 수정</h2>
                <div css={s.mainBox}>
                    <div css={s.registerBox}>
                        <div css={s.inputBox}>
                            <div>
                                <label>이름</label>
                                <input type="text" name="name" onChange={handleInputOnChange} defaultValue={editUserData[0]?.name}/>
                            </div>
                            <div>
                                <label>아이디</label>
                                <input type="text" name="username" onChange={handleInputOnChange} defaultValue={editUserData[0]?.username}/>
                            </div>
                            <div>
                                <label>이메일</label>
                                <input type="text" name="email" placeholder='이메일' onChange={handleInputOnChange} defaultValue={editUserData[0]?.email}/>
                            </div>
                            <div>
                                <label>전화번호</label>
                                <input type="text" name="phoneNumber" placeholder='연락처' onChange={handleInputOnChange} defaultValue={editUserData[0]?.phoneNumber}/>
                            </div>
                        </div>
                        <div css={s.buttonBox}>
                            <button onClick={handleSubmit}>수정</button>
                            <button onClick={onClose}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
};


export default UserEditModal;