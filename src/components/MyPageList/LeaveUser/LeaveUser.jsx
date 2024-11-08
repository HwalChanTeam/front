/** @jsxImportSource @emotion/react */
import { useMutation } from "react-query";
import * as s from "./style";
import { instance } from "../../../apis/util/instance";
import { useNavigate } from "react-router";

function LeaveUser({ userInfo }) {
  const navigate = useNavigate();

  const deleteUserMutation = useMutation(
    async () => {
      return await instance.delete(`/user/${userInfo.userId}`)
    },
    {
      onSuccess: () => {
        localStorage.removeItem("accessToken"); // 로컬 스토리지에서 토큰 삭제
        localStorage.removeItem("role");
        alert("회원탈퇴가 완료되었습니다.\n홈화면으로 이동합니다.")
        navigate("/");
        window.location.reload(); // 페이지를 새로 고침하여 상태를 초기화
      }
    }
  )

  console.log(userInfo)

  const handleLeaveButtonOnClick = () => {
    if (
      window.confirm("계정 정보가 전부 삭제됩니다.\n정말 삭제하시겠습니까?")
    ) {
      if (window.confirm("정말?ㅠㅠㅠㅠㅠ")) {
        deleteUserMutation.mutate();
      }
      return;
    }
    return;
  };

  return (
    <div css={s.container}>
      <div css={s.containerStyle}>
        <h2 css={s.headingStyle}>회원탈퇴 약관</h2>

        <h3 css={s.subHeadingStyle}>제1조 (목적)</h3>
        <p css={s.paragraphStyle}>
          이 약관은 [ㅁㅁㅁ] (이하 "회사")이 제공하는 서비스의 회원탈퇴에 관한
          사항을 규정함을 목적으로 합니다.
        </p>

        <h3 css={s.subHeadingStyle}>제2조 (회원탈퇴 절차)</h3>
        <ol css={s.listStyle}>
          <li>
            회원은 언제든지 서비스 내 설정 메뉴를 통해 회원탈퇴를 신청할 수
            있습니다.
          </li>
          <li>
            탈퇴 신청 후, 회사는 해당 회원의 탈퇴 요청을 확인하고, 탈퇴 처리를
            진행합니다.
          </li>
        </ol>

        <h3 css={s.subHeadingStyle}>제3조 (회원탈퇴의 효과)</h3>
        <ol css={s.listStyle}>
          <li>
            회원탈퇴가 완료되면 해당 회원의 모든 개인 정보와 데이터는 회사의
            정책에 따라 삭제되며, 복구가 불가능합니다.
          </li>
          <li>
            회원 탈퇴 후에는 해당 계정으로 다시 로그인할 수 없으며, 서비스
            이용에 제한이 있습니다.
          </li>
        </ol>

        <h3 css={s.subHeadingStyle}>제4조 (탈퇴 후의 권리 및 의무)</h3>
        <ol css={s.listStyle}>
          <li>
            탈퇴 후에도 회원이 작성한 게시물 및 댓글 등은 삭제되지 않으며,
            회사의 정책에 따라 일정 기간 보관될 수 있습니다.
          </li>
          <li>
            탈퇴에 따른 서비스 이용 중 발생한 미지급 금액이나 손해는 회원이
            책임지며, 회사는 이에 대해 책임을 지지 않습니다.
          </li>
        </ol>

        <h3 css={s.subHeadingStyle}>제5조 (약관의 개정)</h3>
        <p css={s.paragraphStyle}>
          회사는 이 약관을 변경할 수 있으며, 변경 사항은 사전에 공지합니다.
          회원은 변경된 약관에 동의하지 않을 경우 탈퇴를 신청할 수 있습니다.
        </p>

        <h3 css={s.subHeadingStyle}>제6조 (기타)</h3>
        <ol css={s.listStyle}>
          <li>이 약관은 [2024.11.04]부터 시행합니다.</li>
          <li>
            본 약관과 관련하여 발생하는 모든 분쟁은 [무슨무슨지방법원]의 법률에
            따릅니다.
          </li>
        </ol>
      </div>
      <div css={s.buttonBox}>
        <button onClick={handleLeaveButtonOnClick}>회원 탈퇴</button>
      </div>
    </div>
  );
}

export default LeaveUser;
