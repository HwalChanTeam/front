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
  const navigate = useNavigate();

  const [certification, setCertification] = useState(0);

  const [user, setUser] = useState({
    username: "",
    password: "",
    checkPassword: "",
    name: "",
    email: "",
    phone: "",
  });

  const [sendEmail, setSendEmail] = useState({
    toEmail: "",
    subject: "",
    content: "",
    checkEmail: "",
  });

  const handleInputOnchange = (e) => {
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEmailInputOnchange = (e) => {
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
    setSendEmail((email) => ({
      ...email,
      toEmail: user.email,
    }));
  };

  const emailSendButtonOnClick = async () => {
    console.log(sendEmail);
    const emailData = await sendEmailApi(sendEmail);
    if (certification == 1) {
      alert("이미 인증 요청이 되었습니다.");
      return;
    }
    setCertification(1);
  };

  const emailCheckOnChange = (e) => {
    setUser((user) => ({
      ...user,

    }))
  }

  const emailCkeckButtonOnClick = async () => {
    console.log(sendEmail);
    const emailData = await sendEmailApi(sendEmail);
    if (certification == 1) {
      alert("이미 인증 요청이 되었습니다.");
      return;
    }
    setCertification(1);
  };

  const handleSubmitButtonOnClick = () => {
    // 백엔드로 요청 들어가야함(post요청)
  };

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
            onChange={handleInputOnchange}
            name="username"
            value={user.username}
            placeholder="아이디를 입력해 주세요"
          />
          <input
            type="text"
            onChange={handleInputOnchange}
            name="password"
            value={user.password}
            placeholder="비밀번호를 입력해 주세요"
          />
          <input
            type="text"
            onChange={handleInputOnchange}
            name="checkPassword"
            value={user.checkPassword}
            placeholder="비밀번호를 한번 더 입력해 주세요"
          />
          <input
            type="text"
            onChange={handleInputOnchange}
            name="name"
            value={user.name}
            placeholder="이름을 작성해 주세요"
          />
          <input
            type="text"
            onChange={handleInputOnchange}
            name="phone"
            value={user.phone}
            placeholder="휴대폰 번호를 입력해 주세요"
          />
        </div>
        <div css={s.inputEmail}>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="이메일을 입력해 주세요"
            onChange={handleEmailInputOnchange}
          />
          <button onClick={emailSendButtonOnClick}>인증요청</button>

          {/* 인증번호 요청 누르면 인증번호 칸 활성화되게(추가) */}
          {certification === 0 ? (
            <></>
          ) : (
            <div css={s.emailCkeck}>
            <input
              type="text"
              neme="emailCheck"
              placeholder="인증번호를 입력해 주세요"
              onChange={emailCheckOnChange}
              value={user.checkEmail}
            />
            <button onClick={() => handleEmailInputOnchange(sendEmail.checkEmail)}>확인</button>
            </div>
          )}
        </div>
      <div css={s.joinOkButton}>
        <button onClick={handleSubmitButtonOnClick}>회원가입 하기</button>
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
