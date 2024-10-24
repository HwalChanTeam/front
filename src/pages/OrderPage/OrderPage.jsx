/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedItemsAtom, userIdAtom } from "../../apis/util/atom";
import { useState } from "react";
import { buyProductApi, orderGetApi } from "../../apis/productApi";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getUserApi } from "../../apis/userApi";

function OrderPage(props) {
  const [selectedProductIds] = useRecoilState(selectedItemsAtom); // atom 사용
  const token = localStorage.getItem("accessToken");
  const location = useLocation();
  const [product, setProduct] = useState([]);

  const [userInfo, serUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // 상품 정보 불러오기
  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useQuery(
    ["selectedProducts", selectedProductIds],
    () => buyProductApi(selectedProductIds),
    {
      enabled: selectedProductIds.length > 0, // 상품 ID가 있을 때만 쿼리 실행
    }
  );

  // 유저 정보 불러오기
  const {
    data: userInfoData,
    isLoading: isUserInfoLoading,
    isError: isUserInfoError,
  } = useQuery(
    "userInfo",
    getUserApi, // 유저 정보 가져오는 API 호출
    {
      onSuccess: (data) => serUserInfo(data), // 성공 시 userInfo 상태 업데이트
    }
  );

  // 선택된 상품이 없을 때
  if (selectedProductIds.length === 0) {
    return (
      <div>선택된 상품이 없습니다. 장바구니에서 상품을 선택해 주세요.</div>
    );
  }

  // 로딩 상태 처리
  if (isProductsLoading || isUserInfoLoading) {
    return <div>로딩 중...</div>;
  }

  // 에러 발생 시 처리
  if (isProductsError || isUserInfoError) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }

  const handleInputChange = (e) => {
    serUserInfo((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const addressSaveButtonOnClick = () => {};

  const buyButtonOnClick = async () => {
    const responce = await buyProductApi(product.productId);
  };

  // 총 상품 금액 계산
  const calculateTotalProductAmount = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  // 배송비 계산
  const calculateDeliveryFee = (totalAmount) => {
    return totalAmount >= 50000 ? 0 : 3000;
  };

  const totalProductAmount = calculateTotalProductAmount();
  const deliveryFee = calculateDeliveryFee(totalProductAmount);
  const totalAmount = totalProductAmount + deliveryFee;

  return (
    <div css={s.layout}>
      <div css={s.mainBox}>
        <div css={s.userInfo}>
          <h2>주문자 정보</h2>
          <div css={s.inputBox}>
            <span>이름 : </span>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              defaultValue={userInfo.name}
              placeholder="이름을 입력해 주세요"
            />
          </div>
          <div css={s.inputBox}>
            <label htmlFor="email">이메일 : </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="email"
              defaultValue={userInfo.email}
              placeholder="이메일 주소를 입력해 주세요"
            />
          </div>
          <div css={s.inputBox}>
            <label htmlFor="phone">연락처 : </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="phone"
              defaultValue={userInfo.phone}
              placeholder="연락처를 입력해 주세요"
            />
          </div>
          <div css={s.adressButton}>
            <button onClick={addressSaveButtonOnClick}>배송지 저장</button>
          </div>
          <div css={s.adressInputBox}>
            <label htmlFor="address">배송지 : </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="address"
              defaultValue={userInfo.address}
              placeholder="배송지 입력해 주세요"
            />
          </div>
          <div css={s.inputBox}>
            <label htmlFor="message">배송 메세지 : </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="message"
              defaultValue={userInfo.message}
              placeholder="배송 메시지를 입력해 주세요"
            />
          </div>
        </div>
        <div css={s.productInfo}>
          <h2>주문상품 정보</h2>
          <div css={s.productTable}>
            {products &&
              product.map((product) => (
                <tr key={product.productId}>
                  <td>{product.title}</td>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>수량 {product.quantity}</td>
                  <td>상품금액 {product.price.toLocaleString()}원</td>
                  <td>할인금액 0원</td>
                  <td>배송비 {deliveryFee.toLocaleString()}원</td>
                  <td>
                    합계금액{" "}
                    {(product.price * product.quantity).toLocaleString()}원
                  </td>
                </tr>
              ))}
          </div>
          <tr>
            <td>배송비 : {deliveryFee.toLocaleString()}원</td>
          </tr>
        </div>
        <div css={s.payInfo}>
          <h2>결제수단 선택</h2>
          <button>신용카드</button>
          <button>무통장 입금</button>
        </div>
      </div>
      <div css={s.rightBox}>
        <div css={s.payInfoMain}>
          <div css={s.payinfo}>
            <h2>결제금액</h2>
          </div>
          <div css={s.payinfo}>
            <p>상품 금액 : </p>
            <p>{totalProductAmount.toLocaleString()}원</p>
          </div>
          <div css={s.payinfo}>
            <p>할인 금액 : </p>
            <p>0원</p>
          </div>
          <div css={s.payinfo}>
            <p>배송비 : </p>
            <p>{deliveryFee.toLocaleString()}원</p>
          </div>
          <div css={s.payinfo}>
            <p>총 결제 금액 : </p>
            <p>{totalAmount.toLocaleString()}원</p>
          </div>
        </div>
        <div css={s.submitButton}>
          <button onClick={buyButtonOnClick}>결제하기</button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;

/* 주문자 정보 - input창으로 / 입력 되어 있으면 불러오고, 입력이 없으면 입력 가능하게
                이름, 이메일, 폰번호, 주소, 배송 메세지

                주문 상품 / 총 가격
                배송비(50,000원 이상 무료배송)

                결제 수단 선택
            */
