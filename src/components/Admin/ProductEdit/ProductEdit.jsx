/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import MainSearch from '../../MainSearch/MainSearch';
import *as s from './style';
import AdminSearch from '../AdminSearch/AdminSearch';
import { instance } from '../../../apis/util/instance';

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

    const [ checked, setChecked ] = useState([]);

    const productList = [{ 
        id: 0,
        category: "",
        title: "",
        price: "",
        origin: "",
        stock: 0,
        salesCounts: 0,
        createData: ""
    }];

    const handleCheckBoxOnChange = (id) => {
        setChecked((prevChecked) => {
            if (prevChecked.includes(id)) {
                // 이미 체크된 경우: 체크 해제
                return prevChecked.filter(item => item !== id);
            } else {
                // 체크되지 않은 경우: 체크
                return [...prevChecked, id];
            }
        });
    };

    const hadleModifyOnClick = async() => {
        const response = await instance.put(`/admin/modify/${productList.id}`)
    }

    return (
        <div css={s.mainBox}>
            <h1>상품 관리 페이지</h1>
            <AdminSearch />
            <div css={s.container}>
                <table css={s.tableLayout}>
                    <tbody css={s.tbodyLayout}>
                        { productList.map((product) => (
                            <tr css={s.layout} key={2}>
                                <td css={s.listBox}>
                                    <input type="checkbox"
                                        onChange={() => handleCheckBoxOnChange(product.id)} 
                                        checked={checked} id={`checkbox-${product.id}`}/>
                                    <span>[냉동]</span>
                                    <span>{product.title}</span>
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
                <button onClick={hadleModifyOnClick}>수정하기</button>
                <button>삭제하기</button>
            </div>
        </div>
    );
}

export default ProductEdit;