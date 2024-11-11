import React, { useCallback, useState } from "react";
import { Patch } from "react-axios";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import UserInfo from "../../components/MyPageList/UserInfo/UserInfo";
import BuyInfo from "../../components/MyPageList/BuyInfo/BuyInfo";
import WishList from "../../components/MyPageList/WishList/WishList";
import { RiFileUserLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { GoTrash } from "react-icons/go";
import { v4 as uuid } from 'uuid';
import {
  HiOutlineClipboardDocumentList,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReviewInfo from "../../components/MyPageList/ReviewInfo/ReviewInfo";
import { useQuery, useQueryClient } from "react-query";
import { instance } from "../../apis/util/instance";
import LeaveUser from "../../components/MyPageList/LeaveUser/LeaveUser";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { updateProductImgApi } from "../../apis/productApi";

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
  const queryClient = useQueryClient();
  const userInfoState = queryClient.getQueryState("userInfoQuery");
  const [isUploading, setUploading] = useState(false);

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
  
  const handleImageChangeOnClick = useCallback(() => {
    if (window.confirm("프로필 사진을 변경하시겠습니까?")) {
        const fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.click();

        fileInput.onchange = (e) => {
            const files = Array.from(e.target.files);
            const profileImage = [];

            const storage = getStorage();
            setUploading(true);

            files.forEach((file) => {
              const storageRef = ref(storage, `user/${uuid()}_${file.name}`);
              const task = uploadBytesResumable(storageRef, file);
  
              task.on(
                'state_changed',
                () => { }, // 업로드 중 상태 핸들링 (옵션)
                (e) => {
                    console.error(e);
                    setUploading(false);
                },
                async () => {
                    try {
                        const url = await getDownloadURL(storageRef); // 업로드 완료 후 URL 가져오기
                        profileImage.push(url);
  
                        setUserInfo((user) => ({
                            ...user,
                            img: profileImage[0]
                        }));
  
                    } catch (e) {
                        console.error(e);
                    } finally {
                        setUploading(true);
                    }
                }
              );
            });
          };
    }
  }, []); 

  console.log(userInfo)

  return (
    <div css={s.mainContainer}>
      <h2>마이페이지</h2>
      <div css={s.userInfoContainer}>
        <div css={s.imgBox} onClick={handleImageChangeOnClick} >
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
          userInfo={userInfo}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default MyPage;
