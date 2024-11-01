/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosHeart } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';

function WishList(props) {

    const navigate = useNavigate();

    const [productLikeList, setProductLikeList] = useState([]);

    // 위시리스트 전체조회
    const productWishList = useQuery(
        ["productLikeQuery"],
        async () => {
            return await instance.get("/user/product")
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                console.log(response.data.body.map((item) => item.product))
                setProductLikeList(response.data.body.map((item) => item.product[0])); // 데이터 어떻게 들어오는지 확인!!!!!! response.data.product?? 수졍해야함
            }
        }
    );

    // 찜 삭제 기능
    const disLikeProductWishListMutation = useMutation(
        async (productId) => {
            return await instance.delete(`/user/product/dislike/${productId}`)
        },
        {
            onSuccess: () => {
                productWishList.refetch();
            },
        }
    )

    const handleDisLikeProductOnClick = async (id) => {
        disLikeProductWishListMutation.mutate(id);
    }

    // 장바구니 추가 기능
    const productToBaskect = useMutation(
        async (product) => {
            console.log("아래가 데이터!!!!!")
            console.log(product)
            const CartProduct = {
                productId : product.productId,
                price : product.price,
                quantity : 1 
            }
            console.log(CartProduct)
            return await instance.post("/user/cart/", CartProduct);
        },
        {
            onError: (error) => {
                console.error("오류!!!" + error)
            },
            onSuccess: () => {
                console.log("성공")
            }
        }
    )

    // 장바구니 이동 기능 추가
    const handleProductToBaskect = (product) => {
        productToBaskect.mutate(product);
        if (window.confirm("장바구니에 추가하였습니다.\n장바구니로 이동하시겠습니까?")) {
            navigate("/cart")
        }
    }

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
                                <tr key={product?.productId}>
                                    <td>
                                        <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link key={product.productId} to="/product/:productId">
                                                    <img src={product?.thumbnailImg} />
                                                </Link>
                                            </div>
                                            <div css={s.contentLayout}>
                                                <div css={s.productLayout}>
                                                    <h2>{product?.title}</h2>
                                                    <h2>{product?.price.toLocaleString()}원</h2>
                                                </div>
                                                <div css={s.icons}>
                                                    <button onClick={() => handleProductToBaskect(product)} ><SlBasket size="24" /></button>
                                                    <button onClick={() => handleDisLikeProductOnClick(product.productId)} ><IoIosHeart size="25" /></button>
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