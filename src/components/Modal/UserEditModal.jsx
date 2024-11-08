import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useMutation } from 'react-query';
import { instance } from '../../apis/util/instance';

function UserEditModal({ isOpen, onClose, users, checkId }) {

    const [userData, setUserData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        phoneNumber: ""
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
                password: user.password
            });
        }
    }, [checkId]);

    const userEditMutation = useMutation(
        async () => {
            return await instance.put(`/admin/user/${checkId}`, userData)
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: () => {
                alert("매니저 수정이 완료되었습니다.");
                // 리패치 사용해주세용
            },
            onError: (error) => {
                console.error(error);
                alert("매니저 수정 실패!!!");
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
                    width: "300px",
                    maxWidth: "90%",
                    overflow: "auto",
                    inset: "auto",
                },
            }}
        >
            <div
                css={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "5px",
                    width: "300px",
                }}
            >
                <h2>매니저 수정</h2>
                <input type="text" name="username" onChange={handleInputOnChange} defaultValue={editUserData[0]?.username}/>
                <input type="text" name="name" onChange={handleInputOnChange} defaultValue={editUserData[0]?.name}/>
                <input type="text" name="password" onChange={handleInputOnChange} defaultValue={editUserData[0]?.password}/>
                <input type="text" name="email" placeholder='이메일' onChange={handleInputOnChange} defaultValue={editUserData[0]?.email}/>
                <input type="text" name="phoneNumber" placeholder='연락처' onChange={handleInputOnChange} defaultValue={editUserData[0]?.phoneNumber}/>
                <input type="text" readOnly placeholder='ROLE_MANAGER' />
                <div
                    css={{
                        marginTop: "10px",  // 버튼 간격을 추가
                        display: "flex",
                    }}
                >
                    <button onClick={handleSubmit}>수정</button>
                    <button onClick={onClose}>닫기</button>
                </div>
            </div>
        </ReactModal>
    );
};


export default UserEditModal;