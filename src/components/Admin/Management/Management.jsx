/** @jsxImportSource @emotion/react */
import { useQuery } from 'react-query';
import * as s from './style';
import { instance } from '../../../apis/util/instance';
import { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import ReactPaginate from 'react-paginate';

function Management(props) {
    const [sales, setSales] = useState([]);
    const [graph, setGraph] = useState([]);
    const [selectPage, setSelectPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const limit = 10;

    const graphData = useQuery(
        ["graphDataQuery"],
        async () => {
            const response = await instance.get("admin/sales/graph")
            return response?.data?.products
        },
        {
            enabled: true,
            retry: 0,
            refetchOnWindowFocus: 0,
            onSuccess: (response) => {
                const newTop5FoodsData = [];
                try {
                    for (let i = 0; i < 5; i++) {
                        newTop5FoodsData.push({
                            name: response[i]?.title,
                            amt: response[i]?.stock
                        })
                        setGraph(newTop5FoodsData);
                    }
                    console.log(newTop5FoodsData);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    )
    
    const businessData = useQuery(
        ["businessDataQuery"],
        async () => {
            return await instance.get("admin/sales/day")
        },
        {
            enabled: true,
            retry: 0,
            refetchOnWindowFocus: 0,
            onSuccess: (resopnse) => {
                console.log(resopnse?.data?.paymentList);
                setSales(resopnse?.data?.paymentList);
            }
        }
    )


    const truncate = (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    const handleOnPageChange = (e) => {
        setSelectPage(e.selected + 1);
        // navigate(`/admin/main/product?page=${e.selected + 1}${keyword ? `&keyword=${keyword}` : ''}&limit=${limit}`);
    }

    return (
        <div css={s.mainBox}>
            <h1>매출 관리</h1>
            <div css={s.contentsBox}>
                <div css={s.topBox}>
                    <h3>매출량 TOP5</h3>
                    <LineChart width={1000} height={500} data={graph}>
                        <XAxis dataKey="name" tick={{ fontSize: 20 }} tickFormatter={(name) => truncate(name, 10)} />
                        <YAxis />
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="amt" stroke="#8884d8" />
                    </LineChart>
                </div>
                <div css={s.container}>
                    <table css={s.theadLayout}>
                        <tr>
                            <td css={s.productItem}>
                                <input type="checkbox" />
                            </td>
                            <td css={s.theadItems}>주문ID</td>
                            <td css={s.theadItems}>주문방법</td>
                            <td css={s.theadItems}>결제상태</td>
                            <td css={s.theadItems}>구매자</td>
                            <td css={s.theadItems}>주문 상품</td>
                            <td css={s.theadItems}>수량</td>
                            <td css={s.theadItems}>금액</td>
                            <td css={s.theadItems}>주문 날짜</td>
                        </tr>
                    </table>
                    <table css={s.theadLayout}>
                        {sales?.map(sales => {
                            return (
                                <tr key={sales.paymentId}>
                                    <td css={s.productItem}>
                                        <input type="checkbox" />
                                    </td>
                                    <td css={s.productItem}>{sales?.paymentId}</td>
                                    <td css={s.productItem}>{sales?.paymentStatus}</td>
                                    <td css={s.productItem}>{sales?.paymentMethod}</td>
                                    <td css={s.productItem}>{sales?.order?.userList[0]?.name}</td>
                                    <td css={s.productItem}>{sales?.orderItem?.product?.title}</td>
                                    <td css={s.productItem}>{sales?.orderItem?.quantity}</td>
                                    <td css={s.productItem}>{sales?.amount}</td>
                                    <td css={s.productItem}>{sales?.paymentDate}</td>
                                </tr>
                            )
                        })}
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
        </div>
    );
}

export default Management;
