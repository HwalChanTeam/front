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
}