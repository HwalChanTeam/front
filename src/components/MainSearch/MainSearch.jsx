import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoSearchSharp } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router";
import { useQuery } from "react-query";
import { instance } from "../../apis/util/instance";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function MainSearch() {

    const navigate = useNavigate();

    const [ searchParam, setSearchParam ] = useSearchParams(); // 검색 param 상태

    const [pageCount, setPageCount] = useState(1); 

    // 검색 상태
    const [mainSearchProduct, setMainSearchProduct] = useState(searchParam.get("search") ?? "");

    // 상품데이터 제한 수
    const limit = 20;

    const handleMainSearchOnChange = (e) => {
        setMainSearchProduct(e.target.value);
    };

    const handleMainSearchOnClick = () => {
        navigate(`/user/search?page=1&search=${mainSearchProduct}`);
    };

    const handleMainSearchOnKeyDown = (e) => {
        if (e.key === "Enter") {
            navigate(`/user/search?page=1&search=${mainSearchProduct}`)
        }
    }

    return (
        <>
            <div css={s.layout}>
                <div css={s.searchSection}>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        name="title"
                        css={s.searchInput}
                        onChange={handleMainSearchOnChange}
                        onKeyDown={handleMainSearchOnKeyDown}
                        value={mainSearchProduct}
                    />
                    <IoSearchSharp onClick={handleMainSearchOnClick} size="30" />
                </div>
            </div>
        </>
    );
}

export default MainSearch;
