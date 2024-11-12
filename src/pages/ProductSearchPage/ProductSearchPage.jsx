import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import *as s from './style';
import ReactPaginate from 'react-paginate';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { instance } from '../../apis/util/instance';

function ProductSearchPage(props) {

    const navigate = useNavigate();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [selectPage, setSelectPage] = useState(1);

    const limit = 20;
    const page = searchParams.get("page");
    const keyword = searchParams.get("keyword");

    const [ maxPageCount, setMaxPageCount ] = useState(1);
    const [ productTrGroups, setProductTrGroups ] = useState([]);

    const handleOnPageChange = (e) => {
        setSelectPage(e.selected + 1);
        navigate(`/user/products/search?page=${e.selected + 1}&limit=${limit}&keyword=${keyword}`);
    }

    const productsQuery = useQuery(
        ["productsSearch", page, keyword],
        // page: 해당 페이지 불러오고 limit: 20 제한 search: 검색한 데이터 
        async() => await instance.get(`/user/public/product/search?page=${page}&limit=${limit}&keyword=${keyword}`), 
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response)
                setMaxPageCount(
                    response.data.count % limit === 0
                        ? Math.floor(response.data.count / limit)
                        : Math.floor(response.data.count / limit) + 1)

                const products = response.data.products;
 
                const trGroupChildrenCount = 5;

                const rowCount = products.length % trGroupChildrenCount === 0 ? products.length / trGroupChildrenCount : Math.floor(products.length / trGroupChildrenCount) + 1;

                let productTrList = [];
                for(let i = 0; i < rowCount; i++) {
                    let trGroupList = [];
                    for(let j = 0; j < trGroupChildrenCount; j++) {
                        const product = products[j + (i * trGroupChildrenCount)];
                        if(!product) {
                            continue;
                        }
                        trGroupList = [...trGroupList, product];
                    }
                    productTrList = [...productTrList, trGroupList];
                }
                setProductTrGroups(productTrList);
                
            }
        }
    );

    // 상품 총 갯수를 불러오게 하기 위한 함수  
    const productCount = productsQuery.data?.data.count;
    console.log(productTrGroups);

    return (
        <div css={s.layout}>
            <h3>총 {productCount}개의 상품이 검색되었습니다.</h3>
            <div css={s.contentLayout}>
                {
                    productTrGroups?.map((productTrGroup) => (
                        <ul css={s.menuLayout}>
                            {
                                productTrGroup?.map((product) => (
                                    <li>
                                        <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link
                                                    key={product.productId}
                                                    to={`/product/${product.productId}`}>
                                                    <img src={product.thumbnailImg} />
                                                </Link>
                                            </div>
                                            <div css={s.productLayout}>
                                                <p>{product.description}</p>
                                                <h2>{product.title}</h2>
                                                <h2>{product.price.toLocaleString()}원</h2>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
            <div css={s.listBox}>
                <div css={s.pageNumber}>
                    <ReactPaginate
                        breakLabel="..."
                        previousLabel={<><MdNavigateBefore /></>}
                        nextLabel={<><MdNavigateNext /></>}
                        pageCount={maxPageCount}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={5}
                        onPageChange={handleOnPageChange}
                    // activeClassName='active' 
                    // onPageChange={handlePageOnChange}
                    // forcePage={parseInt(page) - 1}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductSearchPage;