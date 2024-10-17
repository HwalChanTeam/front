/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../apis/util/instance';
import { sendEmailApi } from '../../apis/sendEmailApi';

function SignupPage(props) {
    const navigate = useNavigate();

    const [certification, setCertification] = useState(0);
    const [user, setUser] = useState({
        username: "",
        password: "",
        checkPassword: "",
        name: "",
        email: "",
        phone: ""
    });

    const [sendEmail, setSendEmail] = useState({
        toEmail: "",
        subject: "",
        content: ""
    })

    const LogoOnCLick = () => {
        navigate("/")
    }

    const handleInputOnchange = (e) => {
        setUser(user => ({
            ...user,
            [e.target.name]: e.target.value
        }));
    };

    const handleEmailInputOnchange = (e) => {
        setUser(user => ({
            ...user,
            [e.target.name]: e.target.value
            }));
        setSendEmail(email => ({
            ...email,
            toEmail :user.email
        }))
    };

    const emailCkectButtonOnClick = async () => {
        console.log(sendEmail)
        const emailData = await sendEmailApi(sendEmail);
        if (certification == 1) { 
            alert("이미 인증 요청이 되었습니다.")
            return;
        }
        setCertification(1);
    }

    const handleSubmitButtonOnClick = () => {
        // 백엔드로 요청 들어가야함(post요청)
    }

    return (
        <div css={s.mainLayout}>
            <div css={s.layout}>
                <div css={s.headerLayout}>
                    <h2 onClick={LogoOnCLick}>로고</h2>
                    <h1>회원가입</h1>
                </div>
                <div css={s.container}>
                    <div css={s.inputUser}>
                        <input type="text"
                            onChange={handleInputOnchange}
                            name="username"
                            value={user.username}
                            placeholder='아이디를 입력해 주세요'
                        />
                        <input type="text"
                            onChange={handleInputOnchange}
                            name="password"
                            value={user.password}
                            placeholder='비밀번호를 입력해 주세요'
                        />
                        <input type="text"
                            onChange={handleInputOnchange}
                            name="checkPassword"
                            value={user.checkPassword}
                            placeholder='비밀번호를 한번 더 입력해 주세요'
                        />
                        <input type="text"
                            onChange={handleInputOnchange}
                            name="name"
                            value={user.name}
                            placeholder='이름을 작성해 주세요'
                        />
                        <input type="text"
                            onChange={handleInputOnchange}
                            name="phone"
                            value={user.phone}
                            placeholder='휴대폰 번호를 입력해 주세요'
                        />
                    </div>
                    <div css={s.inputEmail}>
                        <input type="text"
                            name="email"
                            value={user.email}
                            placeholder='이메일 번호를 입력해 주세요' 
                            onChange={handleEmailInputOnchange}
                            />
                        <button onClick={emailCkectButtonOnClick}>인증요청</button>

                        {/* 인증번호 요청 누르면 인증번호 칸 활성화되게(추가) */}
                        {
                            certification === 0
                                ?
                                <></>
                                :
                                <input type="text" neme="emailCheck" placeholder='인증번호를 입력해 주세요' />
                        }
                    </div>
                </div>
                <div css={s.joinOkButton}>
                    <button onClick={handleSubmitButtonOnClick}>회원가입 하기</button>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;