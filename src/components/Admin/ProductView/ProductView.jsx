import React, { useState } from 'react';

function ProductView(props) {

    const [product, setProduct] = useState({
        category: "",
        productName: "",
        money: "",
        origin: "",
        salesCount: "",
        stock: "",
        createdDate: ""
    })
    return (
        <div>
            <h1>상품 상세 조회 페이지 입니다</h1>
                {/* 
                    이름
                    카테고리
                    가격
                    원산지
                    판매수량
                    재고수량
                    등록일자
                */}
        </div>
    );
}

export default ProductView;