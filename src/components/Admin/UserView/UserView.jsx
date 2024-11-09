/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
import Modal from '../../Modal/Modal';
import ReactPaginate from 'react-paginate';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import UserEditModal from '../../Modal/UserEditModal/UserEditModal';
import AdminSearch from '../AdminSearch/AdminSearch';

function UserView(props) {
    // 모달 띄우는 상태 추가
    const [openModal, setOpenModal] = useState(false);
    const [checkedIds, setCheckedIds] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchParam] = useSearchParams();
    const name = searchParam.get("name");
    console.log(name)
    const [selectPage, setSelectPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const limit = 20;
    const navigate = useNavigate();

    const closeModal = () => {
        setOpenModal(false); // 모달 닫기
    };

    // 조회를 위한 쿼리
    const userQuery = useQuery(
        ["useQuery"],
        async () => {
            const response = await instance.get("admin/user", {params: {page: selectPage, limit, role: 3}});
            setUsers(response?.data?.user);
            return response?.data;
        },
        {
            enabled: !name,
            retry: 0,
            refetchOnWindowFocus: false
            
        }
    );

    console.log(users)

    // 유저 검색 
    const userSearchQuery = useQuery(
        ["searchQuery", name, pageCount],
        async () => {
            const response = await instance.get(`admin/user/search?page=${selectPage}&name=${name}&limit=${limit}`, {params: {role: 3}});
            setUsers(response.data.user)    
        },
        {
            enabled: !!name,
            retry: 0,
            refetchOnWindowFocus: false,
        }
    );

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
                userQuery.refetch();
            }
        }
    );

    const handleDeledtButtonOnClick = () => {
        if(window.confirm("유저가 삭제됩니다. 정말 삭제하시겠습니까?")) {
            deleteMutation.mutate();
        }
    }
    
    const handleCheckBoxOnChange = (userId) => {
        setCheckedIds((ids) => {
            if (ids.includes(userId)) {
                return ids.filter(id => id !== userId);
            } else {
                return [...ids, userId];
            }
        });
    };

    const handleOnPageChange = (e) => {
        setSelectPage(e.selected + 1);
        navigate(`/admin/main/user?page=${e.selected + 1}${name ? `&name=${name}` : ''}&limit=${limit}`);
    }

    return (
        <div css={s.mainBox}>
            <h1>유저 관리</h1>
            <AdminSearch setPageCount={setPageCount} type={"name"} />
            <div css={s.buttonLayout}>
                <button onClick={() => setOpenModal(true)}>수정</button>
                <UserEditModal isOpen={openModal} onClose={closeModal} users={users} checkId={checkedIds}/> 
                <button onClick={handleDeledtButtonOnClick}>삭제</button>
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
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td css={s.productItem}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckBoxOnChange(user.userId)}
                                    checked={checkedIds.includes(user.userId)}
                                />
                            </td>
                            <td css={s.productItem}>{index + 1}</td>
                            <td css={s.productItem}>{user.name}</td>
                            <td css={s.productItem}>{user.username}</td>
                            <td css={s.productItem}>{user.email}</td>
                            <td css={s.productItem}>{user.phoneNumber}</td>
                            <td css={s.productItem}>{user.createdAt}</td>
                        </tr>
                    ))}
                </table>
            </div>
                <div css={s.pageNumber}>
                    <ReactPaginate
                        breakLabel="..."
                        previousLabel={<><MdNavigateBefore /></>}
                        nextLabel={<><MdNavigateNext /></>}
                        pageCount={pageCount}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={5}
                        onPageChange={handleOnPageChange}
                    />
                </div>
        </div>
    );
}

export default UserView;