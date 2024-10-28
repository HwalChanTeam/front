/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { useMutation, useQuery } from "react-query";
import { instance } from "../../apis/util/instance";

function SigninPage(props) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const userInputOnChange = (e) => {
        setUser((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }));
    };

    // 로그인 mutation
    const signinUser = useMutation(
        async (user) => {
            return await instance.post("user/public/signin", user);
        },
        {
            // 로그인 에러 - 에러메시지 불러옴
            onError: (response) => {
                console.log(response.response.data);
                alert(response.response.data); // 데이터 확인 필요
            },
            onSuccess: (response) => {
                console.log(response.data)
                localStorage.setItem(
                    "accessToken",
                    "Bearer " + response.data.accessToken
                ); // 로그인 성공하면 accessToken 집어넣음

                instance.interceptors.request.use((config) => {
                    // 요청때 config 설정 사용해라
                    config.headers["Authorization"] = localStorage.getItem("accessToken"); // 처음에 로그인이 안되어있으면 null값 들어가 있음
                    return config;
                });
                navigate("/");
            },
        }
    );

    const handleLoginSubmitOnClick = () => {
        signinUser.mutate(user);
    };

    return (
        <div css={s.mainLayout}>
            <h1 css={s.logo}>
                <img src={logo} />
            </h1>
            <div css={s.layout}>
                <div css={s.headerLayout}>
                    <h2>로그인</h2>
                </div>
                <div css={s.inputUser}>
                    <input
                        type="text"
                        name="username"
                        onChange={userInputOnChange}
                        value={user.username}
                        placeholder="아이디를 입력해 주세요"
                    />
                    <input
                        type="text"
                        name="password"
                        onChange={userInputOnChange}
                        value={user.password}
                        placeholder="비밀번호를 입력해 주세요"
                    />
                </div>
                <div css={s.joinOkButton}>
                    <button onClick={handleLoginSubmitOnClick}>로그인 하기</button>
                </div>
                <div css={s.oauth2Buttons}>
                    <button>
                        <SiNaver />
                        네이버 로그인
                    </button>
                    <button>
                        <FcGoogle />
                        구글 로그인
                    </button>
                </div>
                <div css={s.joinAndSearchUser}>
                    <Link to="/user/signup">회원 가입</Link>
                    <Link>아이디 비밀번호 찾기</Link>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
