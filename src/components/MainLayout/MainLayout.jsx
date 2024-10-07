/** @jsxImportSource @emotion/react */
import MainHeader from "../MainHeader/MainHeader";
import * as s from "./style";

function MainLayout({ children }) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
}

export default MainLayout;
