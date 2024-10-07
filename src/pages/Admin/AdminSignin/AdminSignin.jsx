/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { adminSigninApi } from "../../../apis/signupApi";

function AdminSignin(props) {
  const [admin, setadmin] = useState({
    adminName: "",
    adminPassword: "",
  });

  const handleInputOnChange = (e) => {
    setadmin((admin) => ({
      ...admin,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubminOnClick = async (admin) => {
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
    }
  };

  return (
    <div css={s.container}>
      <div css={s.signin}>
        <div css={s.signinHeader}>
          <h1>관리자 페이지</h1>
        </div>
        <input
          type="text"
          value={admin.adminName}
          onChange={handleInputOnChange}
          name="adminName"
          placeholder="아이디"
        />
        <input
          type="text"
          value={admin.adminPassword}
          onChange={handleInputOnChange}
          name="adminPassword"
          placeholder="비밀번호"
        />
        <button onClick={handleSubminOnClick}>로그인</button>
      </div>
    </div>
  );
}

export default AdminSignin;
