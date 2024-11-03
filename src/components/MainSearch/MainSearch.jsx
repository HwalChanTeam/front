import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "react-query";
import { instance } from "../../apis/util/instance";
import { useSearchParams } from "react-router-dom";

function MainSearch({ onSearch }) {

    const navigate = useNavigate();

    const [ searchParam, setSearchParam ] = useSearchParams(); // 검색 param 상태

    // 검색 상태
    const [mainSearchProduct, setMainSearchProduct] = useState({
        title: "",
    });

    // 상품데이터 제한 수
    const limit = 20;

    // 검색 query
    const mainSearch = useQuery(
        ["mainSearch", ],
        // page: 해당 페이지 불러오고 limit: 20 제한 search: 검색한 데이터 
        async() => await instance.get(`/user/public/product/search?page=${searchParam.get("page")}&limit=${limit}&search=${mainSearchProduct}`), 
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response)
            }
        }
    );

    const handleMainSearchOnChange = (e) => {
        // setMainSearchProduct((mainSearch) => ({
        //     ...mainSearch,
        //     [e.target.name]: e.target.value,
        // }));
        setMainSearchProduct(e.target.value);
    };

    const handleMainSearchOnClick = () => {
        setMainSearchProduct({
            title: "",
        });
    };

    const handleMainSearchOnKeyDown = (e) => {
        if (e.key === "Enter") {
            setMainSearchProduct({
                title: "",
            });
            navigate(`/user/public/search?page=1&search=${mainSearchProduct}`)
        }
    }

    console.log(mainSearchProduct);

    return (
        <div css={s.layout}>
            <div css={s.searchSection}>
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    name="title"
                    css={s.searchInput}
                    onChange={handleMainSearchOnChange}
                    onKeyDown={handleMainSearchOnKeyDown}
                    value={mainSearchProduct.title}
                />
                <IoSearchSharp onClick={handleMainSearchOnClick} size="30" />
            </div>
        </div>
    );
}

export default MainSearch;
