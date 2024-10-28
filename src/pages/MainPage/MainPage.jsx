/** @jsxImportSource @emotion/react */
import *as s from './style';
import MainMenu from '../../components/MainMenu/MainMenu';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { instance } from '../../apis/util/instance';
import { useNavigate } from 'react-router';

function MainPage() {

    const navigate = useNavigate();

    const [newProductList, setNewProductList] = useState([
        {
            productId: 1,
            image: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
            title: "부대찌개",
            price: 11000,
        },
        {
            productId: 2,
            image: "",
            title: "bbbb",
            price: 11000,
        },
        {
            productId: 3,
            image: "",
            title: "cccc",
            price: 11000,
        },
        {
            productId: 4,
            image: "",
            title: "dddd",
            price: 11000,
        },
        {
            productId: 5,
            image: "",
            title: "dddd",
            price: 11000,
        },
    ]);
    const [bestProductList, setBestProductList] = useState([
        {
            productId: 1,
            image: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
            title: "부대찌개",
            price: 11000,
        },
        {
            productId: 2,
            image: "",
            title: "bbbb",
            price: 11000,
        },
        {
            productId: 3,
            image: "",
            title: "cccc",
            price: 11000,
        },
        {
            productId: 4,
            image: "",
            title: "dddd",
            price: 11000,
        },
        {
            productId: 5,
            image: "",
            title: "ffff",
            price: 11000,
        },
    ]);
    const [respectProductList, setRespectProductList] = useState([
        {
            productId: 1,
            image: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
            title: "부대찌개",
            price: 11000,
        },
        {
            productId: 2,
            image: "",
            title: "bbbb",
            price: 11000
        },
        {
            productId: 3,
            image: "",
            title: "cccc",
            price: 11000,
        },
        {
            productId: 4,
            image: "",
            title: "dddd",
            price: 11000,
        },
        {
            productId: 5,
            image: "",
            title: "ffff",
            price: 11000,
        },
    ]);

    // 신상품 가져오는 쿼리
    const newProduct = useQuery(
        ["newProducts"],
        async () => {
            return await instance.get("/user/public/new");
        },
        {
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setNewProductList(response.data)
            }
        }
    );

    // 인기상품 가져오는 쿼리 ===== 변수명 바뀔 수도 있음(popularity)
    const bestProduct = useQuery(
        ["bestProduct"],
        async () => {
            return await instance.get("/user/public/best");
        },
        {
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setNewProductList(response.data)
            }
        }
    )

    // MD추천 상품 ???
    const respectProduct = useQuery(
        ["respectProduct"],
        async () => {
            return await instance.get("/user/public/???");
        },
        {
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setNewProductList(response.data)
            }
        }
    )

    const imgOnClick = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <>
            <div css={s.layout}>
                <MainMenu />
            </div>
            <div css={s.titleLayout}>
                <p>쿡 배송</p>
                <p>빠르게 배송해드립니다!</p>
            </div>

            {/* 이달의 상품 */}
            <div css={s.newProudctLayout} >
                <div css={s.newProductTitle}>
                    <p>NEW PRODUCT</p>
                    <p>이 달의 신상품</p>
                </div>
                <div css={s.newProductContentLayout}>
                    {newProductList.map((newProduct) => (
                        <div css={s.newProductLayout}
                            key={newProduct.productId}
                        >
                            <img src={newProduct.image} onClick={() => imgOnClick(newProduct.productId)} />
                            <div>
                                <p>{newProduct.title}</p>
                                <p>{newProduct.price.toLocaleString()}원</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 베스트 상품top5 */}
            <div css={s.bestProductLayout} >
                <div css={s.bestProductTitle}>
                    <p>BEST PRODUCT</p>
                    <p>베스트 상품 TOP5</p>
                </div>
                <div css={s.bestProductContentLayout}
                >
                    {bestProductList.map((bestProduct) => (
                        <div css={s.bestImgLayout}
                            key={bestProduct.productId}
                        >
                            <img src={bestProduct.image} onClick={() => imgOnClick(bestProduct.productId)} />
                            <div>
                                <p>{bestProduct.title}</p>
                                <p>{bestProduct.price.toLocaleString()}원</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* MD 추천상품(5개) */}
            <div css={s.MDProductLayout} >
                <div css={s.MDProductTitle}>
                    <p>MD 추천상품</p>
                </div>
                <div css={s.MDProductContentLayout}>
                    {respectProductList.map((respectProduct) => (
                    <div css={s.MDProductImgLayout}
                    key={respectProduct.productId}
                    >
                        <img src={respectProduct.image} />
                        <div>
                            <p>{respectProduct.title}</p>
                            <p>{respectProduct.price.toLocaleString()}원</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default MainPage;