/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import DefaultComponent from "../../../components/Admin/DefaultComponent/DefaultComponent";
import ProductView from "../../../components/Admin/ProductView/ProductView";
import ProductRegister from "../../../components/Admin/ProductRegister/ProductRegister";
import ProductEdit from "../../../components/Admin/ProductEdit/ProductEdit";
import UserView from "../../../components/Admin/UserView/UserView";
import Management from "../../../components/Admin/Management/Management";
import StaffManagement from "../../../components/Admin/StaffManagement/StaffManagement";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import { IoBagAddOutline } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { PiUsersFourLight } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { IoBusinessOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const menus = [
  {
    id: 1,
    name: "상품 등록",
    path: "/admin/main/product/register",
    icon: <IoBagAddOutline />,
  },
  {
    id: 2,
    name: "상품 관리",
    path: "/admin/main/product",
    icon: <RiProductHuntLine />,
  },
  {
    id: 3,
    name: "경영 관리",
    path: "/admin/main/business",
    icon: <IoBusinessOutline />,
  },
  {
    id: 4,
    name: "직원 관리",
    path: "/admin/main/staff",
    icon: <PiUsersFourLight />,
  },
  {
    id: 5,
    name: "유저 관리",
    path: "/admin/main/user",
    icon: <LuUser />,
  },
];
{
  /* admin12 Admin1q2w3e4r!!- */
}
function AdminMainPage(props) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div css={s.layout}>
      <div css={s.mainBox}>
        <div css={s.menuBox}>
          {/* 메뉴 선택 페이지 */}

          <Link to={"/admin"} css={s.logo}>
            LOGO
          </Link>
          {menus.map((menu) => (
            <Link
              key={menu.id}
              to={menu.path}
              css={s.selectedMenu(pathname === menu.path)}
            >
              {menu.icon} <span>{menu.name}</span>
            </Link>
          ))}
          <div css={s.menuBotton}>
            <button css={s.logoutButton}>
              <IoLogOutOutline />
              로그아웃
            </button>
          </div>
        </div>
        <div css={s.contentBox}>
          <Routes>
            <Route path="/" element={<DefaultComponent />} />
            <Route path="/product/register" element={<ProductRegister />} />
            <Route path="/product" element={<ProductEdit />} />
            <Route path="/staff" element={<StaffManagement />} />
            <Route path="/business" element={<Management />} />
            <Route path="/user" element={<UserView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminMainPage;
