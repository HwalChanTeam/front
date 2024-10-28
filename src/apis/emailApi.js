import { instance } from "./util/instance";

export const authEmailApi = async (checkNum) => {
    let response = null;
    try {
        response = await instance.post("/user/public/email/auth", checkNum)
    } catch (error) {
        console.log(error)
        response = error.response;
    }
    return response;
}

export const sendEmailApi = async (email) => {
    let response = null;
    try {
        response = await instance.post("/user/public/email/send", email)
    } catch (error) {
        console.log(error)
        response = error.response
    }
    return response;
}