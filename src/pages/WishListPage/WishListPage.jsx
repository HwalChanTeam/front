/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoMdHeartEmpty, IoIosHeart } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../apis/util/instance';
import { getProductLikeApi } from '../../apis/productApi';
import { title } from '../ShoppingBasket/style';
import { price } from '../ProductPage/style';

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

function WishListPage(props) {

    const navigate = useNavigate();
    const params = useParams();
    const productId = params.productId;

    const [ productLikeList, setProductLikeList ] = useState({
        userId: 0,
        productId: 0,
        productLikeId: 0,
        img: "",
        title: "",
        price: 0,
    });

    const productWishList = useQuery(
        ["productLikeQuery"],
        async () => {
            return getProductLikeApi();
        },
        {
            refetchOnWindowFocus: false,
            retry: 0
        }

    );

    const disProductWishListMutation = useMutation(
        async () => {
            return await instance.delete(`/product/dislike/${productWishList.data?.data.productId}`);
        },
        {
            onSuccess: response => {
                productWishList.refetch();
                console.log(response);
            }
        }
    )



    const hadleDisLikeOnClick = () => {
        disProductWishListMutation.mutateAsync();

        // const deleteItems = productList.filter(item => item.productId !== productId);
        // setProductList(deleteItems);
    }


    return (
        <div css={s.wishListContainer}>
        {/* 찜 목록 섹션 */}
        <div css={s.wishListSection}>
            <div css={s.wishListHeader}>
                <h2>찜 목록</h2>
            </div>
            { productLikeList.length === 0 ? (
                <p css={s.emptyCartMessage}>찜목록이 비었습니다.</p>
            )
            :
            <table css={s.tableLayout}>
                <tbody css={s.menuLayout}>
                {
                    productLikeList.map((item) => (
                        <tr key={item.productId}>
                            <td>
                                <div css={s.menuList}>
                                        <div css={s.imgLayout}>
                                            <Link 
                                                key={item.productId}
                                                to="">
                                                <img src={item.img} />
                                            </Link>
                                        </div>
                                        <div css={s.contentLayout}>
                                            <div css={s.productLayout}>
                                                <h2>{item.name}</h2>
                                                <h2>{item.price}</h2>
                                            </div>
                                            <div css={s.icons}>
                                                <Link to="/basket"><SlBasket size="24" /></Link>
                                                <button onClick={() => hadleDisLikeOnClick(item.productId)} ><IoIosHeart size="26"/></button>
                                            </div>
                                        </div>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

        }
        </div>
    </div>
    );
}

export default WishListPage;