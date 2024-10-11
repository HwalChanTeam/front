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
const tempProductList = [
    {
        id: 1,
        category: "냉동",
        title: "상품이름1",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 2,
        category: "냉동",
        title: "상품이름2",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 3,
        category: "냉동",
        title: "상품이름3",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 4,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 5,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 6,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 7,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 8,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 9,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 10,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 11,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 12,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 13,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },
    {
        id: 14,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11"
    },

]


function ProductEdit(props) {

    const [productList, setProductList] = useState(
        tempProductList.map(
            tempProduct => ({ ...tempProduct, checked: false })
        )
    );


    const handleCheckBoxOnChange = (id) => {
        setProductList(productList => productList.map(
            product => product.id === id ? ({ ...product, checked: !product.checked }) : product
        ));
    };


    const hadleModifyOnClick = async () => {
        try {
            const response = await instance.put(`/admin/modify/${productList[0].id}`);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div css={s.mainBox}>
            <h1>상품 관리 페이지</h1>
            <AdminSearch />
            <div css={s.container}>
                <table css={s.tableLayout}>
                    <tbody css={s.tbodyLayout}>
                        {productList.map((product) => (
                            <tr key={product.id}>
                                <td css={s.productItem}>
                                    <input type="checkbox"
                                        onChange={() => handleCheckBoxOnChange(product.id)}
                                        checked={product.checked} id={product.id} />
                                </td>
                                <td css={s.productItem}><span>{product.category}</span></td>
                                <td css={s.productItem}><span>{product.title}</span></td>
                                <td css={s.productItem}><span>{product.price}</span></td>
                                <td css={s.productItem}><span>{product.origin}</span></td>
                                <td css={s.productItem}><span>{product.stock}</span></td>
                                <td css={s.productItem}><span>{product.salesCounts}</span></td>
                                <td css={s.productItem}><span>{product.createDate}</span></td>
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