import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminSearch from "../AdminSearch/AdminSearch";
import { instance } from "../../../apis/util/instance";

function ProductView() {
  const [product, setProduct] = useState(null);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (productName) {
        try {
          const response = await instance.get(
            `/admin/product/search?productName=${productName}`
          );
          setProduct(response.data);
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
  }, [productName]);

  const handleSearch = (name) => {
    setProductName(name); // 검색어 업데이트
  };

  // const handleReset = () => {
  //     setProductName(""); // 검색어 초기화
  // };

  //   수정기능
  // 아이디 넘겨줘야함

  //   삭제기능
  // 아이디 넘겨줘야함

  return (
    <div css={s.mainBox}>
      <h1>상품 조회 페이지</h1>
      <AdminSearch onSearch={handleSearch} />
      <div css={s.tableBox}>
        <table css={s.table}>
          {product ? (
            <tbody>
              <tr css={s.productBox}>
                <div css={s.tableDiv}>
                  <div css={s.spanBox}>
                    <span>{product?.data?.category}</span>
                    <span>{product?.data?.productName}</span>
                    <span>{product?.data?.price}</span>
                    <span>{product?.data?.origin}</span>
                    <span>{product?.data?.salesCount}</span>
                    <span>{product?.data?.stock}</span>
                    <span>{product?.data?.createdDate}</span>
                  </div>
                  <div css={s.buttonBox}>
                    <button>수정</button>
                    <button>삭제</button>
                  </div>
                </div>
              </tr>
            </tbody>
          ) : (
            <p>상품이 없습니다.</p>
          )}
        </table>
      </div>
    </div>
  );
}

export default ProductView;
