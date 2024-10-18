/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainMenu from '../../components/MainMenu/MainMenu';
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import MainFooter from "../../components/MainFooter/MainFooter";
import InformationView from "../../components/Product/InformationView/InformationView";
import BuyReview from "../../components/Product/BuyReview/BuyReview";
import InquiryView from "../../components/Product/InquiryView/InquiryView";
import DeliveryView from "../../components/Product/Delivery/DeliveryView";
import { basketAddProductApi, buyProductApi } from "../../apis/productApi";
import { IoMdHeartEmpty, IoIosHeart } from "react-icons/io";


const selectProductMenus = [
    {
        selectedId: 1,
        title: "상세정보",
        path: "/product/:productId"

    },
    {
        selectedId: 2,
        title: "구매후기",
        path: "/product/:productId/review"

    },
    {
        selectedId: 3,
        title: "상품문의",
        path: "/product/:productId/inquiry"

    },
    {
        selectedId: 4,
        title: "배송",
        path: "/product/:productId/delivery"

    },
];

const products = [
    {
        productId: 1,
        img: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
        title: "부대찌개",
        description: "aaaa",
        price: 11000,
        origin: "대한민국",
        deliver: "일반배송",
        deliverPrice: "3,000"
    },
  
    {
        productId: 2,
        img: "",
        title: "bbbb",
        description: "aaaa",
        price: 11000,
        origin: "대한민국",
        deliver: "일반배송",
        deliverPrice: "3,000"

    },
    {
        productId: 3,
        img: "",
        title: "cccc",
        description: "aaaa",
        price: 11000,
        origin: "대한민국",
        deliver: "일반배송",
        deliverPrice: "3,000"

    },
    {
        productId: 4,
        img: "",
        title: "dddd",
        description: "aaaa",
        price: 11000,
        origin: "대한민국",
        
    },

];

function ProductPage() {
    const token = localStorage.getItem("accessToken");
    const { productId } = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;



    // const [ product, setProduct ] = useState("");

    const [ product, setProduct ] = useState({
        productId: 0,
        img: "",
        title: "",
        description: "",
        origin: "",
        price: 0,
        category: ""
     });



    useEffect(() => {
        const selectedProduct = products.find(p => p.productId === Number(productId));
        if(selectedProduct) {
            setProduct(selectedProduct);
        } else {
            console.error("오류");
        }
    }, [ productId, products, navigate ]);



    // 구매수량 상태 
    const [ productItems, setProductItems ] = useState({ buyItem: 1 });

    // 구매수량 숫자 증가 감소
    const handlebuyNumberChange = (delta) => { 
        setProductItems((prevItem) => ({
            ...prevItem,
            buyItem: Math.max(1, prevItem.buyItem + delta)
        }));
    }

    // 장바구니 버튼
    const basketAddProductButton = async () => {
        if (!token) {
            if(window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
            navigate("/user/signin");
        }
            return;
          }
            const response = await basketAddProductApi(productId);
        };

    // 구매하기 버튼
    const handleBuyButton = async () => {
        if (!token) {
            if(window.confirm("로그인이 필요합니다.\n로그인 하시겠습니까?")) {
            navigate("/user/signin");
        }
            return;
          }
          const response = await buyProductApi(productId);
    }

    const calculateTotalPrice = (product) => {
        return product.price * productItems.buyItem;
      };

    return (
        <div css={s.layout}>
            <MainMenu />
            <div css={s.productLayout}>
                <div css={s.imgLayout}>
                    <img src={product.img} />
                </div>
                <div css={s.productContent}>
                    <div css={s.titleLayout}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div css={s.price}>
                        <p>{product.price.toLocaleString()} 원</p>
                    </div>
                    <div css={s.contentBox}>
                        <div css={s.contury}>
                            <p>원산지: {product.origin}</p>
                            <p>배송비: 3,000 원</p>
                        </div>
                        <div css={s.producttitleBox}>
                            <p>상품명: {product.title}</p>
                            <p>
                                구매수량: 
                                    <span>
                                        <button onClick={() => handlebuyNumberChange(-1)} >-</button>
                                                {productItems.buyItem}
                                        <button onClick={() => handlebuyNumberChange(1)}>+</button>
                                    </span>
                            </p> 
                        </div>
                    </div>
                    <div css={s.buyProduct}>
                        <p>
                            총 {calculateTotalPrice(product).toLocaleString()} 원
                            <span>
                                <button>구매하기</button>
                                <IoMdHeartEmpty size="40"/>
                                <FiShoppingCart onClick={basketAddProductButton} size="40"  style={{cursor:"pointer"}}/>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* 상품 상세설명란 */}
            <div css={s.menuLayout}>
                <div css={s.menuBox}>
                    {
                        selectProductMenus.map((menu) => (
                            <Link 
                                key={menu.selectedId}
                                to={menu.path.replace(':productId', productId)} // :id를 id로 대체 
                                css={s.selectProductMenu(pathname === menu.path.replace(':productId', productId))}>
                                <span>{menu.title}</span>
                            </Link>
                        ))
                    }
                </div>
                <div css={s.productInfor}>
                    <Routes>
                        <Route path="/" element={<InformationView />} />
                        <Route path="/review" element={<BuyReview />} />
                        <Route path="/inquiry" element={<InquiryView />} />
                        <Route path="/delivery" element={<DeliveryView />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;