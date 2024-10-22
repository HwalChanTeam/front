/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import *as s from './style';
import { useState } from 'react';

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

    const productPath = (productId) => `/product/${productId}`;

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>BEST(TOP10)</h2>
                    </div>

                    <tbody css={s.menuLayout}>
                    {   
                        products.map((product, index) => (
                            <tr>
                                <td>
                                    <div css={s.numberLayout}>
                                        <h1>{index + 1}</h1>
                                    </div>
                                    <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link 
                                                    key={product.productId}
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