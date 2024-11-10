/** @jsxImportSource @emotion/react */
import { useQuery } from 'react-query';
import CategorySalesPie from './CategorySales/CategorySales';
import SalesTrend from './SalesTrend/SalesTrend';
import StockVolume from './StockVolume/StockVolume';
import * as s from './style';
import Top5Foods from './Top5Foods/Top5Foods';
import { instance } from '../../../apis/util/instance';
import { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

// 예시 데이터
const salesTrendData = [
    {
        id: 'sales',
        data: [
            { x: '2016', y: 100 },
            { x: '2017', y: 400 },
            { x: '2018', y: 500 },
            { x: '2019', y: 300 },
            { x: '2020', y: 500 },
            { x: '2021', y: 200 },
            { x: '2022', y: 700 },
            { x: '2023', y: 900 },
            { x: '2024', y: 800 },
        ]
    }
];

// const top5FoodsData = [
//     { title: '부대찌개', sales: 150 },
//     { title: '감자탕', sales: 100 },
//     { title: '누룽지탕', sales: 350 },
//     { title: '완자', sales: 300 },
//     { title: '고기김치찌개', sales: 200 },
// ];

const categorySalesData = [
    { id: '국,탕,찌개', label: '국,탕,찌개', value: 400, color: 'hsl(205, 70%, 50%)' },
    { id: '밀키트', label: '밀키트', value: 300, color: 'hsl(100, 70%, 50%)' },
    { id: '안주', label: '안주', value: 200, color: 'hsl(50, 70%, 50%)' },
    { id: '간식', label: '간식', value: 150, color: 'hsl(10, 70%, 50%)' },
    { id: '기타', label: '기타', value: 100, color: 'hsl(280, 70%, 50%)' },
];

function Management(props) {
    const [sales, setSales] = useState([]);
    const [graph, setGraph] = useState([]);
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
                } catch (e) {
                    console.error(e);
                }
            }
        }
    )

    const truncate = (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + '...' : str;
    };

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
                            return(
                            <tr key={sales.paymentId}>
                                <td css={s.productItem}>
                                    <input type="checkbox" />
                                </td>
                                <td css={s.productItem}>{sales?.paymentId}</td>
                                <td css={s.productItem}>{sales?.paymentStatus}</td>
                                <td css={s.productItem}>{sales?.paymentMethod}</td>
                                <td css={s.productItem}>{sales?.order?.user?.name}</td>
                                <td css={s.productItem}>{sales?.orderItem?.product?.title}</td>
                                <td css={s.productItem}>{sales?.orderItem?.quantity}</td>
                                <td css={s.productItem}>{sales?.amount}</td>
                                <td css={s.productItem}>{sales?.paymentDate}</td>
                            </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Management;
