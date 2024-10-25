/** @jsxImportSource @emotion/react */
import { useQueryClient } from "react-query";
import AdminSearch from "../AdminSearch/AdminSearch";
import * as s from "./style";
import { useState } from "react";
import { instance } from "../../../apis/util/instance";
import { ref } from "firebase/storage";
import { storage } from "../../../firebase/firebase";

function CategoryEdit(props) {
    
    return (
        <div css={s.mainBox}>
            <h1>항목 관리</h1>
            <div css={s.registerBox}>
                <div css={s.inputBox}>
                    <span>
                        <label for="category">항목분류</label>
                        <select
                            name="category"
                            id="category"
                            css={s.selectBox}
                        >
                            <option value="밀키트">밀키트</option>
                            <option value="국탕찌">국탕찌</option>
                            <option value="안주">안주</option>
                            <option value="간편식">간편식</option>
                        </select>
                        
                    </span>
                    <span>
                        <label for="title">상품명</label>
                        <input
                            type="text"
                            name="title"
                        />
                    </span>
                    <span>
                        <label for="price">금액</label>
                        <input
                            type="text"
                            name="price"
                        />
                    </span>
                    <span>
                        <label for="origin">원산지</label>
                        <input
                            type="text"
                            name="origin"
                        />
                    </span>
                    <span>
                        <label for="stock">재고</label>
                        <input
                            type="text"
                            name="stock"
                        />
                    </span>
                    <span>
                        <label for="thumbnailImg">이미지</label>
                        <img src="" alt="" />
                        <button  >상품 이미지 등록</button>
                    </span>
                </div>
                <div css={s.buttonBox}>
                    <button >상품 등록</button>
                </div>
            </div>
        </div>
    );
}

export default CategoryEdit;