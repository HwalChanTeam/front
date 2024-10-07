import React from 'react';
/** @jsxImportSource @emotion/react */
import *as s from './style';
import { useNavigate } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
function MainHeader(props) {
    
    const navigate = useNavigate();

    const handleLogoOnClick = () => {
        if(window.confirm("메인 화면으로 돌아가시겠습니까?")) {
            navigate("/")
        }
    }
    return (
        <div css={s.headerLayout}>
            <button><BsList style={{ margin: "10px 0px 0px 20px", fontSize: "50px" }}/></button>
            <h1 onClick={handleLogoOnClick}>로고</h1>
            {/* 로그인이 되어 있지 않으면 아래꺼 랜더링 */}
            <div css={s.buttonLayout}>
                <button>회원가입</button>
                <button>로그인</button>
                <button>장바구니</button>
                <button>주문/배송</button>
            </div>
        </div>
    );
}

export default MainHeader;