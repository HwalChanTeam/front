/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainMenu from "../../components/MainMenu/MainMenu";
import { useState } from "react";
import { useQuery } from "react-query";
import { instance } from "../../apis/util/instance";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const [newProductList, setNewProductList] = useState([]);

    const [bestProductList, setBestProductList] = useState([]);
    const [respectProductList, setRespectProductList] = useState([]);

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
            return await instance.get("/user/public/???");
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setRespectProductList(response.data);
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
        newProduct(productId);
        navigate(`/product/${productId}`);
    };

    return (
        <>
            <div css={s.layout}>
                <MainMenu />
            </div>
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
                        <div css={s.newProudctLayout}>
                            <div css={s.newProductTitle}>
                                <p>NEW PRODUCT</p>
                                <p>이 달의 신상품</p>
                            </div>
                            <div css={s.newProductContentLayout}>
                                {
                                    // slice를 사용해 신상품이 5개까지 뜨게 설정
                                    newProductList.slice(0, 5).map((newProduct) => (
                                        <div css={s.newProductLayout} key={newProduct?.data?.productId}>
                                            <img
                                                src={newProduct.thumbnailImg}
                                                onClick={() => newImgOnClick(newProduct.productId)}
                                            />
                                            <div>
                                                <p>{newProduct.title}</p>
                                                <p>{newProduct.price.toLocaleString()}원</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div css={s.newProductLink}>
                                <Link to="/user/newproduct"> 신상품 전체 보기 </Link>
                            </div>
                        </div>

                        {/* 베스트 상품top5 */}
                        <div css={s.bestProductLayout}>
                            <div css={s.bestProductTitle}>
                                <p>BEST PRODUCT</p>
                                <p>베스트 상품 TOP5</p>
                            </div>
                            <div css={s.bestProductContentLayout}>
                                {bestProductList.slice(0, 5).map((bestProduct) => (
                                    <div css={s.bestImgLayout} key={bestProduct.productId}>
                                        <img
                                            src={bestProduct.thumbnailImg}
                                            onClick={() => bestImgOnClick(bestProduct.productId)}
                                        />
                                        <div>
                                            <p>{bestProduct.title}</p>
                                            <p>{bestProduct.price.toLocaleString()}원</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div css={s.bestProductLink}>
                                <Link to="/user/best"> 인기상품 전체 보기 </Link>
                            </div>
                        </div>

                        {/* MD 추천상품(5개) */}
                        <div css={s.MDProductLayout}>
                            <div css={s.MDProductTitle}>
                                <p>MD 추천상품</p>
                            </div>
                            <div css={s.MDProductContentLayout}>
                                {respectProductList.slice(0, 5).map((respectProduct) => (
                                    <div
                                        css={s.MDProductImgLayout}
                                        key={respectProduct.productId}
                                    >
                                        <img src={respectProduct.thumbnailImg} />
                                        <div>
                                            <p>{respectProduct.title}</p>
                                            <p>{respectProduct.price.toLocaleString()}원</p>
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
