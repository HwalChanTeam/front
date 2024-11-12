/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import { instance } from "../../../apis/util/instance";
import * as s from "./style";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import StaffRegisterModal from "../../Modal/StaffRegisterModal";
import StaffEditModal from "../../Modal/StaffEditModal";

function StaffManagement(props) {
    // 모달 띄우는 상태 추가
    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [checkedIds, setCheckedIds] = useState([]);
    const [staffs, setStaffs] = useState([]);
    const [searchParam] = useSearchParams();
    const keyword = searchParam.get("keyword");
    const [pageCount, setPageCount] = useState(1);
    const limit = 20;
    const navigate = useNavigate();

    const closeModal = () => {
        setOpenRegisterModal(false); // 모달 닫기
        setOpenEditModal(false);
    };

    const staffQuery = useQuery(
        ["useQuery"],
        async () => {
            const response = await instance.get("admin/user", {params: {page:pageCount, limit, role: 2}});
            setStaffs(response?.data?.user);
        },
        {
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const handleEditButtonOnClick = () => {
        if(checkedIds.length === 1) {
            setOpenEditModal(true);
        } else {
            alert("직원을 선택해 주세요")
        }
    }

    // 삭제를 위한 mutation
    const deleteMutation = useMutation(
        async () => {
            await instance.delete(`/admin/user/${checkedIds}`, { data: { checkedIds } });
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

    const handleDeleteButtonOnClick = () => {
        if(checkedIds.length === 0) {
            alert("직원을 선택해 주세요")
            return;
        }
        if(window.confirm("정말 삭제하시겠습니까?")) {
            deleteMutation.mutate();
        }
    }

    // 체크박스 체크를 위한 함수
    const handleCheckBoxOnChange = (staffId) => {
        setCheckedIds((ids) => {
            if (ids.includes(staffId)) {
                return ids.filter(id => id !== staffId);
            } else {
                return [...ids, staffId];
            }
        });
    };

    const handleOnPageChange = (e) => {
        setPageCount(e.selected + 1);
        navigate(`/admin/main/staff?page=${e.selected + 1}${keyword ? `&keyword=${keyword}` : ''}&limit=${limit}`);
    }

    return (
        <div css={s.mainBox}>
            <h1>직원 관리</h1>
            <div css={s.buttonLayout}>
                <button onClick={() => setOpenRegisterModal(true)}>등록</button>
                <StaffRegisterModal isOpen={openRegisterModal} onClose={closeModal} refetch={staffQuery.refetch}/>
                {
                    checkedIds.length >= 2
                    ?
                        <></>
                    :
                    <>
                        <button onClick={handleEditButtonOnClick}>수정</button>
                        <StaffEditModal isOpen={openEditModal} onClose={closeModal} staffQuery={staffs} checkId={checkedIds} refetch={staffQuery.refetch}/>
                    </>
                }

                <button onClick={handleDeleteButtonOnClick}>삭제</button>
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
            <div css={s.pageNumber}>
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<><MdNavigateBefore /></>}
                    nextLabel={<><MdNavigateNext /></>}
                    pageCount={1}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handleOnPageChange}
                />
            </div>
        </div>
    );
}

export default StaffManagement;
