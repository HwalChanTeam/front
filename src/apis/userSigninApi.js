import { instance } from "./util/instance"

export const userSigninApi = async (user) => {
    let userSiginData = {
        isSuccess: false,
        token: null,
        successMessage: "",
        fieldErrors: [
            {
                field: "",
                defaultMessage: ""
            }
        ]
    }
    try {
        const response = await instance.post("/user/public/signin", user);
        userSiginData = {
            isSuccess: true,
            token: response.data,
            successMessage: "로그인 성공!!"
        }
    } catch (error) {
        const response = error.response;
        userSiginData = {
            isSuccess: false
        };

        if (response.status === 403) {
            userSiginData['errorStatus'] = 'loginError';
            userSiginData['error'] = response.data;
        };

        if (typeof (response.data) === 'string') {
            userSiginData['errorStatus'] = 'loginError';
            userSiginData['error'] = response.data;
        }


    }

}