import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoSearchSharp } from "react-icons/io5";
function MainSearch({ onSearch }) {
  const [mainSearchProduct, setMainSearchProduct] = useState({
    title: "",
  });

  const handleMainSearchOnChange = (e) => {
    setMainSearchProduct((mainSearchProduct) => ({
      ...mainSearchProduct,
      [e.target.name]: e.target.value,
    }));
  };

  const handleMainSearchOnClick = () => {
    setMainSearchProduct({
      title: "",
    });
  };

  return (
    <div css={s.layout}>
      <div css={s.searchSection}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          name="title"
          css={s.searchInput}
          onChange={handleMainSearchOnChange}
          value={mainSearchProduct.title}
        />
        <IoSearchSharp onClick={handleMainSearchOnClick} size="30" />
      </div>
    </div>
  );
}

export default MainSearch;
