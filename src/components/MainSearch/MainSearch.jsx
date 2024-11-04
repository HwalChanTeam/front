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

    // 검색 상태
    const [keyword, setKeyword] = useState("");

    // 상품데이터 제한 수
    const limit = 20;

    const handleKeywordOnChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleMainSearchButtonOnClick = () => {
        navigate(`/user/products/search?page=1&${limit}&keyword=${keyword}`);
    };

    const handleKeywordOnKeyDown = (e) => {
        if (e.key === "Enter") {
            setKeyword("");
            navigate(`/user/products/search?page=1&limit=${limit}&keyword=${keyword}`);
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
                        onChange={handleKeywordOnChange}
                        onKeyDown={handleKeywordOnKeyDown}
                        value={keyword}
                    />
                    <IoSearchSharp onClick={handleMainSearchButtonOnClick} size="30" />
                </div>
            </div>
        </>
    );
}

export default MainSearch;
