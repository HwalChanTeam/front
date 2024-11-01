import { Route, Routes, useNavigate, useParams } from "react-router";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { instance } from "../../apis/util/instance";
import ReactPaginate from "react-paginate";

function Category(props) {
    const navigate = useNavigate();
    const productPath = (productId) => `/product/${productId}`; // 해당 상품의 상품페이지로 이동할려고 만든 productId
    const [searchParams, setSearchParams] = useSearchParams(); // 주소:포트/페이지URL?key=value(쿼리스트링, 파람스)
    // const categoryId = useParams();
    const [productList, setProductList] = useState();
    const categoryId = searchParams.get("categoryId");
    const [pageCount, setPageCount] = useState(1);
    const limit = 20;
    // const [search, setSearch] = useState({
    //     page: pageCount,
    //     title: "",
    //     limit: 20,
    //     categoryId: categoryId.categoryId,
    // })
    // 냉장 조회 query
    const category = useQuery(

        ["category", categoryId, pageCount],
        async () => {
            return await instance.get(`/user/public/product/category?categoryId=${categoryId}&page=${pageCount}&limit=${limit}`); // 추후 수정 예정 
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => setPageCount(
                response.data.count % limit === 0
                    ? response.data.count / limit
                    : Math.floor(response.data.count / limit) + 1)
        }
    );

    const handleOnPageChange = (e) => {
        navigate(`/user/category?categoryId=${categoryId}&page=${e.selected + 1}&limit=${limit}`); 
    }

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <tbody css={s.menuLayout}>
                        {
                            category?.data?.data?.products?.map((product) => (
                                <tr>
                                    <td>
                                        <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link
                                                    key={product.id}
                                                    to={productPath(product.productId)}>
                                                    <img src={product.thumbnailImg} />
                                                </Link>
                                            </div>
                                            <div css={s.productLayout}>
                                                <h2>{product.title}</h2>
                                                <h2>{product.price}</h2>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        } */}
                    </tbody>
                </table>
            </div>
            <div css={s.pageNumber}>
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<><MdNavigateBefore /></>}
                    nextLabel={<><MdNavigateNext /></>}
                    pageCount={5}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handleOnPageChange}
                // activeClassName='active' 
                // onPageChange={handlePageOnChange}
                // forcePage={parseInt(searchParams.get("page")) - 1}
                />
            </div>
        </div>
    );

}

export default Category;