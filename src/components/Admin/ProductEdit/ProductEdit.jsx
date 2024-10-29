/** @jsxImportSource @emotion/react */
import { useState } from "react";
import MainSearch from "../../MainSearch/MainSearch";
import * as s from "./style";
import AdminSearch from "../AdminSearch/AdminSearch";
import { instance } from "../../../apis/util/instance";
import { useQuery } from "react-query";

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
        createDate: "2024-10-11",
    },
    {
        id: 2,
        category: "냉동",
        title: "상품이름2",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11",
    },
    {
        id: 3,
        category: "냉동",
        title: "상품이름3",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11",
    },
    {
        id: 4,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11",
    },
    {
        id: 5,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11",
    },
    {
        id: 6,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11",
    },
    {
        id: 7,
        category: "냉동",
        title: "상품이름4",
        price: "1000",
        origin: "대한민국",
        stock: 10,
        salesCounts: 5,
        createDate: "2024-10-11",
    },
];

function ProductEdit(props) {

    // const [productList, setProductList] = useState(
    //     tempProductList.map((tempProduct) => ({ ...tempProduct, checked: false }))
    // );

    const [productList, setProductList] = useState([]);

    const [searchParams, setSearchParams] = useState({
        page: 1,
        limit: 10,
    });

    const handleCheckBoxOnChange = (id) => {
        setProductList((productList) =>
            productList.map((product) =>
                product.id === id ? { ...product, checked: !product.checked } : product
            )
        );
    };

    // 상품 불러오는 쿼리
    const getProductQuery = useQuery(
        ["getProductQuery"],
        async () => {
            console.log(searchParams)
            return await instance.get("/admin/product", searchParams);
        },
        {
            onSuccess : (response) => {
                console.log(response)
                setProductList(response)
            },
            onError : (response) => {
                console.error(response)
            }
        }
    )

    const hadleModifyButtonOnClick = async () => {
        try {
            const response = await instance.put("/admin/main/modify/", productList);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteButtonOnClick = async () => {
        try {
            console.log(productList[0].id)
            const response = await instance.delete(`/admin/main/delete/${productList.checked.id}`)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div css={s.mainBox}>
            <h1>상품 관리</h1>
            <AdminSearch />
            <div css={s.buttonLayout}>
                <button onClick={hadleModifyButtonOnClick}>수정</button>
                <button onClick={() => handleDeleteButtonOnClick()}>삭제</button>
            </div>
            <div css={s.container}>
                <table css={s.theadLayout}>
                    <tr>
                        <td css={s.theadItems}>선택</td>
                        <td css={s.theadItems}>카테고리</td>
                        <td css={s.theadItems}>이름</td>
                        <td css={s.theadItems}>원산지</td>
                        <td css={s.theadItems}>가격</td>
                        <td css={s.theadItems}>재고</td>
                        <td css={s.theadItems}>판매량</td>
                        <td css={s.theadItems}>등록일자</td>
                    </tr>
                </table>
                <table css={s.tableLayout}>
                    {/* <tbody css={s.tbodyLayout}> */}
                    {productList.map((product) => (
                        <tr key={product.id}>
                            <td css={s.productItem}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckBoxOnChange(product.id)}
                                    checked={product.checked}
                                    id={product.id}
                                />
                            </td>
                            <td css={s.productItem}>{product.category}</td>
                            <td css={s.productItem}>{product.title}</td>
                            <td css={s.productItem}>{product.origin}</td>
                            <td css={s.productItem}>{product.price}</td>
                            <td css={s.productItem}>{product.stock}</td>
                            <td css={s.productItem}>{product.salesCounts}</td>
                            <td css={s.productItem}>{product.createDate}</td>
                        </tr>
                    ))}
                    {/* </tbody> */}
                </table>
            </div>
        </div>
    );
}

export default ProductEdit;
