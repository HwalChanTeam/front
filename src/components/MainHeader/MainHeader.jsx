import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import MainSearch from "../MainSearch/MainSearch";
import { instance } from "../../apis/util/instance";
import logo from "../../assets/images/logo.png";
import { RiLoginBoxLine } from "react-icons/ri";
import { BsBasket3 } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { MdOutlineLocalShipping } from "react-icons/md";


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
          <Link to={"/user/signin"}><RiLoginBoxLine /></Link>
          <Link to={"/basket"}><SlBasket /></Link>
          <Link to={"/order"}><BsBasket3 /></Link>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
