/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";

function StaffManagement(props) {
  // 모달 띄우는 상태 추가
  const [openModal, setOpenModal] = useState(false);

  // 메니저 등록 버튼 누르면 모달 상태 변경 - 모달 띄워짐
  const handleSubmitButtonOnClick = () => {
    setOpenModal(true);
  };
  //  모달창은 상품 등록에꺼 불러와서 하기

  return (
    <div css={s.mainBox}>
      <h1>직원 관리 페이지</h1>
      <div css={s.container}>
        <table css={s.tableLayout}>
          <tbody css={s.tbodyLayout}>
            <tr css={s.layout}>
              <td css={s.listBox}>
                <span>직급</span>
                <span>이름</span>
                <span>이메일</span>
                <span>휴대폰</span>
                <div css={s.buttonBox}>
                  <button>정보수정</button>
                  <button>해고</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div css={s.createManager}>
        <button onClick={handleSubmitButtonOnClick}>매니저 등록</button>
      </div>
    </div>
  );
}

export default StaffManagement;
