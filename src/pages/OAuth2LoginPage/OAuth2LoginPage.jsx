import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { instance } from '../../apis/util/instance';

function OAuth2LoginPage(props) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const roleParam = searchParams.get("role");

    useEffect(() => {
        const accessToken = searchParams.get("accessToken");
        if (!accessToken) {
            alert("잘못된 접근입니다.");
            navigate("/user/login");
            return;
        }

        let role = null;
        try {
            role = !!roleParam ? JSON.parse(roleParam) : null;
        } catch (e) {
            console.error(e);
        }

        if (accessToken) {
            localStorage.setItem("accessToken", "Bearer " + accessToken);
            localStorage.setItem("role", "ROLE_USER"); // role을 JSON으로 저장
        }
        instance.interceptors.request.use(config => {
            config.headers["Authorization"] = localStorage.getItem("accessToken");
            config.headers["role"] = localStorage.getItem("role");
            return config;
        });
        navigate("/");
    }, []);

    return (
        <></>
    );
}

export default OAuth2LoginPage;