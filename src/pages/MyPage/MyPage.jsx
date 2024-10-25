import React from "react";
import { Patch } from "react-axios";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import UserInfo from "../../components/MyPageList/UserInfo/UserInfo";
import BuyInfo from "../../components/MyPageList/BuyInfo/BuyInfo";
import WishList from "../../components/MyPageList/WishList/WishList";
import { RiFileUserLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { HiOutlineClipboardDocumentList, HiOutlinePencilSquare } from "react-icons/hi2";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReviewInfo from "../../components/MyPageList/ReviewInfo/ReviewInfo";

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
];

function MyPage(props) {

  return (
    <div css={s.mainContainer}>
      <h2>마이페이지</h2>
      <div css={s.userInfoBox}>
        <p>ㅁㅁㅁ님 반갑습니다.</p>
        <p>ㅁㅁㅁ@ㅁㅁㅁ.com</p>
        <p>적립금 : ㅁㅁㅁ원</p>
      </div>
        <div css={s.menuBox}>
          {/* 메뉴 선택 버튼 */}
         
            <Link
            >
              <span></span>
            </Link>
      </div>
      <div css={s.contentsBox}>
        <Routes>
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/buyinfo" element={<BuyInfo />} />
          <Route path="/reviewinfo" element={<ReviewInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default MyPage;
