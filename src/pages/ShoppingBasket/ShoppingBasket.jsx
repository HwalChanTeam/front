/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import MainSearch from "../../components/MainSearch/MainSearch";
import MainFooter from "../../components/MainFooter/MainFooter";
import { atom, useRecoilState } from "recoil";
import { selectedItemsAtom } from "../../apis/util/atom";

// 로그인 안하고 들어가면 로그인 페이지로 돌리기
// 구매하기 버튼 누르면 상품 구매 페이지로 넘기기
//

const tempItemList = [
  {
    id: 1,
    title: "엄마의 손맛 김치찌개",
    description: "상품설명 이것은 상품설명입니다.",
    image:
      "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
    price: 10000,
    quantity: 1,
  },
  {
    id: 2,
    title: "우리엄마의 완자고기",
    description: "상품설명 이것은 상품설명입니다.",
    image:
      "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
    price: 10000,
    quantity: 3,
  },
  {
    id: 3,
    title: "삼겹살",
    description: "상품설명 이것은 상품설명입니다.",
    image:
      "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
    price: 10000,
    quantity: 1,
  },
];

function ShoppingBasket(props) {
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsAtom); // atom 사용

  const [productList, setProductList] = useState(
    tempItemList.map((tempItemList) => ({ ...tempItemList, checked: false }))
  );

  const handleQuantityChange = (index, number) => {
    const updatedItems = productList.map((item, i) =>
      i === index
        ? { ...item, quantity: Math.max(1, item.quantity + number) }
        : item
    );
    setProductList(updatedItems);
  };

  const haneldDeleteButtonOnClick = (id) => {
    const deleteItems = productList.filter((item) => item.id !== id);
    setProductList(deleteItems);
  };

  const handleSubmitButtonOnClick = (id) => {
    // id를 가져옴 ->
    const updateItems = productList.map((item) =>
      item.id === id ? { ...item } : item
    );
    setProductList(updateItems);
    //api연결
  };

  const handleBuyButtonOnClick = () => {
    const selectedItems = productList.filter((item) => item.checked);
    const selectedIds = selectedItems.map((item) => item.id);

    if (selectedIds.length > 0) {
      setSelectedItems(selectedIds);
      navigate(`/order`);
    } else {
      alert("주문할 상품을 선택해 주세요.");
    }
  };

  const handleCheckBoxOnChange = (id) => {
    setProductList((productList) =>
      productList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

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
                    <input type="checkbox" />
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
                {productList.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                    <input
                    type="checkbox"
                    onChange={() => handleCheckBoxOnChange(item.id)}
                    checked={item.checked}
                  />
                    </td>
                    <td>
                      <div css={s.img}>
                        <img src={item.image} />
                      </div>
                    </td>
                    <td>
                      <div css={s.productName}>{item.title}</div>
                      <tr>{item.description}</tr>
                    </td>
                    <td>
                      <button onClick={() => handleQuantityChange(index, -1)}>
                        -
                      </button>
                      {item.quantity}
                      <button onClick={() => handleQuantityChange(index, +1)}>
                        +
                      </button>
                    </td>
                    <td>{item.price.toLocaleString()} 원</td>
                    <td>-</td>
                    <td> {calculateTotalPrice(item).toLocaleString()} 원</td>
                    <td>
                      <button onClick={() => haneldDeleteButtonOnClick(item.id)}>
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div css={s.buttonBox}>
            <button onClick={handleBuyButtonOnClick}>주문하기</button>
            <button onClick={() => setProductList([])}>전체삭제</button>
          </div>
        </div>
      </div>
  );
}

export default ShoppingBasket;
