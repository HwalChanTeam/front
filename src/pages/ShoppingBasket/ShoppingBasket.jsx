/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';
import { Link, useNavigate } from 'react-router-dom';

function ShoppingBasket(props) {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: '상품명', description: '상품설명 이것은 상품설명입니다.', image: '이미지_링크', quantity: 1 }
    ]);

    const handleQuantityChange = (index, delta) => {
        const updatedItems = cartItems.map((item, i) =>
            i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        );
        setCartItems(updatedItems);
    };

    return (
        <div css={s.cartContainer}>
        {/* 검색 섹션 */}
        <div css={s.searchSection}>
          <input type="text" placeholder="검색어를 입력하세요" css={s.searchInput} />
          <button css={s.searchButton}>검색</button>
        </div>
  
        {/* 장바구니 목록 섹션 */}
        <div css={s.cartListSection}>
          <h2 css={s.title}>장바구니 목록</h2>
  
          {cartItems.length === 0 ? (
            <p css={s.emptyCartMessage}>장바구니에 목록이 없습니다.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} css={s.cartItem}>
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
                      <button onClick={() => handleQuantityChange(index, -1)} css={s.quantityButton}>-</button>
                      <span css={s.quantityValue}>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(index, 1)} css={s.quantityButton}>+</button>
                    </div>
                  </div>
                </div>
  
                <div css={s.itemActions}>
                  <button css={s.confirmButton}>확인</button>
                  <button css={s.deleteButton}>삭제</button>
                </div>
              </div>
            ))
          )}
        </div>
  
        {/* 주문하기 버튼 */}
        <button css={s.orderButton}>주문하기</button>
      </div>
    );
  };

export default ShoppingBasket;