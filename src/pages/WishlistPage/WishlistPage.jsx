/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';

const tempItemList = [
    {
      id: 1,
      name: "상품명1",
      description: "상품설명 이것은 상품설명입니다.",
      image: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
      price: 10000,
    },
    {
      id: 2,
      name: "상품명2",
      description: "상품설명 이것은 상품설명입니다.",
      image: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
      price: 10000,
    },
    {
      id: 3,
      name: "상품명3",
      description: "상품설명 이것은 상품설명입니다.",
      image: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
      price: 10000,
    },
  ];

function WishlistPage(props) {

    const [ productList, setProductList ] = useState(
        tempItemList.map((tempItemList) => 
            ({ ...tempItemList, checked: false })
        )
    );

    const handleCheckBoxOnChange = (id) => {
        setProductList((productList) => 
            productList.map((product) => 
                product.id === id ? { ...product, checked: !product.checked } : product
            )
        );
    }

    return (
        <div css={s.wishListContainer}>
        {/* 찜 목록 섹션 */}
        <div css={s.wishListSection}>
          <div css={s.wishListHeader}>
            <h2 css={s.title}>찜 목록</h2>
            <div css={s.bottonBox}>
              <button css={s.orderButton}>
                담기 
              </button>
            </div>
          </div>
          { productList.length === 0 ? (
              <p css={s.emptyCartMessage}>찜목록이 비었습니다.</p>

              )
            :
            (
                productList.map((item) => (
                    <div css={s.cartItem}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheckBoxOnChange(item.id)}
                            checked={item.checked}
                            id={item.id}
                        />
                        <div css={s.itemImage}>
                            <img src={item.image} alt="상품 이미지" />
                        </div>
                        <div css={s.itemBox}>
                            <div css={s.itemDetails}>
                                <div css={s.nameDescriptionContainer}>
                                    <h3 css={s.itemName}>{item.name}</h3>
                                    <p css={s.itemDescription}>{item.description}</p>
                                </div>
                            </div>
                            <div css={s.itemActions}>
                                <button
                                css={s.deleteButton}
                                >
                                삭제
                                </button>
                            </div>

                        </div>
                    </div>
                ))
        )

          }
        </div>
      </div>
    );
}

export default WishlistPage;