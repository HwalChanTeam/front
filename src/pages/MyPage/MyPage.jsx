import React, { useState } from "react";
import { Patch } from "react-axios";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import UserInfo from "../../components/MyPageList/UserInfo/UserInfo";
import BuyInfo from "../../components/MyPageList/BuyInfo/BuyInfo";
import WishList from "../../components/MyPageList/WishList/WishList";
import { RiFileUserLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { GoTrash } from "react-icons/go";
import {
  HiOutlineClipboardDocumentList,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReviewInfo from "../../components/MyPageList/ReviewInfo/ReviewInfo";
import { useQuery } from "react-query";
import { instance } from "../../apis/util/instance";
import LeaveUser from "../../components/MyPageList/LeaveUser/LeaveUser";

const menus = [
  {
    id: 1,
    name: "정보 조회",
    path: "/mypage/userinfo",
    icon: <RiFileUserLine />,
  },
  {
    id: 2,
    name: "찜목록",
    path: "/mypage/wishlist",
    icon: <FcLike />,
  },
  {
    id: 3,
    name: "구매기록",
    path: "/mypage/buyinfo",
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    id: 4,
    name: "구매후기",
    path: "/mypage/reviewinfo",
    icon: <HiOutlinePencilSquare />,
  },
  {
    id: 5,
    name: "회원탈퇴",
    path: "/mypage/leaveUser",
    icon: <GoTrash />,
  },
];

function MyPage(props) {
  const location = useLocation();
  const { pathname } = location;

  const [userInfo, setUserInfo] = useState();

  const getUserInfo = useQuery(
    ["getUserInfo"],
    async () => {
      return await instance.get("/user");
    },
    {
      onSuccess: (response) => {
        setUserInfo(response.data);
      },
    }
  );

  return (
    <div css={s.mainContainer}>
      <h2>마이페이지</h2>
      <div css={s.userInfoContainer}>
        <div css={s.imgBox}>
          <img src={userInfo?.img} alt="" />
        </div>
        <div css={s.userInfoBox}>
          <p>{userInfo?.name}님 반갑습니다.</p>
          <p>{userInfo?.email}</p>
          <p>적립금 : {userInfo?.point.toLocaleString()}원</p>
        </div>
      </div>
      <div css={s.menuBox}>
        {/* 메뉴 선택 버튼 */}
        {menus.map((menu) => (
          <Link
            key={menu.id}
            to={menu.path}
            css={s.selectedMenu(pathname === menu.path)}
          >
            {menu.icon} <span>{menu.name}</span>
          </Link>
        ))}
      </div>
      <div css={s.contentsBox}>
        <Routes>
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/buyinfo" element={<BuyInfo />} />
          <Route path="/reviewinfo" element={<ReviewInfo />} />
          <Route path="/leaveUser" element={<LeaveUser 
          userInfo={getUserInfo}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default MyPage;
