/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

function SigninPage(props) {

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
            placeholder="아이디를 입력해 주세요"
          />
          <input
            type="text"
            name="password"
            placeholder="비밀번호를 입력해 주세요"
          />
        </div>
        <div css={s.joinOkButton}>
          <button>로그인 하기</button>
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
