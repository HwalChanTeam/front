import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import MainSearch from "../MainSearch/MainSearch";
import { instance } from "../../apis/util/instance";
import logo from "../../assets/images/logo.png";
import { RiLoginBoxLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { MdOutlineLocalShipping } from "react-icons/md";


function MainHeader(props) {
  const navigate = useNavigate();
  
  

  return (
    <div css={s.background}>
      <div css={s.headerLayout}>
        <Link to={"/"}>
          <h1>
            <img src={logo} />
            Cuisson
          </h1>
        </Link>
        {/* 로그인이 되어 있지 않으면 아래꺼 랜더링 */}
        <div css={s.buttonLayout}>
          <Link to={"/user/signin"}><RiLoginBoxLine /></Link>
          <Link to={"/basket"}><SlBasket /></Link>
          <Link to={"/mypage"}><LuUser /></Link>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
