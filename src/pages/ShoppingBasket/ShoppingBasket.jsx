/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { Link, useNavigate } from "react-router-dom";
import MainSearch from "../../components/MainSearch/MainSearch";
import MainFooter from "../../components/MainFooter/MainFooter";
import { atom, useRecoilState } from "recoil";
import { selectedItemsAtom } from "../../apis/util/atom";
import { useMutation, useQuery } from "react-query";
import { deleteProductApi, getCartProductsApi } from "../../apis/productApi";

// 로그인 안하고 들어가면 로그인 페이지로 돌리기
// 구매하기 버튼 누르면 상품 구매 페이지로 넘기기
//

const tempProductList = [
  {
    productId: 1,
    title: "엄마의 손맛 김치찌개",
    description: "상품설명 이것은 상품설명입니다.",
    image:
      "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
    price: 10000,
    quantity: 1,
  },
  {
    productId: 2,
    title: "우리엄마의 완자고기",
    description: "상품설명 이것은 상품설명입니다.",
    image:
      "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
    price: 10000,
    quantity: 3,
  },
  {
    productId: 3,
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

  const [selectedProducts, setSelectedProducts] = useRecoilState(selectedItemsAtom); // atom 사용
  const [productList, setProductList] = useState([]); // 상품 목록 상태 추가

  // 전체 체크박스 기본 속성 - false
  const [isAllchecked, setIsAllchecked] = useState(false);

  // 장바구니 상품 가져오기
  const { data, isLoading, refetch } = useQuery("cartProducts", getCartProductsApi, {
    onSuccess: (data) => setProductList(data), // 데이터 가져오면 productList에 설정
  });

  // 삭제 요청을 위한 mutation
  const mutation = useMutation(deleteProductApi, {
    onSuccess: () => {
      refetch(); // 삭제 후 장바구니를 다시 불러오기
    }
  });

  // 전체 체크박스 체인지 함수
  const handleAllCkeckBoxOnChange = () => {
    const checkState = !isAllchecked;
    setIsAllchecked(checkState);
    setProductList(productList.map((product) => ({ ...product, checked: checkState })));
  };

  // 개별 체크박스 체인지 함수
  const handleCheckBoxOnChange = (productId) => {
    const updateProductList = productList.map((product) =>
      product.productId === productId ? { ...product, checked: !product.checked } : product
    );
    setProductList(updateProductList);

    // 모든 개별 체크박스가 선택된 경우 전체 체크박스도 체크
    const allChecked = updateProductList.every((product) => product.checked);
    setIsAllchecked(allChecked);
  };

  // 수량 변경 함수
  const handleQuantityChange = (index, number) => {
    const updatedProducts = productList.map((product, i) =>
      i === index
        ? { ...product, quantity: Math.max(1, product.quantity + number) }
        : product
    );
    setProductList(updatedProducts);
  };

  // 삭제 버튼 클릭 함수
  const handleDeleteButtonOnClick = (productId) => {
    mutation.mutate(productId);
  };

  // 상품갯수 * 가격 함수
  const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
  };


  // // 완료 버튼 클릭(현재 미사용)
  // const handleSubmitButtonOnClick = (productId) => {
  //   const updatedProducts = productList.map((product) =>
  //     product.productId === productId ? { ...product } : product
  //   );
  //   setProductList(updatedProducts);
  //   // api 연결
  // };

  // 구매 버튼 클릭 시 작동
  const handleBuyButtonOnClick = () => {
    const selectedProducts = productList.filter((product) => product.checked);
    const selectedProductIds = selectedProducts.map((product) => product.productId);

    if (selectedProductIds.length > 0) {
      setSelectedProducts(selectedProductIds);
      navigate(`/order`);
    } else {
      alert("주문할 상품을 선택해 주세요.");
    }
  };

  if (isLoading) return <div>Loading...</div>;

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
                  <input type="checkbox"
                    onChange={handleAllCkeckBoxOnChange}
                    checked={isAllchecked}
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
              {productList.map((product, index) => (
                <tr key={product.productId}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckBoxOnChange(product.productId)}
                      checked={product.checked}
                    />
                  </td>
                  <td>
                    <div css={s.img}>
                      <img src={product.image} />
                    </div>
                  </td>
                  <td>
                    <div css={s.productName}>{product.title}</div>
                    <tr>{product.description}</tr>
                  </td>
                  <td>
                    <button onClick={() => handleQuantityChange(index, -1)}>
                      -
                    </button>
                    {product.quantity}
                    <button onClick={() => handleQuantityChange(index, +1)}>
                      +
                    </button>
                  </td>
                  <td>{product.price.toLocaleString()} 원</td>
                  <td>-</td>
                  <td> {calculateTotalPrice(product).toLocaleString()} 원</td>
                  <td>
                    <button onClick={() => handleDeleteButtonOnClick(product.productId)}>
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
