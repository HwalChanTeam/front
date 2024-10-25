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

// 신상품 get 요청 api
export const getNewProductApi = async () => await instance.get("/user/public/new")

//인기상품 get 요청 api
export const getPopularityProudctApi = async () => {
    let response = null;
    try {
        response = await instance.get("/user/public/popularity");
    } catch (e) {
        console.error(e);
        response = e.response
    }
}

// 찜 api
export const getProductLikeApi = async (productId) => {
    let response = null;
    try {
        response = await instance.get("/user/product", {productId});
    } catch (e) {
        console.error(e);
        response = e.response;
    }
    return response;
};

export const productLikeApi = async (productId) => {
    let response = null;
    try {
        response = await instance.post("/user/product/like", {productId});
    } catch (e) {
        console.error(e);
        response = e.response;
    }
}

export const deleteProductDisLikeApi = async (productId) => {
    let response = null;
    try {
        response = await instance.delete("/user/product/dislike", { productId });
    } catch (e) {
        console.error(e);
        response = e.response;
    }
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
