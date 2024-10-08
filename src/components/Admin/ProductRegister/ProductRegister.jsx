import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ProductRegister(props) {
  const [product, setProduct] = useState({
    category: "냉동",
    productName: "",
    money: "",
    country: "대한민국",
    img: null,
  });

  const inputOnChange = (e) => {
    const { name, value } = e.target;
    
    // 금액 입력일 때 숫자만 허용
    if (name === "price" && isNaN(value)) {
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
        productName: "",
        money: "",
        country: "대한민국",
        img: null,
    })
  }

  const handleSubmitOnClick = async(product) => {
    try {
      const response = await instance.post("/admin/product/add", product)
      alert("상품 등록이 완료되었습니다.")
    } catch(e) {
      console.error(e)
      // 중복되었을때 에러
    }

    refresh();
  }

  return (
    <div css={s.mainBox}>
      <h1>상품 등록 페이지</h1>
      {/* 작성해야 하는 칸
                    분류(냉동, 냉장)
                    상품명
                    금액
                    원산지
                    이미지
                */}
      <div css={s.inputBox}>
        <label for="category">카테고리 : </label>
        <select name="category" id="category" value={product.category} onChange={inputOnChange}>
          <option value="냉동" >냉동</option>
          <option value="냉장" >냉장</option>
        </select>
        <label for="category">상품명 : </label>
        <input type="text" name="productName" value={product.productName} onChange={inputOnChange}/>
        <label for="category">금액 : </label>
        <input type="text" name="money" value={product.money} onChange={inputOnChange}/>
        <label for="category">원산지 : </label>
        <input type="text" name="country" value={product.country} onChange={inputOnChange}/>
        <span>이미지 넣는 칸</span>
        <button onClick={handleSubmitOnClick}>등록</button>
      </div>
    </div>
  );
}

export default ProductRegister;
