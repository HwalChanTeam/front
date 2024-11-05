/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import *as s from './style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import Modal from '../../Modal/Modal';
import { instance } from '../../../apis/util/instance';
import AdminSearch from '../AdminSearch/AdminSearch';

function ProductOrder(props) {
    // 모달 띄우는 상태 추가
    const [openModal, setOpenModal] = useState(false);

    const [checkedIds, setCheckedIds] = useState([]);
    const [orders, setOrders] = useState([]);
    // 주문 상태 
    const [orderStatus, setOrderStatus] = useState(1); // 1: 배송준비중 1을 디볼트로 
    const [searchParam] = useSearchParams();
    const keyword = searchParam.get("keyword");
    const [pageCount, setPageCount] = useState(1);
    const limit = 20;
    const navigate = useNavigate();

    const closeModal = () => {
        setOpenModal(false); // 모달 닫기
    };

    // 주문 목록 조회
    const orderQuery = useQuery(
        ["useQuery"],
        async () => {
            const response = await instance.get("admin/order");
            console.log(response.data);
            setOrders(response?.data);
        }
    );

    // 주문상태 - 고객의 행동에 따라 환불, 취소, 배송완료, 배송중으로 바꾸기 (배송중은 관리자가 바꾸게 하기)
    useEffect(() => {

    }, [])

    const deleteMutation = useMutation(
        async () => {
            console.log(checkedIds);
            await instance.delete("/admin/order/", { data: { checkedIds } });
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                alert("삭제가 완료되었습니다.");
                orderQuery.refetch();
            }
        }
    );
    

    const handleCheckBoxOnChange = (orderId) => {
        console.log(orderId);
        setCheckedIds((ids) => {
            if (ids.includes(orderId)) {
                return ids.filter(id => id !== orderId);
            } else {
                return [...ids, orderId];
            }
        });
    };

    const handleOnPageChange = (e) => {
        setPageCount(e.selected + 1);
        navigate(`/admin/main/order?page=${e.selected + 1}${keyword ? `&keyword=${keyword}` : ''}&limit=${limit}`);
    }

    return (
        <div css={s.mainBox}>
            <h1>주문 관리</h1>
            <AdminSearch />
            <div css={s.buttonLayout}>
                <button onClick={() => setOpenModal(true)}>배송시작</button>
                <Modal isOpen={openModal} onClose={closeModal} />
                <button onClick={() => deleteMutation.mutateAsync()}>삭제</button>
            </div>
            <div css={s.container}>
                <table css={s.theadLayout}>
                    <tr>
                        <td css={s.theadItems}>선택</td>
                        <td css={s.theadItems}>번호</td>
                        <td css={s.theadItems}>고객아이디</td>
                        <td css={s.theadItems}>고객이름</td>
                        <td css={s.theadItems}>상품명</td>
                        <td css={s.theadItems}>상품가격</td>
                        <td css={s.theadItems}>주문수량</td>
                        <td css={s.theadItems}>주문금액</td>
                        <td css={s.theadItems}>주문상태</td>
                        <td css={s.theadItems}>주문일자</td>
                    </tr>
                </table>
                <table css={s.tableLayout}>
                    {/* <tbody css={s.tbodyLayout}> */}
                    {orders?.map((order) => (
                        order.orderItems?.map((item) => (
                            <tr key={order.orderId}>
                                <td css={s.productItem}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckBoxOnChange(order.orderId)}
                                        checked={checkedIds.includes(order.orderId)}
                                    />
                                </td>
                                <td css={s.productItem}>{order.orderId}</td>
                                <td css={s.productItem}>{order.user.username}</td>
                                <td css={s.productItem}>{order.user.name}</td>
                                <td css={s.productItem}>{item.product.title}</td> {/* 상품이름 */}
                                <td css={s.productItem}>{item.product.price.toLocaleString()}</td> {/* 상품가격 */}
                                <td css={s.productItem}>{item.quantity}</td> {/* 상품수량 */}
                                <td css={s.productItem}> {/* 총 상품 금액(수량 * 가격) : 3만원 이상일시 배송비 포함 x */}
                                    {((item.product.price) * (item.quantity) >= 30000
                                        ? (item.product.price) * (item.quantity) 
                                        : (item.product.price) * (item.quantity) + 3000).toLocaleString()} 
                                </td> 
                                <td css={s.productItem}>{order.orderStatus}</td>
                                <td css={s.productItem}>{order.createdAt}</td>
                            </tr>
                        ))
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

export default ProductOrder;