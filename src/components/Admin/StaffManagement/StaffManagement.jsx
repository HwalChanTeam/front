/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import { instance } from "../../../apis/util/instance";
import Modal from "../../Modal/Modal";
import * as s from "./style";
import { useState } from "react";

function StaffManagement(props) {
    // 모달 띄우는 상태 추가
    const [openModal, setOpenModal] = useState(false);
    const [checkedIds, setCheckedIds] = useState([]);
    const [staffs, setStaffs] = useState([]);

    const closeModal = () => {
        setOpenModal(false); // 모달 닫기
    };

    const staffQuery = useQuery(
        ["useQuery"],
        async () => {
            const response = await instance.get("admin/user?role=2");
            console.log(response?.data?.user);
            setStaffs(response?.data?.user);
        }
    );

    const deleteMutation = useMutation(
        async () => {
            console.log(checkedIds);
            await instance.delete("/admin/user", { data: { checkedIds } });
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                alert("삭제가 완료되었습니다.");
                staffQuery.refetch();
            }
        }
    );
    

    const handleCheckBoxOnChange = (staffId) => {
        console.log(staffId);
        setCheckedIds((ids) => {
            if (ids.includes(staffId)) {
                return ids.filter(id => id !== staffId);
            } else {
                return [...ids, staffId];
            }
        });
    };

    return (
        <div css={s.mainBox}>
            <h1>직원 관리</h1>
            <div css={s.buttonLayout}>
                <button onClick={() => setOpenModal(true)}>등록</button>
                <Modal isOpen={openModal} onClose={closeModal} />
                <button onClick={() => deleteMutation.mutateAsync()}>삭제</button>
            </div>
            <div css={s.container}>
                <table css={s.theadLayout}>
                    <tr>
                        <td css={s.theadItems}>선택</td>
                        <td css={s.theadItems}>번호</td>
                        <td css={s.theadItems}>직급</td>
                        <td css={s.theadItems}>이름</td>
                        <td css={s.theadItems}>아이디</td>
                        <td css={s.theadItems}>이메일</td>
                        <td css={s.theadItems}>휴대폰</td>
                        <td css={s.theadItems}>입사일자</td>
                    </tr>
                </table>
                <table css={s.tableLayout}>
                    {/* <tbody css={s.tbodyLayout}> */}
                    {staffs.map((staff) => (
                        <tr key={staff.userId}>
                            <td css={s.productItem}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckBoxOnChange(staff.userId)}
                                    checked={checkedIds.includes(staff.userId)}
                                />
                            </td>
                            <td css={s.productItem}>{staff.userId}</td>
                            {
                                staff.userRoles.map((role) => (
                                    <td css={s.productItem} key={role.role.roleId}>{role.role.name}</td>
                                ))
                            }
                            <td css={s.productItem}>{staff.name}</td>
                            <td css={s.productItem}>{staff.username}</td>
                            <td css={s.productItem}>{staff.email}</td>
                            <td css={s.productItem}>{staff.phoneNumber}</td>
                            <td css={s.productItem}>{staff.createdAt}</td>
                        </tr>
                    ))}
                    {/* </tbody> */}
                </table>
            </div>
        </div>
    );
}

export default StaffManagement;
