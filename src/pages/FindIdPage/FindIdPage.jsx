import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { instance } from '../../apis/util/instance';
import { useMutation } from 'react-query';
import logo from "../../assets/images/logo.png";
/** @jsxImportSource @emotion/react */
import *as s from './style';

function FindIdPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [user, setUser] = useState({
        name: "",
        phoneNumber: ""
    });

    const userInputOnChange = (e) => {
        setUser((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }));
    };

    // 아이디 찾기 mutation
    const findIdUser = useMutation(
        async (user) => {
            return await instance.get(""); // 아이디 찾기 요청 url 추후의 수정 
        },
        {
            // 밑에 것도 추후에 수정예정 
            // 로그인 에러 - 에러메시지 불러옴
            onError: (response) => {
                alert(response.response.data); // 데이터 확인 필요
            },
            onSuccess: (response) => {
                localStorage.setItem(
                    "accessToken",
                    "Bearer " + response.data.accessToken
                ); // 로그인 성공하면 accessToken 집어넣음
                localStorage.setItem("role", response.data.role.name)

                instance.interceptors.request.use((config) => {
                    // 요청때 config 설정 사용해라
                    config.headers["Authorization"] = localStorage.getItem("accessToken"); // 처음에 로그인이 안되어있으면 null값 들어가 있음
                    return config;
                });
                navigate(from, {replace : true});
            },
        }
    );

    // 아이디 찾기 onClick
    const handleFindIdSubmitOnClick = () => {
        findIdUser.mutate(user);
    };

    return (
        <div css={s.mainLayout}>
        <h1 css={s.logo}>
            <img src={logo} />
        </h1>
        <div css={s.layout}>
            <div css={s.headerLayout}>
                <h2>아이디찾기</h2>
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
                    name="phoneNumber"
                    onChange={userInputOnChange}
                    value={user.phoneNumber}
                    placeholder="휴대폰 번호를 하이픈(-) 추가해서 입력해 주세요"
                />
            </div>
            <div css={s.joinOkButton}>
                <button onClick={handleFindIdSubmitOnClick}>아이디 찾기</button>
            </div>
            <div css={s.joinAndSearchUser}>
                <Link to="/user/signin" >로그인</Link>
                <Link to="/user/signin/findpassword" >비밀번호 찾기</Link>
                <Link to="/user/signup" >회원 가입</Link>
            </div>
        </div>
    </div>
    );
}

export default FindIdPage;