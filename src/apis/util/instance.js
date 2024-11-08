import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Authorization: localStorage.getItem("accessToken"),
        // ? `Bearer ${localStorage.getItem("accessToken")}`
        // : "", // 없을 때는 빈 문자열이나 헤더를 설정하지 않음
    }
});