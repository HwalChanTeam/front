import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaSearch } from "react-icons/fa";
import { instance } from "../../../apis/util/instance";
import ProductView from "../ProductView/ProductView";

function AdminSearch({ onSearch }) {
  const [searchProduct, setSearchProduct] = useState({
    title: "",
  });
  //   const [searchProduct, setSearchProduct] = useState({
  //     category: "",
  //     title: "",
  //     price: "",
  //     origin: "",
  //     salesCount: "",
  //     stock: "",
  //     createdDate: ""
  //   });

  const handleSearchOnChange = (e) => {
    setSearchProduct((searchProduct) => ({
      ...searchProduct,
      [e.target.name]: e.target.value,
    }));
  };

  //   const handleSubmitButtonOnClick = async () => {
  //     const response = instance.get(
  //       "/admin/product/search",
  //       searchProduct.title
  //     );
  //   };

  const handleSubmitButtonOnClick = (e) => {
    e.preventDefault();
    onSearch(searchProduct.title); // 검색어 전달
    console.log(searchProduct.title)
  };



  return (
    <div css={s.layout}>
      <div css={s.searchSection}>
        <input
          type="text"
          name="title"
          value={searchProduct.title}
          onChange={handleSearchOnChange}
          placeholder="검색어를 입력하세요"
          css={s.searchInput}
        />
        <button onClick={handleSubmitButtonOnClick} css={s.searchButton}>
          검색
        </button>
      </div>
    </div>
  );
}

export default AdminSearch;
