/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainMenu from "../../components/MainMenu/MainMenu";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { instance } from "../../apis/util/instance";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "../../components/ShoppingBasketIcon/ShoppingBasketIcon";

function MainPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const [newProductList, setNewProductList] = useState([]);

    const [bestProductList, setBestProductList] = useState([]);
    const [respectProductList, setRespectProductList] = useState([]);

                // 페이지가 마운트될 때 스크롤을 맨 위로 이동
                useEffect(() => {
                    window.scrollTo(0, 0);
                }, []);

    // 신상품 가져오는 쿼리
    const newProduct = useQuery(
        ["newProducts"],
        async () => {
            return await instance.get("/user/public/new");
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setNewProductList(response.data);
            },
        }
    );

    // 인기상품 가져오는 쿼리
    const bestProduct = useQuery(
        ["bestProduct"],
        async () => {
            return await instance.get("/user/public/best");
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                console.log(response)
                setBestProductList(response.data);
            },
        }
    );

    // MD추천 상품 ???
    const respectProduct = useQuery(
        ["respectProduct"],
        async () => {
            return await instance.get("/user/public/recom");
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setRespectProductList(response.data);
                console.log(response.data)
            },
        }
    );

    const newImgOnClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const bestImgOnClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const respectImgOnClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <>
            {
                // user로 시작한 페이지 일때 메인페이지 x
                location.pathname.startsWith("/user") ? (
                    <></>
                ) : (
                    <>
                        <div css={s.titleLayout}>
                            <p>쿡 배송</p>
                            <p>빠르게 배송해드립니다!</p>
                        </div>

                        {/* 이달의 상품 */}
                        <div css={s.productLayout}>
                            <div css={s.productTitle}>
                                <p>NEW PRODUCT</p>
                                <p>이 달의 신상품</p>
                            </div>
                            <div css={s.productContentLayout}>
                                {
                                    // slice를 사용해 신상품이 5개까지 뜨게 설정
                                    newProductList.slice(0, 5).map((newProduct) => (
                                        <div css={s.newProductLayout} key={newProduct?.data?.productId}>
                                            <img
                                                src={newProduct.thumbnailImg}
                                                onClick={() => newImgOnClick(newProduct.productId)}
                                            />
                                            <div>
                                                <p>{newProduct.description}</p>
                                                <p>{newProduct.title}</p>
                                                <p>{newProduct.price.toLocaleString()}원</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div css={s.ProductLink}>
                                <Link to="/user/newproduct"> 신상품 전체 보기 </Link>
                            </div>
                        </div>

                        {/* 베스트 상품top5 */}
                        <div css={s.productLayout}>
                            <div css={s.productTitle}>
                                <p>BEST PRODUCT</p>
                                <p>베스트 상품 TOP5</p>
                            </div>
                            <div css={s.productContentLayout}>
                                {bestProductList.slice(0, 5).map((bestProduct) => (
                                    <div css={s.productImgLayout} key={bestProduct.productId}>
                                        <img
                                            src={bestProduct.thumbnailImg}
                                            onClick={() => bestImgOnClick(bestProduct.productId)}
                                        />
                                        <div>
                                            <p>{bestProduct.description}</p>
                                            <p>{bestProduct.title}</p>
                                            <div css={s.footerBox}>
                                                <p>{bestProduct.price.toLocaleString()}원</p>
                                                <ShoppingBasketIcon product={bestProduct}/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div css={s.ProductLink}>
                                <Link to="/user/best"> 인기상품 전체 보기 </Link>
                            </div>
                        </div>

                        {/* MD 추천상품(5개) */}
                        <div css={s.productLayout}>
                            <div css={s.productTitle}>
                                <p>MD 추천상품</p>
                            </div>
                            <div css={s.productContentLayout}>
                                {respectProductList.slice(0, 5).map((respectProduct) => (
                                    <div
                                        css={s.productImgLayout}
                                        key={respectProduct.productId}
                                    >
                                        <img src={respectProduct.thumbnailImg} onClick={() => respectImgOnClick(respectProduct.productId)}/>
                                        <div>
                                            <p>{respectProduct.description}</p>
                                            <p>{respectProduct.title}</p>
                                            <div css={s.footerBox}>
                                                <p>{respectProduct.price.toLocaleString()}원</p>
                                                <ShoppingBasketIcon product={respectProduct}/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default MainPage;
