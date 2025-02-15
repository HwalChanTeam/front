/** @jsxImportSource @emotion/react */
import * as s from "./style";

// 주문상품 정보 불러오는 기능
function ProductInfo({
  selectedProductIds,
  productList,
  productOrder,
  selectedProduct,
  deliveryFee,
}) {
  const calculateTotalPrice = (product) => {
    return product.product.price * product.quantity;
  };

  return (
    <div css={s.productInfo}>
      <h2>주문상품 정보</h2>
      <table css={s.productTable}>
        {/* 다건 조회 */}
        {productList.map((product) => (
          <tr key={product.product.cartItemId}>
            <td>
              <img src={product.product.thumbnailImg} alt={product.title} />
            </td>
            <td>{product.product.title}</td>
            <td>수량: {product.quantity}</td>
            <td>상품금액: {product.product.price.toLocaleString()}원</td>
            <td>할인금액: 0원</td>
            <td>
              합계금액:{" "}
              {(product.product.price * product.quantity).toLocaleString()}원
            </td>
          </tr>
        ))}
      </table>
      <p>배송비 : {deliveryFee.toLocaleString()}원</p>
    </div>
  );
}

export default ProductInfo;
