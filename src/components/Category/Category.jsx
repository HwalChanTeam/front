import { Route, Routes, useNavigate, useParams } from "react-router";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { instance } from "../../apis/util/instance";
import ReactPaginate from "react-paginate";
import MainMenu from "../MainMenu/MainMenu";

function Category(props) {
    const navigate = useNavigate();
    const productPath = (productId) => `/product/${productId}`; // 해당 상품의 상품페이지로 이동할려고 만든 productId
    const categoryId = useParams();
    const [pageCount, setPageCount] = useState(1);
    const [productList, setProductList] = useState();
    const [search, setSearch] = useState({
        page: pageCount,
        title: "",
        limit: 20,
        categoryId: categoryId.categoryId,
    })

    // 냉장 조회 query
    const category = useQuery(
        ["category", search],
        async () => {
            return await instance.get("/user/public/product/category", {params: search}); // 추후 수정 예정 
        },
        {
            onSuccess: (response) => {
                console.log(response.data.products);
                setProductList(response.data.products);
            },
            refetchOnWindowFocus: false,
            retry: 0
        }

    );

    const handleOnPageChange = (e) => {
        setPageCount(e.selected + 1)
    }

    return (

        <div css={s.layout}>
            <div css={s.mainMenuLayout}>
                <MainMenu />
            </div>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <tbody css={s.menuLayout}>
                        {
                            productList?.map((product) => (
                                <tr>
                                    <td>
                                        <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link
                                                    // key={product.id}
                                                    to={productPath(product.productId)}>
                                                    <img src={product.thumbnailImg} />
                                                </Link>
                                            </div>
                                            <div css={s.productLayout}>
                                                <p>{product.description}</p>
                                                <h2>{product.title}</h2>
                                                <h2>{product.price}</h2>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div css={s.pageNumber}>
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<><MdNavigateBefore /></>}
                    nextLabel={<><MdNavigateNext /></>}
                    pageCount={pageCount}
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