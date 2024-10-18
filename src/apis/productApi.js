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

export const basketAddProductApi = async (productId) => {
    let response = null;
    try {
        response = await instance.post("/user/img", {productId});
        if (response.status === 200) {
            alert('장바구니에 상품이 추가되었습니다!');
          }
    } catch(e) {
        console.error(e);
        response = e.response
        alert('장바구니 추가 중 오류가 발생했습니다.');
    }
    return response;
}

export const basketViewProductApi = async () => {
    let response = null;
    try {
        response = await instance.get("/user/img", );
    } catch(e) {
        console.error(e);
        response = e.response
    }
    return response;
}

export const buyProductApi = async (productId) => {
    let response = null;
    try {
        response = await instance.post("/user/img", {productId});
    } catch(e) {
        console.error(e);
        response = e.response
    }
    return response;
}

export const orderGetApi = async (productId) => {
    let response = null;
    try {
        response = await instance.post("/user/img", {productId});
    } catch(e) {
        console.error(e);
        response = e.response
    }
    return response;
}

