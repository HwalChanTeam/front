/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useMutation, useQuery } from "react-query";
import DaumPost from "../../PostSearch/PstSearch";
import { instance } from "../../../apis/util/instance";

function UserInfo(props) {
    const [userInfo, setUserInfo] = useState({
        username: "", // 수정 불가
        name: "", // 수정 불가
        email: "", // 수정 가능
        phoneNumber: "", // 수정 가능
        password: "",
        changePassword: "",
        checkPassword: "",
        img: "",
        address: {
            address: "", // 지역 주소
            detailAddress: "", // 상세 주소
            zipCode: "",
        },
    });
    console.log(userInfo);

    // 유저 정보 불러오기
    const { data, isError, isLoading, refetch } = useQuery(
        ["userInfos"],
        async () => {
            return await instance.get("/user");
        },
        {
            onSuccess: (response) => {
                console.log(response);
                setUserInfo(response.data);
            },
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );

    // onChange 핸들러
    const handleUserInfoOnChange = (e) => {
        setUserInfo((user) => ({
            ...user,
            [e.target.name]: e.target.value,
        }));
    };

    // 수정 함수
    const userInfoEditmutation = useMutation(
        async (dto) => {
            return await instance.put(`/user/${dto.username}`, dto);
        },
        {
            onSuccess: () => {
                refetch();
            },
        }
    );

    // 완료 버튼
    const handleSubmitButtonOnClick = () => {
        const dto = {
            email: userInfo.email, // 이메일
            email: userInfo.phoneNumber, // 후대폰
            address: userInfo.address.address, // 지역 주소
            detailAddress: userInfo.address.detailAddress, // 상세 주소
            zipCode: userInfo.address.zipCode, // 우편번호
            password: userInfo.password, // 현재 비밀번호
            changePassword: userInfo.changePassword, // 변경할 비밀번호
            checkPassword: userInfo.checkPassword, // 비밀번호 확인
        };
        // 새 비밀번호와 비밀번호 확인이 입력된 경우에만 추가
        if (userInfo.changePassword && userInfo.checkPassword) {
            dto.changePassword = userInfo.changePassword;
            dto.checkPassword = userInfo.checkPassword;
        } else {
            // null 값인 속성을 삭제
            delete dto.changePassword;
            delete dto.checkPassword;
        }
        userInfoEditmutation.mutate(dto);
    };

    // 주소 선택 완료 시 호출될 함수
    const handleAddressComplete = (address) => {
        setUserInfo((user) => ({
            ...user,
            address: {
                address: address.address, // 지역 주소 업데이트
                detailAddress: address.detailAddress, // 나머지 주소 업데이트
                zipCode: address.zipCode,
            },
        }));
    };

    // 배송지 수정 -> 지금처럼 지역주소, 나머지 주소가 아닌, 배송지 목록 관리 버튼 -> 윈도우 창 뜸 -> 배송지 관리 가능

    if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>데이터를 가져오는데 실패했습니다.</div>

    return (
        <div css={s.layout}>
            <div css={s.mainBox}>
                <div css={s.userInfo}>
                    <h2>사용자 정보</h2>
                    <div css={s.inputBox}>
                        <label htmlFor="username">아이디 : </label>
                        <input
                            type="text"
                            name="username"
                            readOnly
                            value={userInfo.username} // defaultValue → value로 변경
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="name">이름 : </label>
                        <input
                            type="text"
                            name="name"
                            readOnly
                            value={userInfo.name} // defaultValue → value로 변경
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="password">현재 비밀번호: </label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleUserInfoOnChange}
                            value={userInfo.password} // 현재 비밀번호 반영
                            placeholder="현재 비밀번호를 입력하세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="changePassword">새 비밀번호: </label>
                        <input
                            type="password"
                            name="changePassword"
                            onChange={handleUserInfoOnChange}
                            value={userInfo.changePassword} // 새 비밀번호 반영
                            placeholder="새 비밀번호를 입력하세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="checkPassword">비밀번호 확인: </label>
                        <input
                            type="password"
                            name="checkPassword"
                            onChange={handleUserInfoOnChange}
                            value={userInfo.checkPassword} // 비밀번호 확인 반영
                            placeholder="비밀번호를 확인하세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="email">이메일 : </label>
                        <input
                            onChange={handleUserInfoOnChange}
                            type="text"
                            name="email"
                            value={userInfo.email} // defaultValue → value로 변경
                            placeholder="이메일 주소를 입력해 주세요"
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label htmlFor="phoneNumber">휴대폰 번호 : </label>
                        <input
                            onChange={handleUserInfoOnChange}
                            type="text"
                            name="phoneNumber"
                            value={userInfo.phoneNumber} // defaultValue → value로 변경
                            placeholder="휴대폰 번호를 입력해 주세요"
                        />
                    </div>
                    <p>
                        {/* DaumPost 컴포넌트 추가 */}
                        <input
                            type="text"
                            name="zipCode"
                            readOnly
                            value={userInfo.address.zipCode}
                        />
                        <DaumPost onComplete={handleAddressComplete} />
                    </p>
                    <div css={s.addressBox}>
                        <label>지역 주소: </label>
                        <input
                            type="text"
                            name="address"
                            readOnly
                            value={userInfo.address.address} // 지역 주소 반영
                        />
                    </div>
                    <div css={s.inputBox}>
                        <label>나머지 주소: </label>
                        <input
                            type="text"
                            name="detailAddress"
                            onChange={handleUserInfoOnChange}
                            value={userInfo.address.detailAddress} // 나머지 주소 반영
                        />
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleSubmitButtonOnClick}>정보 수정</button>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
