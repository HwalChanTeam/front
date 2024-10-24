/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { instance } from "../../apis/util/instance";
import logo from "../../assets/images/logo.png";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { sendEmailApi } from "../../apis/emailApi";

function SignupPage(props) {

  return (
    <div css={s.mainLayout}>
      <h1 css={s.logo}>
        <img src={logo} />
      </h1>
      <div css={s.layout}>
        <div css={s.headerLayout}>
          <h2>회원가입</h2>
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
          <input
            type="text"
            name="checkPassword"
            placeholder="비밀번호를 한번 더 입력해 주세요"
          />
          <input
            type="text"
            name="name"
            placeholder="이름을 작성해 주세요"
          />
          <input
            type="text"
            name="phone"
            placeholder="휴대폰 번호를 입력해 주세요"
          />
        </div>
        <div css={s.inputEmail}>
          <input
            type="text"
            name="email"
            placeholder="이메일을 입력해 주세요"
          />
          <button>인증요청</button>

          {/* 인증번호 요청 누르면 인증번호 칸 활성화되게(추가) */}
          {0 === 0 ? (
            <></>
          ) : (
            <div css={s.emailCkeck}>
            <input
              type="text"
              neme="emailCheck"
              placeholder="인증번호를 입력해 주세요"
            />
            <button>확인</button>
            </div>
          )}
        </div>
      <div css={s.joinOkButton}>
        <button>회원가입 하기</button>
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
      </div>
    </div>
  );
}

export default SignupPage;
