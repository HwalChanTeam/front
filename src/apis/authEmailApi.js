import { instance } from "./util/instance";

export const authEmailApi = async (checkNum) => {
    let response = null;
    try {
        response = await instance.post("/user/email/auth", checkNum)
    } catch(error) {
        console.log(error)
        response = error.response;
    }
    return response;
}