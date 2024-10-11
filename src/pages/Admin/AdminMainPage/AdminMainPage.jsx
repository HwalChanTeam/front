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

function AdminMainPage(props) {
  const [selectedMenu, setSelectedMenu] = useState("");

  const renderComponent = () => {
    if (selectedMenu === "상품 조회") {
      return <ProductView />;
    } else if (selectedMenu === "상품 등록") {
      return <ProductRegister />;
    } else if (selectedMenu === "상품 관리") {
      return <ProductEdit />;
    } else if (selectedMenu === "직원 관리") {
      return <StaffManagement />;
    } else if (selectedMenu === "경영 관리") {
      return <Management />;
    } else if (selectedMenu === "유저 조회") {
      return <UserView />;
    } else {
      return <DefaultComponent />;
    }
  };
  return (
    <div css={s.layout}>
      <div css={s.mainBox}>
        <div css={s.menuBox}>
          {/* 메뉴 선택 페이지 */}
          <button onClick={() => setSelectedMenu("상품 조회")}>상품 조회</button>
          <button onClick={() => setSelectedMenu("상품 등록")}>상품 등록</button>
          <button onClick={() => setSelectedMenu("상품 관리")}>상품 관리</button>
          <button onClick={() => setSelectedMenu("직원 관리")}>직원 관리</button>
          <button onClick={() => setSelectedMenu("경영 관리")}>경영 관리</button>
          <button onClick={() => setSelectedMenu("유저 조회")}>유저 조회</button>
        </div>
        <div css={s.contentBox}>
          {/* 메뉴 상세 페이지 */}
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default AdminMainPage;
