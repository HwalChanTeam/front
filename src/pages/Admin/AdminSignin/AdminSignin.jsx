/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { instance } from "../../../apis/util/instance";
import { adminSigninApi } from "../../../apis/adminSigninApi";

function AdminSignin(props) {
    const [admin, setAdmin] = useState({
        username: "",
        password: "",
    });

    const handleInputOnChange = (e) => {
        setAdmin((admin) => ({
            ...admin,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubminOnClick = async () => {
        const signinData = await adminSigninApi(admin);
        if (!signinData.isSuccess) {
            // 로그인 실패하면?
            if (signinData.errorStatus === "loginError") {
                let EmptyFieldErrors = {
                    // 에러메시지 초기값
                    username: <></>,
                    password: <></>,
                };
                alert(signinData.error);
            }
            return;
        }
        localStorage.setItem("accessToken", "Bearer " + signinData.token.accessToken);

        // role 값을 localStorage에 저장
        localStorage.setItem("role", signinData.role);

        instance.interceptors.request.use(config => {
            config.headers["Authorization"] = localStorage.getItem("accessToken");
            return config;
        });
        window.confirm(signinData.successMessage);
        window.location.replace("/admin/main");

    };

    return (
        <div css={s.container}>
            <div css={s.signin}>
                <div css={s.signinHeader}>
                    <h1>관리자 페이지</h1>
                </div>
                <input
                    type="text"
                    value={admin.username}
                    onChange={handleInputOnChange}
                    name="username"
                    placeholder="아이디"
                />
                <input
                    type="password"
                    value={admin.password}
                    onChange={handleInputOnChange}
                    name="password"
                    placeholder="비밀번호"
                />
                <button onClick={handleSubminOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default AdminSignin;
