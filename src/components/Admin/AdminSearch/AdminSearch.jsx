import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useSearchParams } from "react-router-dom";

function AdminSearch({setPageCount}) {
    const navigate = useNavigate();

    const [searchProduct, setSearchProduct] = useState({
        title: "",
    });

    const handleSearchOnChange = (e) => {
        setSearchProduct({
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitButtonOnClick = () => {
        setPageCount(1);
        navigate(`/admin/main/product?page=1&keyword=${searchProduct.title}&limit=20`);
        setSearchProduct({
            title: ""
        });
    };

    return (
        <div css={s.layout}>
            <div css={s.searchSection}>
                <input
                    type="text"
                    name="title"
                    value={searchProduct.title}
                    onChange={handleSearchOnChange}
                    placeholder="검색어를 입력하세요"
                    css={s.searchInput}
                />
                <button onClick={handleSubmitButtonOnClick} css={s.searchButton}>
                    검색
                </button>
            </div>
        </div>
    );
}

export default AdminSearch;
