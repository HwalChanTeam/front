import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useSearchParams } from "react-router-dom";

function AdminSearch({ setPageCount, type }) {
    const navigate = useNavigate();
    const limit = 20;

    const [searchProduct, setSearchProduct] = useState({
        title: "", // 카테고리
        name: ""  // 고객 이름
    });

    const handleSearchOnChange = (e) => {
        setSearchProduct({
            [e.target.name]: e.target.value,
        });
        console.log(searchProduct);
    };

    const handleSubmitButtonOnClick = () => {
        if(type === "title") {
            navigate(`/admin/main/product?page=1&keyword=${searchProduct.title}&limit=${limit}`);
        }

        if(type === "name") {
            navigate(`/admin/main/user?page=1&name=${searchProduct.name}&limit=${limit}`)
        }
        setPageCount(1);
        setSearchProduct({
            title: "",
            name: ""
        });
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
                    name={type}
                    value={type === "title" ? searchProduct.title : searchProduct.name}
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
