/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import { instance } from '../../../apis/util/instance';
import { useQuery } from 'react-query';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

function Soup(props) {
    const [soupList, setSoupList] = useState([]);

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();  // 주소:포트/페이지URL?key=value(쿼리스트링, 파람스)
    const [totalPageCount, setTotalPageCount] = useState(1);
    const limit = 10;

    const productPath = (productId) => `/product/${productId}`; // 해당 상품의 상품페이지로 이동할려고 만든 productId

    // snack(안주) 조회 query
    // const snack = useQuery(
    //     ["snacks"],
    //     async () => {
    //         console.log(pageList)
    //         return await instance.get("/user/public/category", pageList); // 추후 수정 예정 
    //     },
    //     {
    //         onSuccess: (response) => {
    //             console.log(response)
    //             setSoupList(response.data)
    //         },
    //         refetchOnWindowFocus: false,
    //         retry: 0
    //     }
    // );


    const soupListQuery = useQuery(
        ["soupListQuery", searchParams.get("page")],
        async () => {
            return await instance.get(`/user/public/product/category?page=${searchParams.get("page")}&limit=${limit}`);
        },
            {
            retry: 0,
            onSuccess: (response) => {
                console.log(response)
                if (response.products) {
                    setSoupList(response.products);
                    setTotalPageCount(
                        response.totalCount % limit === 0
                            ? response.totalCount / limit
                            : Math.floor(response.totalCount / limit) + 1
                    );
                }
            }
        }
    );

    const handlePageOnChange = (e) => {
        navigate(`/user/public/product/category?page=${e.selected + 1}`);
    }

    return (
        <div css={s.layout}>

            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <tbody css={s.menuLayout}>
                        {
                            soupList.map((product) => (
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
                        }
                    </tbody>
                </table>
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<><IoMdArrowDropleft /></>}
                    nextLabel={<><IoMdArrowDropright /></>}
                    pageCount={totalPageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    activeClassName='active'
                    onPageChange={handlePageOnChange}
                    forcePage={parseInt(searchParams.get("page")) - 1 || 0}
                />
            </div>
        </div>
    );
}

export default Soup;