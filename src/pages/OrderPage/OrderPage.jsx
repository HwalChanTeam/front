import React, { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useQuery } from "react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import BankAccount from "../../components/Payments/BankAccount/BankAccount";
import Card from "../../components/Payments/Card/Card";
import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";
import PaymentMethod from "../../components/Order/PaymentMethod/PaymentMethod";
import ProductInfo from "../../components/Order/ProductInfo/ProductInfo";
import UserInfo from "../../components/Order/UserInfo/UserInfo";
import { productOrderAtom, selectedItemsAtom } from "../../apis/util/atom";
import { instance } from "../../apis/util/instance";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function OrderPage(props) {
  const [searchParams] = useSearchParams();

  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    let orderProducts = [];
    searchParams.getAll("cartId").forEach((cartId, index) => {
      if (!orderProducts[index]) {
        orderProducts = [
          ...orderProducts,
          {
            cartId,
          },
        ];
      } else {
        orderProducts = orderProducts.map((orderProduct, index2) => {
          if (index === index2) {
            return {
              ...orderProduct,
              cartId,
            };
          }
          return orderProduct;
        });
      }
    });

    searchParams.getAll("cartItemId").forEach((cartItemId, index) => {
      if (!orderProducts[index]) {
        orderProducts = [
          ...orderProducts,
          {
            cartItemId,
          },
        ];
      } else {
        orderProducts = orderProducts.map((orderProduct, index2) => {
          if (index === index2) {
            return {
              ...orderProduct,
              cartItemId,
            };
          }
          return orderProduct;
        });
      }
    });

    searchParams.getAll("quantity").forEach((quantity, index) => {
      if (!orderProducts[index]) {
        orderProducts = [
          ...orderProducts,
          {
            quantity,
          },
        ];
      } else {
        orderProducts = orderProducts.map((orderProduct, index2) => {
          if (index === index2) {
            return {
              ...orderProduct,
              quantity,
            };
          }
          return orderProduct;
        });
      }
    });

    setOrderProducts(orderProducts);
    console.log(orderProducts);
  }, []);

  // 결제 상태
  const [payMentState, setPayMentState] = useState("");

  const [productList, setProductList] = useState([]);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    point: 0,
    address: {
      address: "",
      detailAddress: "",
      zipCode: "",
    },
    message: "",
  });

  // 가겨 * 수량 함수
  const calculateTotalPrice = (product) => {
    return product.product.price * product.quantity;
  };

  const calculateTotals = () => {
    let totalProductAmount = 0;
    let deliveryFee = 0;
    let totalAmount = 0;

    if (Array.isArray(productList) && productList.length > 0) {
      totalProductAmount = productList.reduce((total, product) => {
        return total + calculateTotalPrice(product);
      }, 0);
    }

    deliveryFee = totalProductAmount >= 30000 ? 0 : 3000;
    totalAmount = totalProductAmount + deliveryFee;

    return { totalProductAmount, totalAmount, deliveryFee };
  };

  const { totalProductAmount, totalAmount, deliveryFee } = calculateTotals();

  const {
    data: userInfoData,
    isLoading: isUserInfoLoading,
    isError: isUserInfoError,
  } = useQuery(
    "userInfo",
    async () => {
      return await instance.get("/user"); // 유저 정보 가져오는 API 호출
    },
    {
      onSuccess: (response) => {
        setUserInfo(response.data); // 성공 시 userInfo 상태 업데이트
      },
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );

  // 다건 조회시 사용하는 쿼리
  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useQuery(
    ["selectedProducts"],
    async () => {
      const cartItemIds = orderProducts.map((item) => item.cartItemId);
      return await instance.get("/user/cart/order", {
        params: { id: cartItemIds.join(",") },
      });
    },
    {
      onSuccess: (response) => {
        setProductList(response.data.cartItemList);
        console.log(response?.data?.cartItemList);
      },
      enabled: orderProducts.length > 0,
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );

  if (isProductsLoading) {
    return <div>로딩 중...</div>;
  }

  if (isProductsError) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }

  return (
    <div css={s.layout}>
      <div css={s.mainBox}>
        <UserInfo
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          isUserInfoLoading={isUserInfoLoading}
          isUserInfoError={isUserInfoError}
        />
        <ProductInfo
          productList={productList}
          deliveryFee={deliveryFee}
          point={userInfo.point}
        />
        <PaymentMethod setPayMentState={setPayMentState} />
        {payMentState === "bankbook" ? (
          <BankAccount />
        ) : payMentState === "CARD" ? (
          <Card />
        ) : null}
      </div>
      <OrderSummary
        totalProductAmount={totalProductAmount}
        deliveryFee={deliveryFee}
        totalAmount={totalAmount}
        userInfo={userInfo}
        payMentState={payMentState}
        productList={productList}
      />
    </div>
  );
}

export default OrderPage;
