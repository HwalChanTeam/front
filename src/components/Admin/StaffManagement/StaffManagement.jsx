/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { instance } from "../../../apis/util/instance";

// Modal 컴포넌트 추가
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div css={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div css={{ backgroundColor: "white", padding: "20px", borderRadius: "5px", width: "300px" }}>
                <h2>매니저 등록</h2>
                <input type="text" />
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};


function StaffManagement(props) {
  const tempUserList = [
    {
      id: 1,
      username: "aaa",
      name: "직원명1",
      email: "aaa@aaa.com",
      phone: "010-0000-0000",
      role: "매니저",
      createDate: "2024-10-11",
    },
    {
      id: 2,
      username: "bbb",
      name: "직원명2",
      email: "aaa@aaa.com",
      phone: "010-0000-0000",
      role: "매니저",
      createDate: "2024-10-11",
    },
    {
      id: 3,
      username: "ccc",
      name: "직원명3",
      email: "aaa@aaa.com",
      phone: "010-0000-0000",
      role: "매니저",
      createDate: "2024-10-11",
    },
  ];

  // 모달 띄우는 상태 추가
  const [openModal, setOpenModal] = useState(false);

  // 메니저 등록 버튼 누르면 모달 상태 변경 - 모달 띄워짐
  const handleSubmitButtonOnClick = () => {
    setOpenModal(true);
  };
  //  모달창은 상품 등록에꺼 불러와서 하기

  const [userList, setUserList] = useState(
    tempUserList.map((userList) => ({ ...userList }))
  );

  const hadleModifyOnClick = async () => {
    setOpenModal(true);
  };

  const handleDeleteOnClick = async (id) => {
    console.log(id);
    try {
      const response = await instance.delete(`/admin/delete/${id}`);
      // 성공적으로 삭제된 후, 상태에서 해당 직원 제거
      setUserList((prevList) => prevList.filter((user) => user.id !== id));
      console.log(`User ${id} deleted:`, response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div css={s.mainBox}>
      <h1>직원 관리</h1>
      <div css={s.container}>
        <table css={s.tableLayout}>
          <tbody css={s.tbodyLayout}>
            {userList.map((user) => (
              <tr css={s.layout}>
                <td css={s.listBox}>
                  <td>
                    <span>{user.role}</span>
                  </td>
                  <td>
                    <span>{user.username}</span>
                  </td>
                  <td>
                    <span>{user.name}</span>
                  </td>
                  <td>
                    <span>{user.email}</span>
                  </td>
                  <td>
                    <span>{user.phone}</span>
                  </td>
                  <td>
                    <span>{user.createDate}</span>
                  </td>
                  <div css={s.buttonBox}>
                    <button onClick={() => setOpenModal(true)}>정보수정</button>
                    <button onClick={() => handleDeleteOnClick(user.id)}>
                      해고
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div css={s.createManager}>
        <button onClick={handleSubmitButtonOnClick}>매니저 등록</button>
      </div>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default StaffManagement;
