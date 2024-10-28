/** @jsxImportSource @emotion/react */
import { useQuery } from 'react-query';
import *as s from './style';
import { instance } from '../../../apis/util/instance';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SimplyCook(props) {

    const [simplyCookList, setSimplyCookList] = useState([]);

    const productPath = (productId) => `/product/${productId}`; // 해당 상품의 상품페이지로 이동할려고 만든 productId

    // simplyCook(간편식) 조회 query
    const simplyCook = useQuery(
        ["simplyCooks"],
        async () => {
            return await instance.get("/user/public/category"); // 추후 수정 예정 
        },
        {
            onSuccess: (response) => {
                setSimplyCookList(response.data)
            },
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
                            simplyCookList.map((product) => (
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

export default SimplyCook;