/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import *as s from './style';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import { instance } from '../../../apis/util/instance';
import AdminSearch from '../AdminSearch/AdminSearch';
import DeliveryStartModal from '../../Modal/OrderModal/DeliveryStartModal/DeliveryStartModal';
import DeliveryEditModal from '../../Modal/OrderModal/DeliveryEditModal/DeliveryEditModal';

function ProductOrder(props) {
    // 모달 띄우는 상태 추가
    const [ openModal, setOpenModal ] = useState(false); // 배송등록 모달
    const [ openEditModal, setOpenEditModal ] = useState(false); // 배송 수정 모달 / 안만들면 등록창이랑 겹쳐버림

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
        setOpenEditModal(false); // 수정 모달창 닫기
    };

    // 주문 목록 조회
    const orderQuery = useQuery(
        ["useQuery"],
        async () => {
            const response = await instance.get("admin/order");
            setOrders(response?.data);
            console.log(response?.data)
        }
    );

    // 주문상태 - 고객의 행동에 따라 환불, 취소, 배송완료, 배송중으로 바꾸기 (배송중은 관리자가 바꾸게 하기)
    useEffect(() => {

    }, [])
    
    // 체크 할 시 하나씩 선택되도록 하기위해 orderId가 아닌 orderItemId 사용(각 orderItemId를 선택)
    // 체크박스 체크를 위한 함수
    const handleCheckBoxOnChange = (index) => {
        setCheckedIds((ids) => {
            if (ids.includes(index)) {
                return ids.filter(id => id !== index);
            } else {
                return [...ids, index];
            }
        });
    };

    const handleOnPageChange = (e) => {
        setPageCount(e.selected + 1);
        navigate(`/admin/main/order?page=${e.selected + 1}${keyword ? `&keyword=${keyword}` : ''}&limit=${limit}`);
    };

    // 수정 버튼 
    const handleModifyOnClick = () => {
        if(checkedIds.length === 1) {
            setOpenEditModal(true)
        } else {
            alert("해당 주문 목록을 선택해주세요.")
        }
    }

    return (
        <div css={s.mainBox}>
            <h1>주문 관리</h1>
            <AdminSearch />
            <div css={s.buttonLayout}>
                {/*<button onClick={() => setOpenModal(true)}>배송등록</button>
                <DeliveryStartModal isOpen={openModal} onClose={closeModal} orderQuery={orders} />*/}
                {
                    checkedIds.length >= 2 ?
                        <></>
                    :
                    <>
                        <button onClick={handleModifyOnClick}>수정</button>
                        <DeliveryEditModal isOpen={openEditModal} onClose={closeModal} orderQuery={orders} checkId={checkedIds}/>
                    </>
                }
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
                        <td css={s.theadItems}>결제</td>
                        <td css={s.theadItems}>결제상태</td>
                        <td css={s.theadItems}>주문상태</td>
                        <td css={s.theadItems}>주문일자</td>
                    </tr>
                </table>
                <table css={s.tableLayout}>
                    {/* <tbody css={s.tbodyLayout}> */}
                    {orders?.map((order) => (
                        order.orderItems?.map((item, index) => (
                            <tr key={index}>
                                <td css={s.productItem}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckBoxOnChange(index)} // 지금은 orderItemId가 null로 뜸 그래서 2개다 선택됨 
                                        checked={checkedIds.includes(index)}
                                    />
                                </td>
                                <td css={s.productItem}>{index + 1}</td>
                                <td css={s.productItem}>{order?.user?.username}</td>
                                <td css={s.productItem}>{order?.user?.name}</td>
                                <td css={s.productItem}>{item?.product?.title}</td> {/* 상품이름 */}
                                <td css={s.productItem}>{item?.product?.price.toLocaleString()}</td> {/* 상품가격 */}
                                <td css={s.productItem}>{item?.quantity}</td> {/* 상품수량 */}
                                <td css={s.productItem}> {/* 총 상품 금액 */}
                                    {order.totalAmount.toLocaleString()} 
                                </td> 
                                <td css={s.productItem}>{order?.payment?.paymentMethod}</td> {/* 결제 */}
                                <td css={s.productItem}>{order?.payment?.paymentStatus}</td> {/* 결제상태 */}
                                <td css={s.productItem}>{order?.orderStatus}</td>
                                <td css={s.productItem}>{order?.createdAt}</td>
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
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handleOnPageChange}
                />
            </div>
        </div>
    );
}

export default ProductOrder;