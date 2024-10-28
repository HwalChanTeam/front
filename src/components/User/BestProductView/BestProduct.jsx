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
                            bestProductList.slice(0, 20).map((product, index) => (
                                <tr key={product.productId}>
                                    <td>
                                        <div css={s.numberLayout}>
                                            <h1>{index + 1}</h1>
                                        </div>
                                        <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link
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

export default BestProduct;