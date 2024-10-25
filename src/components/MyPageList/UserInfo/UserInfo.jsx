/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useMutation, useQuery } from "react-query";
import { getUserApi, updateUserApi } from "../../../apis/userApi";
import DaumPost from "../../PostSearch/PstSearch";

function UserInfo(props) {

  return (
    <div css={s.layout}>
      <div css={s.mainBox}>
        <div css={s.userInfo}>
          <h2>사용자 정보</h2>
          <div css={s.inputBox}>
            <label >아이디 : </label>
            <input type="text"/>
          </div>
          <div css={s.inputBox}>
            <label >이름 : </label>
            <input type="text" />
          </div>
          <div css={s.inputBox}>
            <label htmlFor="email">이메일 : </label>
            <input
              type="text" 
              placeholder="이메일 주소를 입력해 주세요"/>
          </div>
          <div css={s.inputBox}>
            <label htmlFor="phone">휴대폰 번호 : </label>
            <input
              type="text" 
              placeholder="휴대폰 번호를 입력해 주세요"
            />
          </div>
          <p>
            {/* DaumPost 컴포넌트 추가 */}
            <DaumPost />
          </p>
          <div css={s.addressBox}>
            <label>지역 주소: </label>
            <input
              type="text"
              name="address"// 지역 주소 반영
            />
          </div>
          <div css={s.inputBox}>
            <label>나머지 주소: </label>
            <input
              type="text" // 나머지 주소 반영
            />
          </div>
        </div>
        <div css={s.buttonBox}>
          <button >정보 수정</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
