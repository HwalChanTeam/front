import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLoginBoxLine, RiLogoutBoxRLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";


function MainHeader(props) {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다.

    const handleLogout = () => {
        localStorage.removeItem("accessToken"); // 로컬 스토리지에서 토큰 삭제
        navigate("/");
        window.location.reload(); // 페이지를 새로 고침하여 상태를 초기화
    };

    const handleMyPageOnClick = () => {
        if (!token) {
            if (window.confirm("로그인이 필요한 서비스 입니다.\n로그인 하시겠습니까?")) {
                navigate("/login")
            }
            return;
        }
        navigate("/mypage")
    }

    return (
        <div css={s.background}>
            <div css={s.headerLayout}>
                <Link to={"/"}>
                    <h1>
                        <img src={logo} />
                        Cuisson
                    </h1>
                </Link>
                {
                    !token ?
                        <div css={s.buttonLayout}>
                            <Link to={"/user/signin"}><RiLoginBoxLine /></Link>
                            <Link to={"/cart"}><SlBasket /></Link>
                            <Link to={"/mypage"}><LuUser /></Link>
                        </div>
                        :
                        <div css={s.buttonLayout}>
                            <a onClick={handleLogout}><RiLogoutBoxRLine /></a>
                            <Link to={"/cart"}><SlBasket /></Link>
                            <a onClick={handleMyPageOnClick}><LuUser /></a>
                        </div>
                }
            </div>
        </div>
    );
}

export default MainHeader;
