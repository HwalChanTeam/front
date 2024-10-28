/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router";
import * as s from "./style";
import FrozenProduct from "./Mealkit/FrozenProduct/FrozenProduct";
import Mealkit from "./Mealkit/Mealkit";
import Refrigerating from "./Mealkit/Refrigerating/Refrigerating";
import SimplyCook from "./SimplyCook/SimplyCook";
import Snacks from "./Snacks/Snacks";
import Soup from "./Soup/Soup";

function Category(props) {
    // 
    
    return (
        <div>
            <Routes>
                <Route path="/user/category/1"  element={<Soup />} /> {/* 국.찌개.탕 */}
                <Route path="/user/category/2"  element={<Snacks />} /> {/* 안주 */}
                <Route path="/user/category/3"  element={<Mealkit />} /> {/* 밀키트 */}
                <Route path="/user/category/31"  element={<FrozenProduct />} /> {/* 냉동 */}
                <Route path="/user/category/32"  element={<Refrigerating />} /> {/* 냉장 */}
                <Route path="/user/category/4"  element={<SimplyCook />} /> {/* 간편식 */}
            </Routes>
        </div>
    );
}

export default Category;