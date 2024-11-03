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
    const [productList, setProductList] = useState([]);
    const id = searchParams.get("categoryId");
    const [pageCount, setPageCount] = useState(1);
    const limit = 20;
    // const [search, setSearch] = useState({
    //     page: pageCount,
    //     title: "",
    //     limit: 20,
    //     categoryId: categoryId.categoryId,
    // })

    // 카테고리 조회 query
    const category = useQuery(
        ["category", id, pageCount],
        async () => {
            return await instance.get(`/user/public/product/category?id=${id}&page=${pageCount}&limit=${limit}`); // 추후 수정 예정 
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,   
            onSuccess: response => {
                // 임시로 productList 사용 추후에 수정예정 ( 상태를 뭐로 할지 )
                const responseData = response?.data?.products // td의 배열 길이
                let newProducts = responseData.length
                console.log(response.data);
                let result = []
                // 배열을 5개씩으로 분류 하도록 하고 결과값이 소수가 나올경우 정수로 변환시켜주기 위해 floor 사용함  
                // productList % 5를 했을 때 나머지가 0이면 그대로 몫울 1로 두고 아니면 그 몫에 1을 더해라 
                let num =  Math.floor(newProducts % 5 === 0 ?  newProducts / 5 : (newProducts / 5) + 1)  // 나머지 존재, 2까지 반복 / num = 2
                for(let i = 0; i < num; i++) {
                    let newProductArray = []
                    // 1. j < 2 - 1 === 0 
                    for(let j = 0; j < (num - 1 === i ? (newProducts % 5 === 0 ? 5 : newProducts % 5) : 5); j++ ) {
                        newProductArray[j] = responseData[j + (i * 5)]
                    }
                    result[i] = newProductArray
                }
                setProductList(result)
                // page 수  
                setPageCount(
                    response.data.count % limit === 0
                        ? response.data.count / limit
                        : Math.floor(response.data.count / limit) + 1)
            }
                
        }
    );

    const handleOnPageChange = (e) => {
        navigate(`/user/category?categoryId=${id}&page=${e.selected + 1}&limit=${limit}`); 
    }

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                {
                    productList?.map((product) => (
                        <tr css={s.menuLayout}>
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