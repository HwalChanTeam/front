/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
import Modal from '../../Modal/Modal';
import ReactPaginate from 'react-paginate';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

function UserView(props) {
    // 모달 띄우는 상태 추가
    const [openModal, setOpenModal] = useState(false);
    const [checkedIds, setCheckedIds] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchParam] = useSearchParams();
    const keyword = searchParam.get("keyword");
    const [pageCount, setPageCount] = useState(1);
    const limit = 20;
    const navigate = useNavigate();

    const closeModal = () => {
        setOpenModal(false); // 모달 닫기
    };

    const userQuery = useQuery(
        ["useQuery"],
        async () => {
            const response = await instance.get("admin/user?role=3");
            console.log(response?.data?.user);
            setUsers(response?.data?.user);
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
                userQuery.refetch();
            }
        }
    );
    
    const handleCheckBoxOnChange = (userId) => {
        console.log(userId);
        setCheckedIds((ids) => {
            if (ids.includes(userId)) {
                return ids.filter(id => id !== userId);
            } else {
                return [...ids, userId];
            }
        });
    };

    const handleOnPageChange = (e) => {
        setPageCount(e.selected + 1);
        navigate(`/admin/main/user?page=${e.selected + 1}${keyword ? `&keyword=${keyword}` : ''}&limit=${limit}`);
    }

    return (
        <div css={s.mainBox}>
            <h1>유저 관리</h1>
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
                        <td css={s.theadItems}>이름</td>
                        <td css={s.theadItems}>아이디</td>
                        <td css={s.theadItems}>이메일</td>
                        <td css={s.theadItems}>휴대폰</td>
                        <td css={s.theadItems}>생성일자</td>
                    </tr>
                </table>
                <table css={s.tableLayout}>
                    {/* <tbody css={s.tbodyLayout}> */}
                    {users.map((user) => (
                        <tr key={user.userId}>
                            <td css={s.productItem}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckBoxOnChange(user.userId)}
                                    checked={checkedIds.includes(user.userId)}
                                />
                            </td>
                            <td css={s.productItem}>{user.userId}</td>
                            <td css={s.productItem}>{user.name}</td>
                            <td css={s.productItem}>{user.username}</td>
                            <td css={s.productItem}>{user.email}</td>
                            <td css={s.productItem}>{user.phoneNumber}</td>
                            <td css={s.productItem}>{user.createdAt}</td>
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
                        pageCount={3}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={5}
                        onPageChange={handleOnPageChange}
                    />
                </div>
        </div>
    );
}

export default UserView;