/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosHeart } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useMutation, useQuery } from 'react-query';
import { getProductLikeApi } from '../../../apis/productApi';
import { instance } from '../../../apis/util/instance';

function WishList(props) {

   return (
    <div css={s.wishListContainer}>
        {/* 찜 목록 섹션 */}
        <div css={s.wishListSection}>
            <div css={s.wishListHeader}>
                <h2>찜 목록</h2>
            </div>
                <p css={s.emptyCartMessage}>찜목록이 비었습니다.</p>
                <table css={s.tableLayout}>
                    <tbody css={s.menuLayout}>
                            <tr>
                                <td>
                                    <div css={s.menuList}>
                                        <div css={s.imgLayout}>
                                            <Link to="">
                                                <img src="" />
                                            </Link>
                                        </div>
                                        <div css={s.contentLayout}>
                                            <div css={s.productLayout}>
                                                <h2>aa</h2> {/* 'name'을 'title'로 수정 */}
                                                <h2>45</h2>
                                            </div>
                                            <div css={s.icons}>
                                                <Link ><SlBasket size="24" /></Link>
                                                <button ><IoIosHeart size="26"/></button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                    </tbody>
                </table>
        </div>
    </div>
);

}

export default WishList;