/** @jsxImportSource @emotion/react */
import { useNavigate, useParams } from 'react-router';
import *as s from './style';
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { instance } from '../../apis/util/instance';
import { useState } from 'react';

// 상품 당 icon을 띄우기 위한 컴포넌트 / 상품 당 장바구니 클릭 시 장바구니로 이동하게 기능 추가
function ShoppingBasketIcon(props) {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다
    const { productId } = useParams();

    const [product, setProduct] = useState({
        productId,
        thumbnailImg: "",
        title: "",
        description: "",
        origin: "",
        price: 0,
        category: "",
    });

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

    const handleBasketOnClick = () => {
        if (!token) {
            if (window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
            navigate("/user/signin");
            }
            return;
        }
        const payload = {
            productId: productId,
            price: product.price,
        };
        basketAddProductMutation.mutate(payload);
    }

    return (
        <>
            {
                !token ?
                <div css={s.layout}>
                    <div css={s.iconBox}>
                        <a onClick={handleBasketOnClick}><SlBasket size="20" /></a>
                    </div>
                </div>
                :
                <div css={s.layout}>
                    <div css={s.iconBox}>
                        <a onClick={handleBasketOnClick}><SlBasket size="20" /></a>
                    </div>
                </div>
            }
        </>
    );
}

export default ShoppingBasketIcon;