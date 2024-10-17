/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom';
import *as s from './style';
import { useState } from 'react';

const products = [
    {
        id: 1,
        img: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
        name: "부대찌개",
        price: "11,000",
    },
    {
        id: 2,
        img: "",
        name: "bbbb",
        price: "11,000"
    },
    {
        id: 3,
        img: "",
        name: "cccc",
        price: "11,000"
    },
    {
        id: 4,
        img: "",
        name: "dddd",
        price: "11,000"
    },
];

function CategoryView() {

    const navigate = useNavigate();

    const [ productList, setProductList ] = useState({
        productId: 0,
        img: "",
        title: "",
        price: "",

    });

    const productPath = (id) => `/product/${id}/information`;

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>냉동식품</h2>
                    </div>

                    <tbody css={s.menuLayout}>
                        {   
                            products.map((product) => (
                                <tr>
                                    <td>
                                        <div css={s.menuList}>
                                                <div css={s.imgLayout}>
                                                    <Link 
                                                        key={product.id}
                                                        to={productPath(product.id)}>
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

                {/* 냉장식품 */}
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>냉장식품</h2>
                    </div>

                    <tbody css={s.menuLayout}>
                        <tr>
                            <td>
                                <div css={s.menuList}>
                                    <div css={s.imgLayout}>
                                        <Link to="/product">
                                            <img src="" />
                                        </Link>
                                    </div>
                                    <div css={s.productLayout}>
                                        <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                        <h2>11,000</h2>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div css={s.menuList}>
                                    <div css={s.imgLayout}>
                                        <Link to="/product">
                                            <img src="" />
                                        </Link>
                                    </div>
                                    <div css={s.productLayout}>
                                        <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                        <h2>11,000</h2>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoryView;