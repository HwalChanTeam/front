import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
import { FaTrash, FaRedo } from 'react-icons/fa';
import { LuShoppingBag } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BuyInfo(props) {

    const navigate = useNavigate();
    // 구매상품 목록 배열로 불러오기
    const [userBuyInfo, setUserBuyInfo] = useState([]);

    //구매목록 조회 기능
    const {data, isError, isLoading, refetch} = useQuery(
        ["getUserBuyInfo"],
        async () => {
            return await instance.get("/user/info");
        },
        {
            onSuccess: (response) => {
                console.log(response.data)
                setUserBuyInfo(response.data);
            }
        }
    )

    //구매목록 삭제 기능
    const deleteBuyInfo = useMutation(
        async (id) => {
            return await instance.delete(`/user/info/${id}`);
        },
        {
            onSuccess: () => {
                refetch();
            }
        }
    )

    // 삭제 핸들러
    const handleDelete = (productId) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            deleteBuyInfo.mutate(productId);
        }
    };

    // 상품페이지로 이동
    const handleRepurchase = (productId) => {
        if(window.confirm("상품 페이지로 이동합니다.")) {
            navigate(`/product/${productId}`);
        }
    };

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>;

    return (
        <div css={s.containerStyle}>
            <h1>구매기록</h1>
            <ul>
                {userBuyInfo.map((product) => (
                    <li key={product.productId} css={s.productStyle}>
                        <img src={product.thumbnailImg} alt={product.title} css={s.imageStyle} />
                        <div css={s.textStyle}>
                            <h2 css={s.titleStyle}>{product.title}</h2>
                            <p css={s.descriptionStyle}>{product.description}</p>
                            <p>수량: {product.quantity}</p>
                            <p css={s.priceStyle}>가격: {product.price}</p>
                        </div>
                        <div>
                            <button css={s.buttonStyle} onClick={() => handleDelete(product.productId)}>
                                <FaTrash />
                            </button>
                            <button css={s.buttonStyle} onClick={() => handleRepurchase(product.productId)}>
                                <LuShoppingBag />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BuyInfo;