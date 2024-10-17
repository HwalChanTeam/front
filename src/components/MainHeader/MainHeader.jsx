import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import MainSearch from "../MainSearch/MainSearch";
import { instance } from "../../apis/util/instance";
import logo from "../../assets/images/logo.png";

function MainHeader(props) {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [mainSearch, setMainSearch] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (mainSearch) {
        try {
          const response = await instance.get(
            `/admin/product/search?title=${mainSearch}`
          );
          setProductList(response.data);
        } catch (error) {
          console.error("상품을 가져오는 데 실패했습니다:", error);
        }
      } // else {
      //   //   검색어가 없을 때 전체 조회 로직
      //   const response = await instance.get(`/admin/product/search`);
      //   setProduct(response.data);
      // }
    };

    fetchProduct();
  }, [mainSearch]);

  const handleMainSearch = (name) => {
    setMainSearch(name);
  };

  const handleJoinClick = () => {
    navigate("/user/signup");
  };

  const handleLoginClick = () => {
    navigate("/user/signin");
  };

  // 로그인 되어 있지 않으면 로그인 페이지로 넘기기
  const handleBasketClick = () => {
    navigate("/basket");
  };

  const handleOrderClick = () => {};

  return (
    <div css={s.background}>
      <div css={s.headerLayout}>
        <Link to={"/"}>
          <h1>
            <img src={logo} />
            Cuisson
          </h1>
        </Link>
        {/* 로그인이 되어 있지 않으면 아래꺼 랜더링 */}
        <div>
          <MainSearch onSearch={handleMainSearch} />
        </div>
        <div css={s.buttonLayout}>
          <button onClick={handleJoinClick}>회원가입</button>
          <button onClick={handleLoginClick}>로그인</button>
          <button onClick={handleBasketClick}>장바구니</button>
          <button onClick={handleOrderClick}>주문/배송</button>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
