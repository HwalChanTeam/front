import React from 'react';
import { Patch } from 'react-axios';
import { Route, Routes } from 'react-router-dom';
import WishListPage from '../WishListPage/WishListPage';
import UserInfo from '../../components/MyPageList/UserInfo/UserInfo';
import BuyInfo from '../../components/MyPageList/BuyInfo/BuyInfo';


// const menus = [
//     {
//         id: 1,
//         Patch: "/user/mypage/userinfo",
//     },
//     {
//         id: 2,
//         Patch: "/user/mypage/wishlist",
//     },
//     {
//         id: 3,
//         Patch: "/user/mypage/buylist",
//     },
// ]

function MyPage(props) {
    return (
        <div>
            <h2>마이페이지</h2>
            <div>
            <Routes>
            <Route path="user/mypage/userinfo" element={<UserInfo />} />
            <Route path="uesr/mypage/wishlist" element={<WishListPage />} />
            <Route path="uesr/mypage/buyinfo" element={<BuyInfo />} />
          </Routes>
            </div>
        </div>
    );
}

export default MyPage;