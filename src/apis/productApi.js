import { instance } from "./util/instance";
import axios from 'axios';

export const updateProductImgApi = async (img) => {
    let response = null;
    try {
        response = await instance.patch("/user/img", { img });
    } catch (e) {
        console.error(e);
        response = e.response
    }
    return response;
};

export const getProductLikeApi = async (userId, id) => {
    let response = null;
    try {
        response = await instance.get("/user/product");
    } catch (e) {
        console.error(e);
        response = e.response
    }
    return response;
};

export const productLikeApi = async (productId) => {
    let response = null;
    try {
        response = await instance.post("/user/product/like", {productId});
    } catch (e) {
        console.error(e);
        response = e.response
    }
}

export const deleteProductDisLikeApi = async (productId) => {
    let response = null;
    try {
        response = await instance.delete("/user/product/dislike", { productId });
    } catch (e) {
        console.error(e);
        response = e.response
    }
};

// 확인
export const basketAddProductApi = async (productId) => {
    let response = null;
    try {
        response = await instance.post("/user/cart", { productId });
        if (response.status === 200) {
            alert('장바구니에 상품이 추가되었습니다!');
        }
    } catch (e) {
        console.error(e);
        response = e.response
        alert('장바구니 추가 중 오류가 발생했습니다.');
    }
    return response;
}

// 확인
// 장바구니 상품 가져오기
export const getBasketProductsApi = async () => {
    const response = await axios.get("/user/cart"); // 적절한 API 경로로 수정
    return response.data; // 데이터 반환
};

// 상품 삭제 API
export const deleteProductApi = async (cartId, productId) => {
    await axios.delete(`/api/cart/${cartId}/product/${productId}`); // 적절한 API 경로로 수정

};

export const buyProductApi = async (productIds) => {
    let response = null;
    try {
        response = await instance.post("/user/buy", { productIds });
    } catch (e) {
        console.error(e);
        response = e.response;
    }
    return response.data;
}
