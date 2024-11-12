/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import * as s from "./style";
import { useState } from "react";
import { instance } from "../../../apis/util/instance";
import DaumPost from "../../PostSearch/PstSearch";

function UserInfo({
  userInfo,
  setUserInfo,
  isUserInfoLoading,
  isUserInfoError,
}) {
  // 주소 선택 완료 시 호출될 함수
  const handleAddressComplete = (address) => {
    setUserInfo((user) => ({
      ...user,
      address: {
        address: address.address, // 지역 주소 업데이트
        detailAddress: address.detailAddress, // 나머지 주소 업데이트
        zipCode: address.zipCode,
      },
    }));
  };

  // 유저 정보 변경 시 사용
  const handleInputChange = (e) => {
    setUserInfo((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  // 로딩 상태 처리
  if (isUserInfoLoading) {
    return <div>로딩 중...</div>;
  }

  // 에러 발생 시 처리
  if (isUserInfoError) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }

  console.log(userInfo);

  return (
    <>
      <div css={s.userInfo}>
        <h2>주문자 정보</h2>
        <div css={s.inputBox}>
          <span>이름 : </span>
          <input
            onChange={handleInputChange}
            type="text"
            name="name"
            defaultValue={userInfo.name}
            placeholder="이름을 입력해 주세요"
          />
        </div>
        <div css={s.inputBox}>
          <label htmlFor="email">이메일 : </label>
          <input
            onChange={handleInputChange}
            type="text"
            name="email"
            defaultValue={userInfo.email}
            placeholder="이메일 주소를 입력해 주세요"
          />
        </div>
        <div css={s.inputBox}>
          <label htmlFor="phoneNumber">연락처 : </label>
          <input
            onChange={handleInputChange}
            type="text"
            name="phoneNumber"
            defaultValue={userInfo.phoneNumber}
            placeholder="연락처를 입력해 주세요"
          />
        </div>
        <div css={s.addressInput}>
          <p css={s.adressButton}>
            <DaumPost onComplete={handleAddressComplete} />
          </p>
          <input
            type="text"
            name="zipCode"
            readOnly
            value={userInfo?.address?.zipCode}
          />
        </div>
        <div css={s.adressInputBox}>
          <label htmlFor="address">지역 주소 : </label>
          <input
            onChange={handleInputChange}
            type="text"
            name="address"
            defaultValue={userInfo?.address?.address}
            placeholder="배송지 입력해 주세요"
          />
        </div>
        <div css={s.adressInputBox}>
          <label htmlFor="detailAddress">나머지 주소 : </label>
          <input
            onChange={handleInputChange}
            type="text"
            name="detailAddress"
            defaultValue={userInfo?.address?.detailAddress}
            placeholder="배송지 입력해 주세요"
          />
        </div>
      </div>
    </>
  );
}

export default UserInfo;
