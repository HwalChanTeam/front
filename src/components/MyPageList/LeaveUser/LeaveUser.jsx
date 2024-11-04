/** @jsxImportSource @emotion/react */
import * as s from './style';

function LeaveUser({userInfo}) {

    const handleLeaveButtonOnClick = () => {
        if(window.confirm("계정 정보가 전부 삭제됩니다.\n정말 삭제하시겠습니까?")) {
            if(window.confirm("정말?ㅠㅠㅠㅠㅠ")) {

            }
            return;
        }
        return;
    }
    console.log(userInfo?.data?.data)
    return (
        <div css={s.container}>
            <p>회원탈퇴 약간 어쩌고 저쩌고...</p>
            <p>훠원삭제를 하면 어쩌고</p>
            <p>개인정보 보호기간이 어쩌고...</p>
            <div css={s.buttonBox}>
            <button onClick={handleLeaveButtonOnClick}>
                회원 탈퇴
            </button>
            </div>
        </div>
    );
}

export default LeaveUser;