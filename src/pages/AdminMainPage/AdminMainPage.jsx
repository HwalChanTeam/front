/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import DefaultComponent from "../../components/Admin/DefaultComponent/DefaultComponent";
import ProductView from "../../components/Admin/ProductView/ProductView";
import ProductRegister from "../../components/Admin/ProductRegister/ProductRegister";
import ProductEdit from "../../components/Admin/ProductEdit/ProductEdit";
import ProductDelete from "../../components/Admin/ProductDelete/ProductDelete";
import UserView from "../../components/Admin/UserView/UserView";

function AdminMainPage(props) {
  const [selectedMenu, setSelectedMenu] = useState("");

  const renderComponent = () => {
    if (selectedMenu === "상품 조회") {
      return <ProductView />;
    } else if (selectedMenu === "상품 등록") {
      return <ProductRegister />;
    } else if (selectedMenu === "상품 수정") {
      return <ProductEdit />;
    } else if (selectedMenu === "상품 삭제") {
      return <ProductDelete />;
    } else if (selectedMenu === "유저 조회") {
      return <UserView />;
    } else {
      return <DefaultComponent />;
    }
  };
  return (
    <div css={s.mainBox}>
      <div css={s.menuBox}>
        <h1>선택된 메뉴 이름</h1>
        {/* 메뉴 선택 페이지 */}
        <button onClick={() => setSelectedMenu("상품 조회")}>상품 조회</button>
        <button onClick={() => setSelectedMenu("상품 등록")}>상품 등록</button>
        <button onClick={() => setSelectedMenu("상품 수정")}>상품 수정</button>
        <button onClick={() => setSelectedMenu("상품 삭제")}>상품 삭제</button>
        <button onClick={() => setSelectedMenu("유저 조회")}>유저 조회</button>
      </div>
      <div css={s.contentBox}>
        {/* 메뉴 상세 페이지 */}
        {renderComponent()}
      </div>
    </div>
  );
}

export default AdminMainPage;
