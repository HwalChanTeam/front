import { instance } from "./util/instance";

export const getUserApi = async () => {
    let response = null;
    try {
        response = await instance.get("/user/info");
    } catch(e) {
        console.error(e);
        response = e.response
    }
    return response;
}

export const updateUserApi = async () => {
    let response = null;
    try {
        response = await instance.put("/user/info");
    } catch(e) {
        console.error(e);
        response = e.response
    }
    return response;
}

