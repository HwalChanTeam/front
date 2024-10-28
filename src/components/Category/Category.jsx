/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router";
import * as s from "./style";
import FrozenProductView from "./FrozenProductView/FrozenProductView";

function Category(props) {
    // 
    
    return (
        <div>
            <Routes>
                <Route path="/user/category/31"  element={<FrozenProductView />} /> {/* 냉동 */}
            </Routes>
        </div>
    );
}

export default Category;