/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import { useNavigate } from 'react-router-dom';

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

function LikePage(props) {

    const navigate = useNavigate();

    const [ productList, setProductList ] = useState(
        tempItemList.map((tempItemList) => 
            ({ ...tempItemList })
        )
    );


    const handleContainOnClick = () => {
        const wishlistSeleted = productList.filter((item) => item.checked);
        const wishlistSeletedIds = wishlistSeleted.map(item => item.id);

        if(wishlistSeletedIds.length > 0) {
            setProductList(wishlistSeletedIds);
            navigate("/basket");
        } else {
            alert("상품을 체크해주십시오");
        }
    };

    return (
        <div css={s.wishListContainer}>
        {/* 찜 목록 섹션 */}
        <div css={s.wishListSection}>
          <div css={s.wishListHeader}>
            <h2 css={s.title}>찜 목록</h2>
          </div>
          { productList.length === 0 ? (
              <p css={s.emptyCartMessage}>찜목록이 비었습니다.</p>

              )
            :
            (
                productList.map((item) => (
                    <div css={s.cartItem}>
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
                                    css={s.containButton}
                                >
                                담기
                                </button>
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

export default LikePage;