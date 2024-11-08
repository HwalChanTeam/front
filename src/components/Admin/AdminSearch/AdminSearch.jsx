import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useSearchParams } from "react-router-dom";

function AdminSearch({ setPageCount }) {
    const navigate = useNavigate();
    const limit = 20;

    const [searchProduct, setSearchProduct] = useState("");

    const handleSearchOnChange = (e) => {
        setSearchProduct({
            [e.target.name]: e.target.value,
        });
        console.log(searchProduct);
    };

    const handleSubmitButtonOnClick = () => {
        setPageCount(1);
        navigate(`/admin/main/product?page=1&keyword=${searchProduct.title}&limit=${limit}`);
        setSearchProduct("");
    };

    const handleOnKeyDownEnter = (e) => {
        if(e.keyCode === 13) {
            handleSubmitButtonOnClick();
        }
    }

    return (
        <div css={s.layout}>
            <div css={s.searchSection}>
                <input
                    type="text"
                    name=""
                    value={searchProduct}
                    onChange={handleSearchOnChange}
                    onKeyDown={handleOnKeyDownEnter}
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
