import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';

function ProductList({productList, productPath}) {

    return (
        <>
            {
                productList?.map((product) => (
                    <tr css={s.menuLayout}>
                        {
                            product.map((pro) => (
                                <td>
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
                                            <h2>{pro.price}</h2>
                                        </div>
                                    </div>
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </>
    );
}

export default ProductList;