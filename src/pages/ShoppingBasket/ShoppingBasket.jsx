/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import MainSearch from "../../components/MainSearch/MainSearch";
import MainFooter from "../../components/MainFooter/MainFooter";

// 로그인 안하고 들어가면 로그인 페이지로 돌리기
// 구매하기 버튼 누르면 상품 구매 페이지로 넘기기
//

const tempItemList = [
  {
    id: 1,
    name: "상품명1",
    description: "상품설명 이것은 상품설명입니다.",
    image:
      "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
    price: 10000,
    quantity: 1,
  },
];

function ShoppingBasket(props) {
  const handleQuantityChange = (index, number) => {
    const updatedItems = productList.map((item, i) =>
      i === index
        ? { ...item, quantity: Math.max(1, item.quantity + number) }
        : item
    );
    setProductList(updatedItems);
  };

  const haneldDeleteButtonOnClick = (id) => {
    // 삭제 시키는 api동작
    // 리프레시 동작
  };

  const handleSubmitButtonOnClick = (id) => {
    // id를 가져옴 ->
  };

  const handleBuyButtonOnClick = () => {};

  const [productList, setProductList] = useState(
    tempItemList.map((tempItemList) => ({ ...tempItemList, checked: false }))
  );

  const handleCheckBoxOnChange = (id) => {
    setProductList((productList) =>
      productList.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  return (
    <>
      <div css={s.cartContainer}>
        {/* 장바구니 목록 섹션 */}
        <div css={s.cartListSection}>
          <div css={s.basketHeader}>
            <h2 css={s.title}>장바구니 목록</h2>
            <div css={s.bottonBox}>
              <button onClick={handleBuyButtonOnClick} css={s.orderButton}>
                주문하기
              </button>
            </div>
          </div>
          {productList.length === 0 ? (
            <p css={s.emptyCartMessage}>장바구니가 비었습니다.</p>
          ) : (
            productList.map((item, index) => (
              <div key={index} css={s.cartItem}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckBoxOnChange(item.id)}
                  checked={item.checked}
                  id={item.id}
                />
                <div css={s.itemImage}>
                  <img src={item.image} alt="상품 이미지" />
                </div>
                <div css={s.itemDetails}>
                  {/* 상품명, 상품설명, 수량 버튼을 하나의 div로 묶음 */}
                  <div css={s.nameDescriptionContainer}>
                    <h3 css={s.itemName}>{item.name}</h3>
                    <p css={s.itemDescription}>{item.description}</p>
                    {/* 수량 조절 버튼 */}
                    <div css={s.quantityControl}>
                      <button
                        onClick={() => handleQuantityChange(index, -1)}
                        css={s.quantityButton}
                      >
                        -
                      </button>
                      <span css={s.quantityValue}>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(index, 1)}
                        css={s.quantityButton}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* 총 금액 표시 */}
                  <p>
                    총 금액: {calculateTotalPrice(item).toLocaleString()} 원
                  </p>
                  <div css={s.itemActions}>
                    <button
                      css={s.confirmButton}
                      onClick={() => handleSubmitButtonOnClick(item.id)}
                    >
                      확인
                    </button>
                    <button
                      css={s.deleteButton}
                      onClick={() => haneldDeleteButtonOnClick(item.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          {/* 주문하기 버튼 */}
          <div css={s.bottonBox}>
            <button onClick={handleBuyButtonOnClick} css={s.orderButton}>
              주문하기
            </button>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default ShoppingBasket;
