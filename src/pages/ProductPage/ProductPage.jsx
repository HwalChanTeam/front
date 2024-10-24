/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainMenu from '../../components/MainMenu/MainMenu';
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import InformationView from "../../components/Product/InformationView/InformationView";
import BuyReview from "../../components/Product/BuyReview/BuyReview";
import InquiryView from "../../components/Product/InquiryView/InquiryView";
import DeliveryView from "../../components/Product/Delivery/DeliveryView";
import { basketAddProductApi, buyProductApi, productLikeApi } from "../../apis/productApi";
import { IoMdHeartEmpty, IoIosHeart } from "react-icons/io";




function ProductPage() {
    

    return (
        <div css={s.layout}>
            <MainMenu />
            <div css={s.productLayout}>
                <div css={s.imgLayout}>
                    <img />
                </div>
                <div css={s.productContent}>
                    <div css={s.titleLayout}>
                        <h2></h2>
                        <p></p>
                    </div>
                    <div css={s.price}>
                        <p>원</p>
                    </div>
                    <div css={s.contentBox}>
                        <div css={s.contury}>
                            <p>원산지: </p>
                            <p>배송비: 3,000 원</p>
                        </div>
                        <div css={s.producttitleBox}>
                            <p>상품명: </p>
                            <p>
                                구매수량: 
                                    <span>
                                        <button>-</button>
                                        <button>+</button>
                                    </span>
                            </p> 
                        </div>
                    </div>
                    <div css={s.buyProduct}>
                        <p>
                            총 원
                            <span>
                                <button>구매하기</button>
                                <IoMdHeartEmpty size="40" style={{cursor:"pointer"}} />
                                <FiShoppingCart size="40"  style={{cursor:"pointer"}}/>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* 상품 상세설명란 */}
            <div css={s.menuLayout}>
                <div css={s.menuBox}>
                   
                            <Link>
                                <span></span>
                            </Link>
                    
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