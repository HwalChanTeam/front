/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import { Link, useNavigate } from 'react-router-dom';

function FrozenProductView(props) {
    const navigate = useNavigate();

    const [ productList, setProductList ] = useState([]);

    const productPath = (productId) => `/product/${productId}`;

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <tbody css={s.menuLayout}>
                        {   
                            productList.map((product) => (
                                <tr>
                                    <td>
                                        <div css={s.menuList}>
                                                <div css={s.imgLayout}>
                                                    <Link 
                                                        key={product.id}
                                                        to={productPath(product.productId)}>
                                                            <img src={product.thumbnailImg} />
                                                    </Link>
                                                </div>
                                                <div css={s.productLayout}>
                                                    <h2>{product.title}</h2>
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

export default FrozenProductView;