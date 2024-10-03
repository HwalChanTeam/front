/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';
import { Link, useNavigate } from 'react-router-dom';

function SigninPage(props) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const LogoOnCLick = () => {
        navigate("/")
    }

    const userInputOnChange = (e) => {
        setUser(user => ({
            ...user,
            [e.target.name] : e.target.value
        }))
    }

    return (
        <div css={s.mainLayout}>
            <div css={s.layout}>
                <div css={s.headerLayout}>
                    <h2 onClick={LogoOnCLick}>로고</h2>
                    <h1>로그인</h1>
                </div>
                <div css={s.container}>
                    <div css={s.inputUser}>
                        <input type="text"
                            name='username'
                            onChange={userInputOnChange}
                            value={user.username}
                            placeholder='아이디를 입력해 주세요'
                        />
                        <input type="text"
                            name='password'
                            onChange={userInputOnChange}
                            value={user.password}
                            placeholder='비밀번호를 입력해 주세요'
                        />
                    </div>
                </div>
                <div css={s.joinOkButton}>
                    <button>로그인 하기</button>
                </div>
                <div css={s.joinAndSearchUser}>
                    <Link><h3>회원 가입</h3></Link>
                    <Link><h3>아이디 비밀번호 찾기</h3></Link>
                </div>
            </div>
        </div>
    );

}

export default SigninPage;