/** @jsxImportSource @emotion/react */
import CategorySalesPie from './CategorySales/CategorySales';
import SalesTrend from './SalesTrend/SalesTrend';
import StockVolume from './StockVolume/StockVolume';
import * as s from './style';
import Top5Foods from './Top5Foods/Top5Foods';

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

const top5FoodsData = [
    { title: '부대찌개', sales: 150 },
    { title: '감자탕', sales: 100 },
    { title: '누룽지탕', sales: 350 },
    { title: '완자', sales: 300 },
    { title: '고기김치찌개', sales: 200 },
];

const categorySalesData = [
    { id: '국,탕,찌개', label: '국,탕,찌개', value: 400, color: 'hsl(205, 70%, 50%)' },
    { id: '밀키트', label: '밀키트', value: 300, color: 'hsl(100, 70%, 50%)' },
    { id: '안주', label: '안주', value: 200, color: 'hsl(50, 70%, 50%)' },
    { id: '간식', label: '간식', value: 150, color: 'hsl(10, 70%, 50%)' },
    { id: '기타', label: '기타', value: 100, color: 'hsl(280, 70%, 50%)' },
];

function Management(props) {
    return (
        <div css={s.mainBox}>
            <h1>매출 관리</h1>
            aaa
            {/* 
                1. 판매량 인기 순위 top 5
                2. 판매량 추이
                3. 수익금 추이
                4. 
                */}
            <div css={s.contentsBox}>
                <div css={s.leftBox}>
                <h3>매출량 TOP5</h3>
                <Top5Foods data={top5FoodsData} />
                <h3>매출 추이</h3>
                <SalesTrend data={salesTrendData} />
                </div>
                <div css={s.rightBox}>
                <h3>항목별 판매량</h3>
                <CategorySalesPie data={categorySalesData} />
                </div>
            </div>
        </div>
    );
}

export default Management;
