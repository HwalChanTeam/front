import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from "../../../apis/util/instance";

function ProductRegister(props) {
  const [product, setProduct] = useState({
    category: "냉동",
    title: "",
    price: "",
    origin: "대한민국",
    stock: "",
    img: null,
  });

  const inputOnChange = (e) => {
    const { name, value } = e.target;

    // 금액 입력일 때 숫자만 허용
    if (name === "price" && isNaN(value)) {
      return; // 숫자가 아닐 경우 아무 것도 하지 않음
    }
    if (name === "stock" && isNaN(value)) {
      return; // 숫자가 아닐 경우 아무 것도 하지 않음
    }
    setProduct((product) => ({
      ...product,
      [e.target.name]: e.target.value,
    }));
  };

  const refresh = () => {
    setProduct({
      category: "냉동",
      title: "",
      price: "",
      origin: "대한민국",
      stock: "",
      img: null,
    });
  };

  const handleSubmitOnClick = async () => {
    if (product.category === "냉동") {
      product.category = "1";
    }
    if (product.category === "냉장") {
      product.category = "2";
    }
    try {
      console.log(product);
      const response = await instance.post("/admin/product/add", product);
      alert("상품 등록이 완료되었습니다.");
    } catch (e) {
      console.error(e);
      // 중복되었을때 에러
    }

    refresh();
  };

  return (
    <div css={s.mainBox}>
      <h1>상품 등록 페이지</h1>
      <div css={s.imgBox}>
        <img src="" alt="" />
      </div>
      <div css={s.inputBox}>
        <span>
          <label for="category">카테고리 : </label>
          <select
            name="category"
            id="category"
            value={product.category}
            onChange={inputOnChange}
          >
            <option value="냉동">냉동</option>
            <option value="냉장">냉장</option>
          </select>
        </span>
        <span>
          <label for="title">상품명 : </label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={inputOnChange}
          />
        </span>
        <span>
          <label for="price">금액 : </label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={inputOnChange}
          />
        </span>
        <span>
          <label for="origin">원산지 : </label>
          <input
            type="text"
            name="origin"
            value={product.origin}
            onChange={inputOnChange}
          />
        </span>
        <span>
          <label for="stock">재고 : </label>
          <input
            type="text"
            name="stock"
            value={product.stock}
            onChange={inputOnChange}
          />
        </span>
      </div>
      <div css={s.buttonBox}>
        <button onClick={handleSubmitOnClick}>등록</button>
      </div>
    </div>
  );
}

export default ProductRegister;
