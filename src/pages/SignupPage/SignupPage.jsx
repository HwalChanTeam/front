/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { instance } from "../../apis/util/instance";
import logo from "../../assets/images/logo.png";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { sendEmailApi } from "../../apis/emailApi";
import { isError, useMutation } from "react-query";

function SignupPage(props) {
    const navigate = useNavigate();

    // 이메일 전송된 상태
    const [isEmailSend, setIsEmailSend] = useState(false);
    // 60초 타이머
    const [timer, setTimer] = useState(60);

    const [user, setUser] = useState({
        username: "",
        password: "",
        checkPassword: "",
        name: "",
        email: "",
        phoneNumber: "",
    });

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>,
        phoneNumber: <></>,
    });

    const [sendEmail, setSendEmail] = useState({
        toEmail: "",
    });

    const [sendCheckNum, setSencCheckNum] = useState({
        checkNum: "",
    });

    const handleInputOnchange = (e) => {
        setUser((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }));
    };

    const handleEmailInputOnchange = (e) => {
        let emailValue = e.target.value;
        setSendEmail((email) => ({
            ...email,
            [e.target.name]: emailValue,
        }));

        //user.eamil도 함께 업데이트
        setUser((email) => ({
            ...email,
            email: emailValue,
        }));
    };

    const showFieldErrorMessage = (fieldErrors) => {
        console.log(fieldErrors); // 에러 내용 확인
        let EmptyFieldErrors = {
            // 에러메시지 초기값
            username: <></>,
            password: <></>,
            checkPassword: <></>,
            name: <></>,
            email: <></>,
            checkNum: <></>,
        };

        for (let fieldError of fieldErrors) {
            EmptyFieldErrors = {
                ...EmptyFieldErrors,
                [fieldError.field]: <p>{fieldError.defaultMessage}</p>,
            };
        }
        setFieldErrorMessages(EmptyFieldErrors);
    };

    // 이메일 전송 버튼
    const emailSendButtonOnClick = async () => {
        if (isEmailSend) {
            alert("60초 후에 다시 시도해 주세요");
            return;
        }

        try {
            await instance.post("/user/public/email/send", sendEmail);
            setIsEmailSend(true);
            setTimer(60);

            const countdown = setInterval(() => {
                setTimer((timer) => {
                    if (timer <= 1) {
                        clearInterval(countdown);
                        setIsEmailSend(false);
                        return 0;
                    }
                    return timer - 1;
                });
            }, 1000);
        } catch (error) {
            console.log(error); // 에러 로그 확인
            // if (error.response && error.response.data.errors) {
            //   showFieldErrorMessage(error.response.data.errors);
            // } else {
            //   alert("이메일 전송 중 오류가 발생했습니다.");
            // }
        }
        // if(sendEmail.toEmail) 이메일 형식이 아니면 올바른 이메일을 입력해주세요 / 비어있으면 이메일을 입력해주세요
    };

    // 이메일 인증번호 입력
    const emailCheckOnChange = (e) => {
        setSencCheckNum((checkNum) => ({
            ...checkNum,
            [e.target.name]: e.target.value,
        }));
    };

    // 이메일 인증번호 체크 mutation
    const checkEmailMutation = useMutation(
        async () => {
            return await instance.post("/user/public/email/auth", sendCheckNum);
        },
        {
            onSuccess: (response) => {
                setUser.email(response.data);
            },
            onError: (response) => {
                console.log(response.data);
            },
        }
    );

    // 이메일 인증 체크 버튼
    const handleCheckEmailButtonOnClick = () => {
        console.log(sendCheckNum.checkNum);
        checkEmailMutation.mutate();
    };

    // 회원가입 post mutation
    const signupMutation = useMutation(
        async () => {
            const signupData = await instance.post("/user/public/signup", user);
        },
        {
            onSuccess: () => {
                alert("회원가입을 축하합니다.");
                navigate("/");
            },
            // onError: (error) => {
            //   // 회원가입 실패하면?
            //   if (error.response && error.response?.data.fieldErrors) {
            //     showFieldErrorMessage(error.response?.data.fieldErrors);
            //   } else {
            //     alert("회원가입 중 오류가 발생했습니다.");
            //   }
            // },
        }
    );

    // 회원가입 완료 버튼
    const handleSubmitButtonOnClick = () => {
        signupMutation.mutate();
    };

    return (
        <div css={s.mainLayout}>
            <h1 css={s.logo}>
                <img src={logo} />
            </h1>
            <div css={s.layout}>
                <div css={s.headerLayout}>
                    <h2>회원가입</h2>
                </div>
                <div css={s.inputUser}>
                    <input
                        type="text"
                        onChange={handleInputOnchange}
                        name="username"
                        value={user.username}
                        placeholder="아이디를 입력해 주세요"
                    />
                    {fieldErrorMessages.username}
                    <input
                        type="password"
                        onChange={handleInputOnchange}
                        name="password"
                        value={user.password}
                        placeholder="비밀번호를 입력해 주세요"
                    />
                    {fieldErrorMessages.password}
                    <input
                        type="password"
                        onChange={handleInputOnchange}
                        name="checkPassword"
                        value={user.checkPassword}
                        placeholder="비밀번호를 한번 더 입력해 주세요"
                    />
                    {fieldErrorMessages.checkPassword}
                    <input
                        type="text"
                        onChange={handleInputOnchange}
                        name="name"
                        value={user.name}
                        placeholder="이름을 작성해 주세요"
                    />
                    {fieldErrorMessages.name}
                    <input
                        type="text"
                        onChange={handleInputOnchange}
                        name="phoneNumber"
                        value={user.phoneNumber}
                        placeholder="휴대폰 번호를 입력해 주세요"
                    />
                    {fieldErrorMessages.phoneNumber}
                </div>
                <div css={s.inputEmail}>
                    <input
                        type="text"
                        name="toEmail"
                        value={sendEmail.toEmail}
                        placeholder="이메일을 입력해 주세요"
                        onChange={handleEmailInputOnchange}
                    />
                    {fieldErrorMessages.email}
                    <button onClick={emailSendButtonOnClick}>
                        인증요청 {isEmailSend && `(${timer}초 후 재시도)`}
                    </button>

                    {/* 인증번호 요청 누르면 인증번호 칸 활성화되게(추가) */}
                    {isEmailSend === false ? (
                        <></>
                    ) : (
                        <div css={s.emailCkeck}>
                            <input
                                type="text"
                                name="checkNum"
                                placeholder="인증번호를 입력해 주세요"
                                onChange={emailCheckOnChange}
                                value={sendCheckNum.checkNum}
                            />
                            {fieldErrorMessages.checkNum}
                            <button onClick={handleCheckEmailButtonOnClick}>확인</button>
                        </div>
                    )}
                </div>
                <div css={s.joinOkButton}>
                    <button onClick={handleSubmitButtonOnClick}>회원가입 하기</button>
                </div>
                <div css={s.oauth2Buttons}>
                    <button>
                        <SiNaver />
                        네이버 로그인
                    </button>
                    <button>
                        <FcGoogle />
                        구글 로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
