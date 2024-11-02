import React from 'react';

const StockVolume = ({ data }) => (
    <table>
        <thead>
            <tr>
                <th>상품명</th>
                <th>재고</th> 
                <th>판매량</th> 
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.stock}</td>
                    <td>{item.sales}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default StockVolume;
