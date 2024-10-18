/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty, IoIosHeart } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useQuery } from 'react-query';
import { instance } from '../../apis/util/instance';

const tempItemList = [
    {
    productId: 1,
    name: "상품명1",
    description: "상품설명 이것은 상품설명입니다.",
    image: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
    price: 10000,
    },
    {
    productId: 2,
    name: "상품명2",
    description: "상품설명 이것은 상품설명입니다.",
    image: "",
    price: 10000,
    },
    {
    productId: 3,
    name: "상품명3",
    description: "상품설명 이것은 상품설명입니다.",
    image: "",
    price: 10000,
    },
    {
    productId: 4,
    name: "상품명3",
    description: "상품설명 이것은 상품설명입니다.",
    image: "",
    price: 10000,
    },
    {
    productId: 5,
    name: "상품명3",
    description: "상품설명 이것은 상품설명입니다.",
    image: "",
    price: 10000,
    },
    {
    productId: 6,
    name: "상품명3",
    description: "상품설명 이것은 상품설명입니다.",
    image: "",
    price: 10000,
    },
    {
    productId: 7,
    name: "상품명3",
    description: "상품설명 이것은 상품설명입니다.",
    image: "",
    price: 10000,
    },
    {
    productId: 8,
    name: "상품명3",
    description: "상품설명 이것은 상품설명입니다.",
    image: "",
    price: 10000,
    },
    {
    productId: 9,
    name: "상품명3",
    description: "상품설명 이것은 상품설명입니다.",
    image: "",
    price: 10000,
    },
    {
    productId: 10,
    name: "상품명3",
    description: "상품설명 이것은 상품설명입니다.",
    image: "",
    price: 10000,
    },
];

function WishListPage(props) {

    const navigate = useNavigate();

    const [ productList, setProductList ] = useState(
        tempItemList.map((tempItemList) => 
            ({ ...tempItemList })
        )
    );

    const productLike = useQuery(
        ["productLikeQuery"],
        async (productId) => {
            return instance.get(`/proudct/like/${productId}`);
        },
        {
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    const disLikeOnClick = () => {
        
    }

    return (
        <div css={s.wishListContainer}>
        {/* 찜 목록 섹션 */}
        <div css={s.wishListSection}>
            <div css={s.wishListHeader}>
                <h2>찜 목록</h2>
            </div>
            { productList.length === 0 ? (
                <p css={s.emptyCartMessage}>찜목록이 비었습니다.</p>
            )
            :
            <table css={s.tableLayout}>
                <tbody css={s.menuLayout}>
                {
                    productList.map((item) => (
                        <tr>
                            <td>
                                <div css={s.menuList}>
                                        <div css={s.imgLayout}>
                                            <Link 
                                                key={item.productId}
                                                to="">
                                                <img src={item.image} />
                                            </Link>
                                        </div>
                                        <div css={s.contentLayout}>
                                            <div css={s.productLayout}>
                                                <h2>{item.name}</h2>
                                                <h2>{item.price}</h2>
                                            </div>
                                            <div css={s.icons}>
                                                <Link to="/basket"><SlBasket size="24" /></Link>
                                                <button onClick={disLikeOnClick} ><IoIosHeart size="26"/></button>
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