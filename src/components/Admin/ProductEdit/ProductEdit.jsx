/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import AdminSearch from "../AdminSearch/AdminSearch";
import { instance } from "../../../apis/util/instance";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import ReactPaginate from "react-paginate";

function ProductEdit(props) {

    const [productList, setProductList] = useState([]);
    const [checkedIds, setCheckedIds] = useState([]);
    const [searchParam] = useSearchParams();
    const keyword = searchParam.get("keyword");
    const [totalPageCount, setTotalPageCount] = useState(1);
    const limit = 10;
    const navigate = useNavigate();

    // 상품 불러오는 쿼리
    const productQuery = useQuery(
        ["productQuery"],
        async () => {
            const response = await instance.get(`/admin/product?page=${totalPageCount}&limit=${limit}`);
            setProductList(response?.data?.products);
            console.log(response?.data?.products);
        },
        {
            retry: 0,
            refetchOnWindowFocus: 0,
            onSuccess: (response) => {
                setTotalPageCount(
                    response?.data?.count % limit === 0
                        ? response?.data?.count / limit
                        : Math.floor(response?.data?.count / limit) + 1)
            }
        }
    );

    const searchProduct = useQuery(
        ["searchQuery", keyword],
        async () => {
            const response = await instance.get(`/admin/product/search?page=${totalPageCount}&title=${keyword}&limit=${limit}`); // 페이지네이션 하기
            setProductList(response?.data?.products);
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: (response) => {
                setTotalPageCount(
                    response?.data?.count % limit === 0
                        ? response?.data?.count / limit
                        : Math.floor(response?.data?.count / limit) + 1)
            }
        }
    );

    const handleCheckBoxOnChange = (productId) => {
        console.log(productId);
        setCheckedIds((ids) => {
            if (ids.includes(productId)) {
                return ids.filter(id => id !== productId);
            } else {
                return [...ids, productId];
            }
        });
    };

    const deleteMutation = useMutation(
        async () => {
            console.log(checkedIds);
            await instance.delete("/admin/product", { data: { checkedIds } });
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                alert("삭제가 완료되었습니다.");
                productQuery.refetch();
            }
        }
    );

    // const hadleModifyButtonOnClick = async () => {
    //     try {
    //         const response = await instance.put("/admin/main/modify", productList);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleOnPageChange = (e) => {
        navigate(`/admin/main/product?page=${e.selected + 1}`);
    }

    return (
        <div css={s.mainBox}>
            <h1>상품 관리</h1>
            <AdminSearch />
            <div css={s.buttonLayout}>
                <button>수정</button>
                <button onClick={() => deleteMutation.mutateAsync()}>삭제</button>
            </div>
            <div css={s.container}>
                <table css={s.theadLayout}>
                    <tr>
                        <td css={s.theadItems}>선택</td>
                        <td css={s.theadItems}>카테고리</td>
                        <td css={s.theadItems}>서브 카테고리</td>
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
                    {productList?.map(product => (
                        <tr key={product.id}>
                            <td css={s.productItem}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckBoxOnChange(product.productId)}
                                    checked={checkedIds.includes(product.productId)}
                                />
                            </td>
                            {
                                product?.productCategories?.map(category => (
                                    <td css={s.productItem} key={category.category.categoryId}>{category.category.name}</td>
                                ))
                            }
                            {
                                product?.semiCategories?.map(category => (
                                    <td css={s.productItem} key={category.semiCategoryId}>{category.name}</td>
                                ))
                            }
                            <td css={s.productItem}>{product.title}</td>
                            <td css={s.productItem}>{product.origin}</td>
                            <td css={s.productItem}>{product.price}</td>
                            <td css={s.productItem}>{product.stock}</td>
                            <td css={s.productItem}>{product.salesCount}</td>
                            <td css={s.productItem}>{product.createdDate}</td>
                        </tr>
                    ))}
                    {/* </tbody> */}
                </table>
            </div>
            <div css={s.pageNumber}>
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<><MdNavigateBefore /></>}
                    nextLabel={<><MdNavigateNext /></>}
                    pageCount={5}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handleOnPageChange}
                />
            </div>
        </div>
    );
}

export default ProductEdit;
