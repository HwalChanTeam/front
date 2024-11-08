/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from 'react-router';
import *as s from './style';
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { instance } from '../../apis/util/instance';
import { useState } from 'react';

// 상품 당 icon을 띄우기 위한 컴포넌트 / 상품 당 장바구니 클릭 시 장바구니로 이동하게 기능 추가
function ShoppingBasketIcon({product}) {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate(); 

    // 구매수량 상태
    const [productItems, setProductItems] = useState({ buyItem: 1 });

    // 장바구니 추가 mutation
    const basketAddProductMutation = useMutation(
        async (payload) => {
            await instance.post("/user/cart", payload);
        },
        {
            onSuccess : () => {
            if(window.confirm("장바구니에 담았습니다\n장바구니로 이동하시겠습니까?")) {
                navigate("/cart")
            }
            },
            onError: (error) => {
            console.error("오류!!!" + error);
            },
        }
    );

    // 장바구니 추가 헨들러
    const handleBasketOnClick = async (id) => {
        if (!token) {
            if (window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
            navigate("/user/signin");
            }
            return;
        }
        // RequestBody로 넘기기 위한 변수 생성
        const payload = {
            productId: product.productId,
            price: product.price,
            quantity: productItems.buyItem,
        };
        basketAddProductMutation.mutate(payload);
    }

    return (
        <div css={s.layout}>
            <div css={s.iconBox}>
                <a onClick={() => handleBasketOnClick(product.productId)}><SlBasket size="20" style={{cursor: "pointer"}} /></a>
            </div>
        </div>
    );
}

export default ShoppingBasketIcon;