/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import { BsList } from "react-icons/bs";

function MainLayout(props) {
    const navigate = useNavigate();

    const handleLogoOnClick = () => {
        if(window.confirm("메인 화면으로 돌아가시겠습니까?")) {
            navigate("/")
        }
    }
  return (
      <div css={s.headerLayout}>
        <BsList />
        <h1 onClick={handleLogoOnClick}>로고</h1>
        {/* 로그인이 되어 있지 않으면 아래꺼 랜더링 */}
        <button>회원가입</button>
        <button>로그인</button>
        <button>장바구니</button>
        <button>주문/배송</button>
      </div>
  );
}

export default MainLayout;
