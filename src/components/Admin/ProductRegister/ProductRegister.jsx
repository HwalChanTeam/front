import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from "../../../apis/util/instance";
import { v4 as uuid } from 'uuid';

import { MdDescription } from "react-icons/md";

import { storage } from "../../../firebase/firebase";

import { useQueryClient } from "react-query";
import { updateProductImgApi } from "../../../apis/productApi";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function ProductRegister(props) {
  const queryClient = useQueryClient();
  const userInfoState = queryClient.getQueryState("userInfoQuery");
  const [uploadPercent, setUploadPercent] = useState(0);

  const [product, setProduct] = useState({
    title: "",
    price: "",
    stock: "",
    category: "냉동",
    description: "",
    origin: "대한민국",
    thumbnailImg: "",
    contentsImg: ""
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
      title: "",
      price: "",
      stock: "",
      category: "냉동",
      description: "",
      origin: "대한민국",
      thumbnailImg: "",
      contentsImg: ""
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
      const response = await instance.post("/admin/main/product/add", product);
      alert("상품 등록이 완료되었습니다.");
    } catch (e) {
      console.error(e);
      // 중복되었을때 에러
    }
    refresh();
  };


  const handleAddImgOnClick = () => {
    if (window.confirm("상품 사진을 등록하실??")) {
      const fileInput = document.createElement("input");
      fileInput.setAttribute("type", "file");
      fileInput.setAttribute("accept", "image/*");
      // fileInput.setAttribute("multiple", "");
      fileInput.click();

      fileInput.onchange = (e) => {
        const files = Array.from(e.target.files);
        const profileImage = files[0];
        setUploadPercent(0);
        
        const storageRef = ref(storage, `user/profile/${uuid()}_${profileImage.name}`);
        
        const uploadTask = uploadBytesResumable(storageRef, profileImage);
        console.log(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            setUploadPercent(
              Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          (error) => {
            console.error(error);
          },
          async (success) => {
            const url = await getDownloadURL(storageRef);
            console.log(url);
            const response = await updateProductImgApi(url);
            queryClient.invalidateQueries(["userInfoQuery"]);
          }
          
        );

      }

    }
  }


  const handleDefaultImgChangeOnClick = async () => {
    if (window.confirm("기본이미지로 변경하시겠습니까?")) {
      await updateProductImgApi("");
      queryClient.invalidateQueries(["userInfoQuery"]);
    }
  }


return (

  <div css={s.mainBox}>
    <h1>상품 등록</h1>
    <div css={s.registerBox}>
      <div css={s.inputBox}>
        <span>
          <label for="category">카테고리</label>
          <select
            name="category"
            id="category"
            value={product.category}
            onChange={inputOnChange}
            css={s.selectBox}
          >
            <option value="냉동">냉동</option>
            <option value="냉장">냉장</option>
          </select>
        </span>
        <span>
          <label for="title">상품명</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={inputOnChange}
          />
        </span>
        <span>
          <label for="price">금액</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={inputOnChange}
          />
        </span>
        <span>
          <label for="origin">원산지</label>
          <input
            type="text"
            name="origin"
            value={product.origin}
            onChange={inputOnChange}
          />
        </span>
        <span>
          <label for="stock">재고</label>
          <input
            type="text"
            name="stock"
            value={product.stock}
            onChange={inputOnChange}
          />
        </span>
        <span>
          <label for="thumbnailImg">이미지</label>
          <img src="" alt="" />
          <button  >상품 이미지 등록</button>
        </span>
      </div>
      <div css={s.buttonBox}>
        <button onClick={handleSubmitOnClick}>상품 등록</button>
      </div>
    </div>
  </div>
);
}

export default ProductRegister;
