/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import *as s from './style';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getPopularityProudctApi } from '../../../apis/productApi';
import { instance } from '../../../apis/util/instance';

const products = [
    {
        productId: 1,
        img: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
        name: "부대찌개",
        price: "11,000",
    },
    {
        productId: 2,
        img: "",
        name: "bbbb",
        price: "11,000"
    },
    {
        productId: 3,
        img: "",
        name: "cccc",
        price: "11,000"
    },
    {
        productId: 4,
        img: "",
        name: "dddd",
        price: "11,000"
    },
    {
        productId: 5,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        productId: 6,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        productId: 7,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        productId: 8,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        productId: 9,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        productId: 10,
        img: "",
        name: "ffff",
        price: "11,000"
    },
];

function PopularityProduct(props) {

    // 해당 상품 클릭시 해당하는 상품페이지로 넘어가는
    const productPath = (productId) => `/product/${productId}`; // 경로 수정 필요

    const [ bestProductList, setBestProductList ] = useState([]);

    // 전체 불러오는 쿼리
    const getBestProduct = useQuery(
        ["bestProducts"],
        async () => {
            return await instance.get("/user/public/best");
        },
        {
            onSuccess: (response) => 
                setBestProductList(response.data),
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
            <div css={s.subLayout}>
                <h2>BEST(TOP10)</h2>
            </div>
                <table css={s.tableLayout}>
                    <tbody css={s.menuLayout}>
                    {   
                        products.map((product, index) => (
                            <tr key={product.productId}>
                                <td>
                                    <div css={s.numberLayout}>
                                        <h1>{index + 1}</h1>
                                    </div>
                                    <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link 
                                                    to={productPath(product.productId)}>
                                                        <img src={product.img} />
                                                </Link>
                                            </div>
                                            <div css={s.productLayout}>
                                                <h2>{product.name}</h2>
                                                <h2>{product.price}</h2>
                                            </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PopularityProduct;