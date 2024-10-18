import { instance } from "./util/instance";

export const updateProductImgApi = async (img) => {
    let response = null;
    try {
        response = await instance.patch("/user/img", {img});
    } catch(e) {
        console.error(e);
        response = e.response
    }
    return response;
};

export const getProductLikeApi = async (userId, id) => {
    let response = null;
    try {
        response = await instance.get("/product", {userId, id});
    } catch (e) {
        console.error(e);
        response = e.response
    }
    return response;
};

export const deleteProductDisLikeApi = async (userId, id) => {
    let response = null;
    try {
        response = await instance.get("/product/dislike", {userId, id});
    } catch (e) {
        console.error(e);
        response = e.response
    }
    return response;
}