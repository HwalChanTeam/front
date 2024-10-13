/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom';
import *as s from './style';

function CategoryView(props) {

    const navigate = useNavigate();


    return (
        <div css={s.layout}>
            <div css={s.titleLayout}>
                <h2>카테고리</h2>
            </div>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>냉동식품</h2>
                    </div>

                    <tbody css={s.menuLayout}>
                        <tr>
                            <td>
                                <div css={s.menuList}>
                                    <div css={s.imgLayout}>
                                        <Link to={"/product"}>
                                            <img src="https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg" />
                                        </Link>
                                    </div>
                                    <div css={s.productLayout}>
                                        <h2>부대찌개</h2>
                                        <h2>11,000</h2>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div css={s.menuList}>
                                    <div css={s.imgLayout}>
                                        <Link to={"/product"}><img src="" /></Link>
                                    </div>
                                    <div css={s.productLayout}>
                                        <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                        <h2>11,000</h2>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div css={s.menuList}>
                                    <div css={s.imgLayout}>
                                        <Link to={"/product"}><img src="" /></Link>
                                    </div>
                                    <div css={s.productLayout}>
                                        <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                        <h2>11,000</h2>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div css={s.menuList}>
                                    <div css={s.imgLayout}>
                                        <Link to={"/product"}><img src="" /></Link>
                                    </div>
                                    <div css={s.productLayout}>
                                        <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                        <h2>11,000</h2>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div css={s.menuList}>
                                    <div css={s.imgLayout}>
                                        <Link to="/product">
                                            <img src="" />
                                        </Link>
                                    </div>
                                    <div css={s.productLayout}>
                                        <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                        <h2>11,000</h2>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>

                {/* 냉장식품 */}
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>냉장식품</h2>
                    </div>

                    <tbody css={s.menuLayout}>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div css={s.menuList}>
                                <div css={s.imgLayout}>
                                    <img src="" alt="" />
                                </div>
                                <div css={s.productLayout}>
                                    <h2>상품이름어르이ㅇㄹㅇㄴㄹㅇㄴ</h2>
                                    <h2>11,000</h2>
                                </div>
                            </div>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoryView;