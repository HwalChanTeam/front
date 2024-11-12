import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { instance } from '../../apis/util/instance';
import { useMutation } from 'react-query';
import logo from "../../assets/images/logo.png";
/** @jsxImportSource @emotion/react */
import *as s from './style';

function FindIdPage(props) {
    const navigate = useNavigate();

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
            return await instance.get("/user/public/find", {params : {name: user.name, phoneNumber: user.phoneNumber}});
        },
        {
            onError: (response) => {
                alert(response.response.data); // 데이터 확인 필요
            },
            onSuccess: (response) => {
                console.log(response.data)
                const id= response.data
                alert("회원님의 아이디는 " + id + " 입니다.");
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