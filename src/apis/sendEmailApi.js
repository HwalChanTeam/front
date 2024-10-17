import { instance } from "./util/instance";

export const sendEmailApi = async (email) => {
    let response = null;
    try {
        response = await instance.post("/user/email/send", email) 
    } catch(error) {
        console.log(error)
        response = error.response
    }
    return response;
}