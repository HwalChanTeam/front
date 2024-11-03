/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useLocation, useNavigate } from "react-router";
import ReactPaginate from "react-paginate";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { instance } from "../../../apis/util/instance";

// 검색 결과 
function UserSearch({ searchQuery }) {
    const location = useLocation();
    const navigate = useNavigate();
    const productPath = (productId) => `/product/${productId}`;

    const [ searchParam, setSearchParam ] = useSearchParams(); // 검색 param 상태

    const [pageCount, setPageCount] = useState(1); 

    // 검색 상태
    // const [mainSearchProduct, setMainSearchProduct] = useState(searchParam.get("search") ?? "");

    // 상품데이터 제한 수
    const limit = 20;

    // 검색 query
    const productSearchList = useQuery(
        ["mainSearch", searchQuery, pageCount],
        // page: 해당 페이지 불러오고 limit: 20 제한 search: 검색한 데이터 
        async() => await instance.get(`/user/public/product/search?page=${pageCount}&limit=${limit}&search=${searchQuery}`), 
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setPageCount(
                    response.data.count % limit === 0
                        ? response.data.count / limit
                        : Math.floor(response.data.count / limit) + 1)
            }
        }
    );
    
    console.log(productSearchList?.data)
    //console.log(productSearchList?.data?.data);
    
    const handleOnPageChange = (e) => {
        navigate(`/user/search?&page=${e.selected + 1}&limit=${limit}`); 
    }

    const productList = productSearchList?.data?.data?.products || [];
    console.log(productList)

    return (
        <div css={s.layout}>
            {
                location.pathname.startsWith("/user/search") ? (
                <>
                    <div css={s.contentLayout}>
                        {
                            productList?.map((product) => (
                                <tr key={product.productId} css={s.menuLayout}>
                                    {
                                        product.map((pro) => ( 
                                            <td>
                                                <div css={s.menuList}>
                                                    <div css={s.imgLayout}>
                                                        <Link
                                                            key={pro.id}
                                                            to={productPath(pro.productId)}>
                                                            <img src={pro.thumbnailImg} />
                                                        </Link>
                                                    </div>
                                                    <div css={s.productLayout}>
                                                        <p>{pro.description}</p>
                                                        <h2>{pro.title}</h2>
                                                        <h2>{pro.price}</h2>
                                                    </div>
                                                </div>
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </div>
                    <div css={s.listBox}>
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
                </> 
                ) : (
                    <></>
                )
            }
        </div>
    );
}

export default UserSearch;