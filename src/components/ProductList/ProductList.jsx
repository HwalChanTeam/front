import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';
import { SlBasket } from 'react-icons/sl';
import ShoppingBasketIcon from '../ShoppingBasketIcon/ShoppingBasketIcon';

function ProductList({productList, productPath}) {

    return (
        <>
            {
                productList?.map((product) => (
                    <ul css={s.menuLayout}>
                        {
                            product.map((pro) => (
                                <li>
                                    <div css={s.menuList}>
                                        <div css={s.imgLayout}>
                                            <Link
                                                key={pro.productId}
                                                to={productPath(pro.productId)}>
                                                <img src={pro.thumbnailImg} />
                                            </Link>
                                        </div>
                                        <div css={s.productLayout}>
                                            <p>{pro.description}</p>
                                            <h2>{pro.title}</h2>
                                            <div css={s.footerBox}>
                                                <h2>{pro.price.toLocaleString()}원</h2>
                                                <ShoppingBasketIcon />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
        </>
    );
}

export default ProductList;