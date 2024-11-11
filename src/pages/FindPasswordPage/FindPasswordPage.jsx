import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import { instance } from '../../apis/util/instance';
import logo from "../../assets/images/logo.png";
/** @jsxImportSource @emotion/react */
import *as s from './style';
import { Link } from 'react-router-dom';

function FindPasswordPage(props) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        name:"",
        phoneNumber: "",
    });

    const userInputOnChange = (e) => {
        setUser((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }));
    };

    // 비밀번호 찾기 mutation
    const passwordUser = useMutation(
        async (user) => {
            return await instance.put("/user/public/regen", user); // 비밀번호찾기 요청 url 추후의 수정 예정 / get 요청? -> 오밀당처럼 임시비밀번호를 줄지 ?  
        },
        {
            // 로그인 에러 - 에러메시지 불러옴
            onError: (response) => {
                alert(response.response.data); // 데이터 확인 필요
            },
            onSuccess: () => {
                alert("비밀번호가 초기화 되었습니다.\n 고객님의 임시비밀번호는 1Q2w3e4r!! 입니다.\n 로그인 후 마이페이지에서 변경 바랍니다.");
            }
        }
    );

    // 비밀번호찾기 버튼 
    const handleFindPasswordSubmitOnClick = () => {
        passwordUser.mutate(user);
    };

    return (
        <div css={s.mainLayout}>
        <h1 css={s.logo}>
            <img src={logo} />
        </h1>
        <div css={s.layout}>
            <div css={s.headerLayout}>
                <h2>비밀번호 찾기</h2>
            </div>
            <div css={s.inputUser}>
                <input
                    type="text"
                    name="name"
                    onChange={userInputOnChange}
                    value={user.name}
                    placeholder="이름을 입력해 주세요"
                />
                <input
                    type="text"
                    name="username"
                    onChange={userInputOnChange}
                    value={user.username}
                    placeholder="아이디를 입력해 주세요"
                />
                <input
                    type="text"
                    name="phoneNumber"
                    onChange={userInputOnChange}
                    value={user.phoneNumber}
                    placeholder="휴대폰 번호를 ( - ) 추가해서 입력해 주세요"
                />
            </div>
            <div css={s.joinOkButton}>
                <button onClick={handleFindPasswordSubmitOnClick}>비밀번호 찾기</button>
            </div>
            <div css={s.joinAndSearchUser}>
                <Link to="/user/signin" >로그인</Link>
                <Link to="/user/signin/findid" >아이디 찾기</Link>
                <Link to="/user/signup" >회원 가입</Link>
            </div>
        </div>
    </div>
    );
}

export default FindPasswordPage;