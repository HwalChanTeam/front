import React, { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import BankAccount from '../../components/Payments/BankAccount/BankAccount';
import Card from '../../components/Payments/Card/Card';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';
import PaymentMethod from '../../components/Order/PaymentMethod/PaymentMethod';
import ProductInfo from '../../components/Order/ProductInfo/ProductInfo';
import UserInfo from '../../components/Order/UserInfo/UserInfo';
import { productOrderAtom, selectedItemsAtom } from '../../apis/util/atom';
import { instance } from '../../apis/util/instance';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function OrderPage(props) {
    // 다건조회시 사용하는 아톰
    const [selectedProductIds, setSelectedProductIds] = useRecoilState(selectedItemsAtom);
    // 단건조회시 사용하는 아톰
    const [selectedProduct, setSelectedProduct] = useRecoilState(productOrderAtom);
    // 결제 상태
    const [payMentState, setPatMentState] = useState();

    // 페이지 나가면 아톰 삭제
    const resetSelectedProductIds = useResetRecoilState(selectedItemsAtom);
    const resetSelectedProduct = useResetRecoilState(productOrderAtom);

    useEffect(() => {
        return () => {
            resetSelectedProductIds();
            resetSelectedProduct();
        };
    }, [resetSelectedProductIds, resetSelectedProduct]);

    const [productList, setProductList] = useState([]);

    // 단건 조회시 사용하는 쿼리
    const productOrder = useQuery(
        ["productOrder"],
        async () => {
            return await instance.get("/user/order", { params: { id: selectedProduct.productId } });
        },
        {
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
            const cartItemId = selectedProductIds.map((item) => item.cartItemId);
            return await instance.get("/user/cart/order", { params: { id: cartItemId.join(",") } });
        },
        {
            onSuccess: (response) => {
                setProductList(response.data.cartItemList);
            },
            enabled: selectedProductIds.length > 0,
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

    // 구매버튼
    const buyButtonOnClick = async () => {
        await instance.post("/user/buy", selectedProductIds);
    };

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
        } else if (productOrder?.data && selectedProduct) {
            totalProductAmount = productOrder.data.data.price * selectedProduct.quantity;
        }

        deliveryFee = totalProductAmount >= 30000 ? 0 : 3000;
        totalAmount = totalProductAmount + deliveryFee;

        return { totalProductAmount, totalAmount, deliveryFee };
    };

    const { totalProductAmount, totalAmount, deliveryFee } = calculateTotals();

    return (
        <div css={s.layout}>
            <div css={s.mainBox}>
                <UserInfo />
                <ProductInfo
                    selectedProductIds={selectedProductIds}
                    productList={productList}
                    productOrder={productOrder}
                    selectedProduct={selectedProduct}
                    deliveryFee={deliveryFee}
                />
                <PaymentMethod setPatMentState={setPatMentState} />
                {payMentState === 1 ? <BankAccount /> : payMentState === 2 ? <Card /> : null}
            </div>
            <OrderSummary
                totalProductAmount={totalProductAmount}
                deliveryFee={deliveryFee}
                totalAmount={totalAmount}
                buyButtonOnClick={buyButtonOnClick}
            />
        </div>
    );
}

export default OrderPage;
