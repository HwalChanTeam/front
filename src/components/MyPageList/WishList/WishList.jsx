/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosHeart } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';

const itemProductList = [
    {
        productId: 1,
        img: "",
        title: "상품명1",
        price: 11000
    },
    {
        productId: 2,
        img: "",
        title: "상품명1",
        price: 11000
    },
    {
        productId: 3,
        img: "",
        title: "상품명1",
        price: 11000
    },

];

function WishList(props) {

    const navigate = useNavigate();
    const params = useParams(); // url 수정 하기 ~~~~
    const productId = params.productId;

    const [ productLikeList, setProductLikeList ] = useState([]);

    // 위시리스트 전체조회
    const productWishList = useQuery(
        ["productLikeQuery"],
        async () => {
            await instance.get("/user/product")
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setProductLikeList(response.data);
            }
        }
    );

    // 찜 삭제 기능
    const disProductWishListMutation = useMutation(
        async () => {
            await instance.delete(`/user/product/dislike/${productLikeList.productId}`)
        },
        {
            onSuccess: response => {
                productWishList.refetch();
            }
        }
    )

    // "/product?category=1&/productId=12"

   return (
    <div css={s.wishListContainer}>
        {/* 찜 목록 섹션 */}
        <div css={s.wishListSection}>
            <div css={s.wishListHeader}>
                <h2>찜 목록</h2>
            </div>
            {productLikeList.length === 0 ? (
                <p css={s.emptyCartMessage}>찜목록이 비었습니다.</p>
            ) : (
                <table css={s.tableLayout}>
                    <tbody css={s.menuLayout}>
                        {productLikeList.map((product) => (
                            <tr key={product.productId}>
                                <td>
                                    <div css={s.menuList}>
                                        <div css={s.imgLayout}>
                                            <Link key={product.productId} to="/product/:productId">
                                                <img src={product.img} />
                                            </Link>
                                        </div>
                                        <div css={s.contentLayout}>
                                            <div css={s.productLayout}>
                                                <h2>{product.title}</h2>
                                                <h2>{product.price}</h2>
                                            </div>
                                            <div css={s.icons}>
                                                <Link to="/basket"><SlBasket size="24" /></Link>
                                                <button onClick={() => disProductWishListMutation.mutate(product.productId)} ><IoIosHeart size="26"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    </div>
);

}

export default WishList;