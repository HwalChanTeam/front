/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import MainSearch from '../../MainSearch/MainSearch';
import *as s from './style';

// 이름
// 카테고리
// 가격
// 원산지
// 판매수량
// 재고수량
// 등록일자

/*
    체크박스를 눌렀을 때 하나만 체크 되도록 
    최신 날짜로 조회되게

*/
function ProductEdit(props) {

    const [ checked, setChecked ] = useState(false);

    const productList = [{ 
        productName: ""
    }];

    const handleCheckBoxOnChange = (product) => {
        if(checked === product) {
            setChecked(false);
        } else {
            setChecked(product);
        }
    }

    return (
        <div css={s.mainBox}>
            <h1>상품 관리 페이지</h1>
            <MainSearch />
            <div css={s.container}>
                <table css={s.tableLayout}>
                    <tbody css={s.tbodyLayout}>
                        { productList.map((product) => (
                            <tr css={s.layout}>
                                <td css={s.listBox}>
                                    <input type="checkbox" name="productName" 
                                        onChange={() => handleCheckBoxOnChange(product.productName)} 
                                        checked={checked === product.productName}/>
                                    <span>[냉동]</span>
                                    <span>상품 이름</span>
                                    <span>11,000</span>
                                    <span>대한민국</span>
                                    <span>100</span>
                                    <span>500</span>
                                    <span>2024-10-10</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div css={s.buttonLayout}>
                <button>수정하기</button>
                <button>삭제하기</button>
            </div>
        </div>
    );
}

export default ProductEdit;