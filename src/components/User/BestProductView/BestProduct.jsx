/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import *as s from './style';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';

function BestProduct(props) {

    // 해당 상품 클릭시 해당하는 상품페이지로 넘어가는
    const productPath = (productId) => `/product/${productId}`; // 경로 수정 필요

    const [bestProductList, setBestProductList] = useState([]);

    // 전체 불러오는 쿼리
    const allBestProduct = useQuery(
        "bestProducts",
        async () => {
            return await instance.get("/user/public/best");
        },
        {
            onSuccess: (response) => {
                // 한 tr 의 5개씩 보이게 하기 위해 씀 
                const responseData = response.data // td의 배열 길이 ( 10개 )
                let bestProducts = responseData.length
                console.log(response.data)
                let result = []
                // 배열을 5개씩으로 분류 하도록 하고 결과값이 소수가 나올경우 정수로 변환시켜주기 위해 floor 사용함  
                // productList % 5를 했을 때 나머지가 0이면 그대로 몫울 1로 두고 아니면 그 몫에 1을 더해라 
                let num =  Math.floor(bestProducts % 5 === 0 ?  bestProducts / 5 : (bestProducts / 5) + 1)  // 나머지 존재, 2까지 반복 / num = 2
                for(let i = 0; i < num; i++) {
                    let bestProductArray = []
                    // 1. j < 2 - 1 === 0 
                    for(let j = 0; j < (num - 1 === i ? (bestProducts % 5 === 0 ? 5 : bestProducts % 5) : 5); j++ ) {
                        bestProductArray[j] = responseData[j + (i * 5)]
                    }
                    result[i] = bestProductArray
                }
                setBestProductList(result)
                // console.log(result)
            },
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                    {
                        bestProductList.map((product) => (
                            <tr key={product.productId} css={s.menuLayout}>
                                {
                                    product.map((pro) => (
                                        <td>
                                            <div css={s.menuList}>
                                                <div css={s.imgLayout}>
                                                    <Link
                                                        to={productPath(pro.productId)}>
                                                        <img src={pro.thumbnailImg} />
                                                    </Link>
                                                </div>
                                                <div css={s.productLayout}>
                                                    <p>{pro.description}</p>
                                                    <h2>{pro.title}</h2>
                                                    <h2>{pro.price.toLocaleString()}원</h2>
                                                </div>
                                            </div>
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
            </div>
        </div>
    );
}

export default BestProduct;