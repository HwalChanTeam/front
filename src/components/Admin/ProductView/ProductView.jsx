import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminSearch from "../AdminSearch/AdminSearch";
import { instance } from "../../../apis/util/instance";

const tempProductList = [
  {
      id: 1,
      category: "냉동",
      title: "상품이름1",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 2,
      category: "냉동",
      title: "상품이름2",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 3,
      category: "냉동",
      title: "상품이름3",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 4,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 5,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 6,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 7,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 8,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 9,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 10,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 11,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 12,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 13,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },
  {
      id: 14,
      category: "냉동",
      title: "상품이름4",
      price: "1000",
      origin: "대한민국",
      stock: 10,
      salesCount: 5,
      createdDate: "2024-10-11"
  },

]

function ProductView() {

  const [product, setProduct] = useState(
    tempProductList.map((product) => ({ ...product }))
  );

  // const productList = [
  //   {
  //     id: 0,
  //     category: "",
  //     title: "",
  //     price: "",
  //     origin: "",
  //     salesCount: "",
  //     stock: "",
  //     createdDate: "",
  //   },
  // ];
  const [title, settitle] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (title) {
        try {
          const response = await instance.get(
            `/admin/product/search?title=${title}`
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
  }, [title]);

  const handleSearch = (name) => {
    settitle(name); // 검색어 업데이트
  };

  // const handleReset = () => {
  //     settitle(""); // 검색어 초기화
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
              {tempProductList.map((product) => (
                <tr css={s.productBox}>
                  <div css={s.tableDiv}>
                    <div css={s.spanBox}>
                      <td>
                        <span>{product.category}</span>
                      </td>
                      <td>
                        <span>{product.title}</span>
                      </td>
                      <td>
                        <span>{product.price}</span>
                      </td>
                      <td>
                        <span>{product.origin}</span>
                      </td>
                      <td>
                        <span>{product.stock}</span>
                      </td>
                      <td>
                        <span>{product.salesCount}</span>
                      </td>
                      <td>
                        <span>{product.createdDate}</span>
                      </td>
                    </div>
                    <div css={s.buttonBox}>
                      <button>수정</button>
                      <button>삭제</button>
                    </div>
                  </div>
                </tr>
              ))}
            </tbody>
          ) : (
            <h2>상품이 없습니다.</h2>
          )}
        </table>
      </div>
    </div>
  );
}

export default ProductView;
