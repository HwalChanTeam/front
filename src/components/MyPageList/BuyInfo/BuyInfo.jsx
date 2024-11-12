import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { instance } from "../../../apis/util/instance";
import { FaTrash, FaRedo } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { TbTrashOff } from "react-icons/tb";
import { portone } from "../../../portone/portone";
import { FaRegPenToSquare } from "react-icons/fa6";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import axios from "axios";
import Swal from "sweetalert2";
import RegisterReviewModal from "../../Modal/RegisterReviewModal";

function BuyInfo(props) {
  // 모달 띄우는 상태 추가
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const navigate = useNavigate();
  // 구매상품 목록 배열로 불러오기
  const [userBuyInfo, setUserBuyInfo] = useState([]);
  const [paymentData, setPaymentData] = useState({});

  // 구매기록 map돌리는 거에 후기작성 버튼 추가 - 모달창 띄움 - 별점(1 - 5), 제목, 내용 입력
  // 배송완료 후 7일 이내에만 리뷰 작성 가능하게 해야함

  //구매목록 조회 기능
  const { data, isError, isLoading, refetch } = useQuery(
    ["getUserBuyInfo"],
    async () => {
      return await instance.get("/user/order/record");
    },
    {
      onSuccess: (response) => {
        console.log(response);
        setUserBuyInfo(response.data);
      },
    }
  );

  const getPaymentNum = async (orderId) => {
    let response = null;
    try {
      response = await instance.get("/user/payment", {
        params: { orderId: orderId },
      });
      console.log(response);
      setPaymentData(response?.data); // 다시 확인
    } catch (error) {
      console.error(error);
    }
  };

  const accessTokenMutaion = useMutation(
    async () =>
      await axios.post("https://api.portone.io/login/api-secret", {
        apiSecret: portone,
      }),
    {
      onSuccess: (response) => console.log(response),
    }
  );

  const portonePaymentCancelMutation = useMutation(
    async ({ accessToken }) => {
      const cancelAmount = paymentData.amount;
      console.log("cancelAmount", cancelAmount, typeof cancelAmount);
      console.log(accessToken);
      console.log(paymentData.paymentNum);
      const options = {
        method: "post",
        url: `https://api.portone.io/payments/${paymentData.paymentNum}/cancel`, // 확인
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        data: {
          reason: "취소요청",
          cancel_request_amount: cancelAmount,
        },
      };
      const { data } = await axios.request(options);
      return data;
    },
    {
      onSuccess: () => {
        modifyOrderStatus.mutateAsync();
        Swal.fire({
          text: "결제가 취소되었습니다.",
          icon: "success",
          timer: 1500,
          confirmButtonColor: "#9d6c4c",
          confirmButtonText: "닫기",
        });
      },
      onError: (error) => console.log(error),
    }
  );

  const modifyOrderStatus = useMutation(
    async () => await instance.put(`/user/payment/${paymentData.paymentNum}`)
  );

  const handlePaymentCancelOnClick = (orderId) => {
    Swal.fire({
      text: "결제를 취소하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "#777777",
      cancelButtonText: "닫기",
      confirmButtonColor: "#9d6c4c",
      confirmButtonText: "주문취소",
    }).then((result) => {
      if (result.isConfirmed) {
        getPaymentNum(orderId);
        accessTokenMutaion
          .mutateAsync()
          .then((response) =>
            portonePaymentCancelMutation
              .mutateAsync(response?.data)
              .catch(() => {})
          );
      }
    });
  };

  //구매목록 삭제 기능
  const deleteBuyInfo = useMutation(
    async (id) => {
      return await instance.delete(`/user/info/${id}`);
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  // 삭제 핸들러
  const handleDelete = (productId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteBuyInfo.mutate(productId);
    }
  };
  const [modalProducts, setModalProducts] = useState(null)

  // 후기
  const handleRepurchase = (products) => {
    setModalProducts(products)
    setOpenModal(true);
  };

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>;

  console.log(userBuyInfo.map((products) => products.orderItems[0]?.product.productId))
  console.log(userBuyInfo)

  return (
    <div css={s.containerStyle}>
      <h2>구매기록</h2>
      <ul>
        {userBuyInfo.map((products) => (
          <li key={products.orderId} css={s.productStyle}>
            <img
              src={products?.orderItems[0]?.product.thumbnailImg}
              alt={products.title}
              css={s.imageStyle}
            />
            <div css={s.textStyle}>
              <h2 css={s.titleStyle}>
                {products?.orderItems[0]?.product.title} 외
                {products.orderItems?.length}개
              </h2>
              <p>수량: {products.quantity}토탈 수량 주세용</p>
              <p css={s.descriptionStyle}>{products.description}</p>
              <p css={s.priceStyle}>
                가격: {products.totalAmount.toLocaleString()}원
              </p>
            </div>
            <div>
              <button
                css={s.buttonStyle1}
                onClick={() => handleDelete(products.productId)}
              >
                <FaTrash />
              </button>
              <button css={s.buttonStyle2} onClick={() => handleRepurchase(products.orderItems[0]?.product)}>
                <FaRegPenToSquare />
              </button>
                <RegisterReviewModal onClose={closeModal} isOpen={openModal} product={modalProducts}/>
                {/* <RegisterReviewModal onClose={closeModal} isOpen={openModal} product={products.orderItems[0]?.product.productId}/> */}
              <button
                css={s.buttonStyle3}
                onClick={() => handlePaymentCancelOnClick(products.orderId)}
              >
                <TbTrashOff />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuyInfo;
