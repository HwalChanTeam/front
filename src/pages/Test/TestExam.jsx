import React, { useState } from "react";

const TestExam = () => {
    // 체크박스 상태를 관리할 배열
    const [checkedItems, setCheckedItems] = useState([]);

    // 샘플 데이터
    const items = [
        { id: 1, label: "상품 1" },
        { id: 2, label: "상품 2" },
        { id: 3, label: "상품 3" },
        { id: 4, label: "상품 4" },
    ];

    // 체크박스 클릭 핸들러
    const handleCheckboxChange = (id) => {
        setCheckedItems((prevChecked) => {
            if (prevChecked.includes(id)) {
                // 이미 체크된 경우: 체크 해제
                return prevChecked.filter(item => item !== id);
            } else {
                // 체크되지 않은 경우: 체크
                return [...prevChecked, id];
            }
        });
    };

    return (
        <div>
            <h1>체크박스 리스트</h1>
            {items.map(item => (
                <div key={item.id}>
                    <input
                        type="checkbox"
                        id={`checkbox-${item.id}`}
                        checked={checkedItems.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                    />
                    <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
                </div>
            ))}
        </div>
    );
};

export default TestExam;
