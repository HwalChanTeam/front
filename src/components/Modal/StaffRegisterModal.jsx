import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useMutation } from 'react-query';
import { instance } from '../../apis/util/instance';
/** @jsxImportSource @emotion/react */
import * as s from './staffRegister';

function StaffRegisterModal({ isOpen, onClose, refetch }) {

    const [userData, setUserData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        checkPassword: "",
        phoneNumber: ""
    })

    const handleInputOnChange = (e) => {
        setUserData((user) => ({
            ...user,
            [e.target.name] : e.target.value
        }))
    }

        // 매니저 등록
        const registerMutation = useMutation(
            async () => {
                return await instance.post("/admin/signup", userData);
            },
            {
                retry: 0,
                refetchOnWindowFocus: false,
                onSuccess: () => {
                    alert("매니저 등록이 완료되었습니다.")
                    setUserData({
                        username: "",
                        name: "",
                        email: "",
                        password: "",
                        checkPassword: "",
                        phoneNumber: ""
                    })
                    refetch();
                },
                onError: (error) => {
                    console.error(error)
                    alert("매니저 등록 실패!!!!")
                }
            }
        )
    
        //매니저 추가 함수
        const handleRegisterUser = () => {
            registerMutation.mutate();
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
                    width: "450px",
                    maxWidth: "90%",
                    overflow: "auto",
                    inset: "auto",
                },
            }}
        >
                        <div css={s.modalLayout}>
                        <h1>직원 등록</h1>
                        <div css={s.mainBox}>
                            <div css={s.registerBox}>
                                <div css={s.inputBox}>
                                    <div>
                                    </div>
                                    <div>
                                        <label for="name">이름</label>
                                        <input type="text" name="name" placeholder='이름' onChange={handleInputOnChange} value={userData.name}/>
                                    </div>
                                    <div>
                                        <label for="username">아이디</label>
                                        <input type="text" name="username" placeholder='아이디' onChange={handleInputOnChange} value={userData.username}/>
                                    </div>
                                    <div>
                                        <label for="password">비밀번호</label>
                                        <input type="text" name="password" placeholder='비밀번호' onChange={handleInputOnChange} value={userData.password}/>
                                    </div>
                                    <div>
                                        <label for="checkPassword">비밀번호 확인</label>
                                        <input type="text" name="checkPassword" placeholder='비밀번호 확인' onChange={handleInputOnChange} value={userData.checkPassword}/>
                                    </div>
                                    <div>
                                        <label for="email">이메일</label>
                                        <input type="text" name="email" placeholder='이메일' onChange={handleInputOnChange} value={userData.email}/>
                                    </div>
                                    <div>
                                        <label for="phoneNumber">연락처</label>
                                        <input type="text" name="phoneNumber" placeholder='연락처' onChange={handleInputOnChange} value={userData.phoneNumber}/>
                                    </div>
                                    <div>
                                        <label for="role">권한</label>
                                        <input type="text" readOnly placeholder='ROLE_MANAGER' />
                                    </div>
                                </div>
                                <div css={s.buttonBox}>
                                <button onClick={handleRegisterUser}>등록</button>
                                <button onClick={onClose}>닫기</button>
                                </div>
                            </div>
                        </div>
                    </div>
        </ReactModal>
    );
};


export default StaffRegisterModal;