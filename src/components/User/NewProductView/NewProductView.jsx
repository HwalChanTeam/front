/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import *as s from './style';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getNewProductApi } from '../../../apis/productApi';
import { instance } from '../../../apis/util/instance';

function NewProductView(props) {

    // 해당 상품 클릭시 해당하는 상품페이지로 넘어가는
    const productPath = (productId) => `/product/${productId}`;

    const [ newProductList, setNewProductList ] = useState([]);

    const allNewProduct = useQuery(
        "newProducts",
        async () => {
            return await instance.get(`/user/public/new`);
        },
        {
            onSuccess: (response) => setNewProductList(response.data),
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    return (
        <div css={s.layout}>
        <div css={s.contentLayout}>
            <table css={s.tableLayout}>
                <tbody css={s.menuLayout}>
                    {   
                        newProductList.map((product) => (
                            <tr>
                                <td>
                                    <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link 
                                                    key={product.productId}
                                                    to={productPath(product.productId)}>
                                                        <img src={product.thumbnailImg} />
                                                </Link>
                                             </div>
                                            <div css={s.productLayout}>
                                                <h2>{product.title}</h2>
                                                <h2>{product.price.toLocaleString()}원</h2>
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

export default NewProductView;