import { instance } from "./util/instance";

export const adminSigninApi = async(admin) => {
    let signinData = {
        isSuccess: false,
        token: null,
        successMessage : "",
        fieldErrors: [
            {
                field: "",
                defaultMessage: ""
            }
        ],
    }
    try {
        const response = await instance.post("/admin", admin);
        
        signinData = {
            isSuccess: true,
            token: response?.data,
            successMessage: "로그인 성공!!"
        }

    }catch (error) {
        const response = error.response;
        signinData = {
            isSuccess: false,
        }

        if(response.status === 403) {
            signinData['errorStatus'] = 'loginError';
            signinData['error'] = response.data;
            return signinData;
        }

        if(typeof(response.data) === 'string') {
            signinData['errorStatus'] = 'loginError';
            signinData['error'] = response.data;
        } else {
            signinData['errorStatus'] = 'fieldError';
            signinData['error'] = response.data.map(fieldError => ({
                field : fieldError.field,
                defaultMessage: fieldError.defaultMessage
            }));
        }
    }
    return signinData;
}