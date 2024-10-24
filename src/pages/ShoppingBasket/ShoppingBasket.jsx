/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedItemsAtom } from "../../apis/util/atom";
import { useMutation, useQuery } from "react-query";
import { deleteProductApi, getBasketProductsApi } from "../../apis/productApi";
import { FaPlus, FaEquals } from "react-icons/fa";

// 로그인 안하고 들어가면 로그인 페이지로 돌리기
// 구매하기 버튼 누르면 상품 구매 페이지로 넘기기
//


function ShoppingBasket(props) {

  return (
    <div css={s.cartContainer}>
      {/* 장바구니 목록 섹션 */}
      <div css={s.cartListSection}>
        <div css={s.basketHeader}>
          <h2 css={s.title}>장바구니</h2>
        </div>
        <div css={s.basketBox}>
          <table css={s.productTable}>
            <thead css={s.thead}>
              <tr>
                <td>
                  <input
                    type="checkbox"
                  />
                </td>
                <th>상품</th>
                <th>상품명</th>
                <th>수량</th>
                <th>금액</th>
                <th>할인</th>
                <th>합계금액</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <div css={s.img}>
                      <img />
                    </div>
                  </td>
                  <td>
                    <div css={s.productName}></div>
                    <tr></tr>
                  </td>
                  <td>
                    <button>
                      -
                    </button>
                    <button>
                      +
                    </button>
                  </td>
                  <td>원</td>
                  <td>-</td>
                  <td>원</td>
                  <td>
                    <button
                      
                    >
                      삭제
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
        <div css={s.footerBox}>
          <div css={s.priceBox}>
            <div css={s.productAmount}>
            <p>총개의 상품금액</p>
            <p>원</p>
            </div>
            <FaPlus />
            <div css={s.deliveryFee}>
              <p>배송비</p>
              <p>원</p>
            </div>
            <FaEquals />
            <div css={s.totalAmount}>
            <p>합계</p>
            <p>원</p>
            </div>
          </div>
        </div>
        <div css={s.buttonBox}>
          <button>주문하기</button>
          <button>전체삭제</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBasket;
