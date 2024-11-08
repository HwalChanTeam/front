import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useMutation } from 'react-query';
import { instance } from '../../apis/util/instance';
/** @jsxImportSource @emotion/react */
import * as s from './staffEditStyle';

function StaffEditModal({ isOpen, onClose, staffQuery, checkId }) {

    const [userData, setUserData] = useState({
        username: "",
        name: "",
        email: "",
        // password: "",
        // checkPassword: "",
        phoneNumber: ""
    })

    const handleInputOnChange = (e) => {
        setUserData((user) => ({
            ...user,
            [e.target.name] : e.target.value
        }))
    }

    const staffData = staffQuery || [];
    // 필터링 로직 수정
    const filteredStaff = staffData.filter(staff => checkId.includes(staff.userId));

    // 매니저 수정
    const registerMutation = useMutation(
        async () => {
            return await instance.put(`/admin/signup/${checkId}`, userData);
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: () => {
                alert("매니저 수정이 완료되었습니다.")
                staffQuery.refetch();
            },
            onError: (error) => {
                console.error(error)
                alert("매니저 수정 실패!!!")
            }
        }
    )

    // 만약 filteredStaff가 있으면, userData 상태를 설정
    useEffect(() => {
        if (filteredStaff.length > 0) {
            const staff = filteredStaff[0];  // 첫 번째 직원 선택
            setUserData({
                username: staff.username,
                name: staff.name,
                email: staff.email,
                phoneNumber: staff.phoneNumber
            });
        }
    }, [checkId]);
    
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
                    width: "400px",
                    maxWidth: "90%",
                    overflow: "auto",
                    inset: "auto",
                },
            }}
        >
            <div css={s.modalLayout}>
                        <h1>직원 수정</h1>
                        <div css={s.mainBox}>
                            <div css={s.registerBox}>
                                <div css={s.inputBox}>
                                    <div>
                                    </div>
                                    <div>
                                        <label for="title">이름</label>
                                        <input type="text"
                                        readOnly
                                        name="name"
                                        placeholder='이름'
                                        onChange={handleInputOnChange}
                                        defaultValue={filteredStaff[0]?.name}
                                        />
                                    </div>
                                    <div>
                                        <label for="username">아이디</label>
                                        <input type="text"
                                        readOnly
                                        name="username"
                                        placeholder='아이디'
                                        onChange={handleInputOnChange}
                                        defaultValue={filteredStaff[0]?.username}
                                        />
                                    </div>
                                    <div>
                                        <label for="email">이메일</label>
                                        <input type="text"
                                        name="email"
                                        placeholder='이메일'
                                        onChange={handleInputOnChange}
                                        defaultValue={filteredStaff[0]?.email}
                                        />
                                    </div>
                                    <div>
                                        <label for="phoneNumber">연락처</label>
                                        <input type="text"
                                        name="phoneNumber"
                                        placeholder='연락처'
                                        onChange={handleInputOnChange}
                                        defaultValue={filteredStaff[0]?.phoneNumber}
                                        />
                                    </div>
                                    <div>
                                        <label for="role">권한</label>
                                        <input type="text" readOnly placeholder='ROLE_MANAGER' />
                                    </div>
                                </div>
                                <div css={s.buttonBox}>
                                <button onClick={handleRegisterUser}>수정</button>
                                <button onClick={onClose}>닫기</button>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* <input type="text" name="password" placeholder='비밀번호' onChange={handleInputOnChange} value={filteredStaff.map((staff) => staff.password)}/>
                <input type="text" name="checkPassword" placeholder='비밀번호 확인' onChange={handleInputOnChange} value={filteredStaff.map((staff) => staff.checkPassword)}/> */}
        </ReactModal>
    );
};


export default StaffEditModal;