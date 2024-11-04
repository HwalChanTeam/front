/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainMenu from "../../components/MainMenu/MainMenu";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import InformationView from "../../components/Product/InformationView/InformationView";
import BuyReview from "../../components/Product/BuyReview/BuyReview";
import InquiryView from "../../components/Product/InquiryView/InquiryView";
import DeliveryView from "../../components/Product/Delivery/DeliveryView";
import { productLikeApi } from "../../apis/productApi";
import { IoMdHeartEmpty, IoIosHeart } from "react-icons/io";
import { instance } from "../../apis/util/instance";
import { useMutation, useQuery } from "react-query";
import { productOrderAtom } from "../../apis/util/atom";
import { useRecoilState } from "recoil";

    const selectProductMenus = [
    {
        selectedId: 1,
        title: "상세정보",
        path: "/product/:productId",
    },
    {
        selectedId: 2,
        title: "구매후기",
        path: "/product/:productId/review",
    },
    {
        selectedId: 3,
        title: "상품문의",
        path: "/product/:productId/inquiry",
    },
    {
        selectedId: 4,
        title: "배송",
        path: "/product/:productId/delivery",
    },
    ];

function ProductPage() {
    const token = localStorage.getItem("accessToken");
    const { productId } = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const [selectedProduct, setSelectedProduct] =
    useRecoilState(productOrderAtom); // atom 사용

            // 페이지가 마운트될 때 스크롤을 맨 위로 이동
            useEffect(() => {
                window.scrollTo(0, 0);
            }, []);

    const [product, setProduct] = useState({
        productId,
        thumbnailImg: "",
        title: "",
        description: "",
        origin: "",
        price: 0,
        category: "",
    });

    // 상품 조회
    const { data, refetch } = useQuery(
        ["getProduct", productId],
        async () => {
        return await instance.get("/user/public/product/detail", {
            params: { id: productId },
        });
        },
        {
        onSuccess: (response) => {
            setProduct(response.data?.product);
        },
        }
    );

    // 구매수량 상태
    const [productItems, setProductItems] = useState({ buyItem: 1 });

    // 구매수량 숫자 증가 감소
    const handlebuyNumberChange = (delta) => {
    setProductItems((prevItem) => ({
        ...prevItem,
        buyItem: Math.max(1, prevItem.buyItem + delta),
    }));
    };

    const basketAddProductMutation = useMutation(
        async (payload) => {
            await instance.post("/user/cart", payload);
        },
        {
            onSuccess : () => {
            if(window.confirm("장바구니에 담았습니다\n장바구니로 이동하시겠습니까?")) {
                navigate("/cart")
            }
            },
            onError: (error) => {
            console.error("오류!!!" + error);
            },
        }
    );

    // 장바구니 버튼
    const basketAddProductButton = async () => {
        if (!token) {
            if (window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
            navigate("/user/signin");
            }
            return;
        }
        const payload = {
            productId: productId,
            price: product.price,
            quantity: productItems.buyItem,
        };
        basketAddProductMutation.mutate(payload);
    };

    // 구매하기 버튼
    const handleBuyButton = async () => {
        if (!token) {
            if (window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
            navigate("/user/signin");
            }
            return;
        }
        setSelectedProduct({productId, quantity : productItems.buyItem})
        navigate("/order")
    };

    // 찜버튼 mutation
    const productLikeMutation = useMutation(
        async () => {
            return await instance.post(`/user/product/like/${product.productId}`);
        },
        {
            onError: (error) => {
            console.log(error);
            },
        }
    );

    // 찜 버튼
    const handleWishListButton = async () => {
        if (!token) {
            if (window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
                navigate("/user/signin");
            }
            return;
        } else {
            productLikeMutation.mutate();
            alert("찜에 추가되었습니다.");
        }
    };

    // 구매수량*가격 함수
    const calculateTotalPrice = (product) => {
        return product?.price * productItems.buyItem;
    };

    // 총 상품금액, 총합계 계산 함수
    const calculateTotals = () => {
        const totalProductAmount = calculateTotalPrice(product);
        const deliveryFee = totalProductAmount >= 30000 ? 0 : 3000;
        const totalAmount = totalProductAmount + deliveryFee;

        return { totalProductAmount, totalAmount, deliveryFee };
    };

    const { totalProductAmount, totalAmount, deliveryFee } = calculateTotals();

    return (
        <div css={s.layout}>
            <div css={s.productLayout}>
                <div css={s.imgLayout}>
                    <img src={product?.thumbnailImg} />
                </div>
                <div css={s.productContent}>
                    <div css={s.titleLayout}>
                        <h2>{product?.title}</h2>
                        <p>{product?.description}</p>
                    </div>
                    <div css={s.price}>
                        <p>{product?.price.toLocaleString()} 원</p>
                    </div>
                    <div css={s.contentBox}>
                        <div css={s.contury}>
                            <p>원산지: {product?.origin}</p>
                            <p>{deliveryFee.toLocaleString()}원</p>
                        </div>
                        <div css={s.producttitleBox}>
                            <p>상품명: {product?.title}</p>
                            <p>
                            구매수량:
                                <span>
                                    <button onClick={() => handlebuyNumberChange(-1)}>-</button>
                                    {productItems.buyItem}
                                    <button onClick={() => handlebuyNumberChange(1)}>+</button>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div css={s.buyProduct}>
                        <p>
                            총 {totalProductAmount.toLocaleString()} 원
                            <span>
                            <button onClick={handleBuyButton}>구매하기</button>
                            <IoMdHeartEmpty
                                onClick={handleWishListButton}
                                size="40"
                                style={{ cursor: "pointer" }}
                            />
                            <FiShoppingCart
                                onClick={basketAddProductButton}
                                size="40"
                                style={{ cursor: "pointer" }}
                            />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* 상품 상세설명란 */}
            <div css={s.menuLayout}>
                <div css={s.menuBox}>
                {selectProductMenus.map((menu) => (
                    <Link
                    key={menu.selectedId}
                    to={menu.path.replace(":productId", productId)} // :id를 id로 대체
                    css={s.selectProductMenu(
                        pathname === menu.path.replace(":productId", productId)
                    )}
                    >
                    <span>{menu.title}</span>
                    </Link>
                ))}
                </div>
                <div css={s.productInfor}>
                <Routes>
                    <Route path="/" element={<InformationView product={product} />} />
                    <Route path="/review" element={<BuyReview product={product} />} />
                    <Route path="/inquiry" element={<InquiryView product={product} />} />
                    <Route path="/delivery" element={<DeliveryView product={product} />} />
                </Routes>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
