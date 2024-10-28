/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedItemsAtom } from "../../apis/util/atom";
import { useMutation, useQuery } from "react-query";
import { deleteProductApi, getBasketProductsApi } from "../../apis/productApi";
import { FaPlus, FaEquals } from "react-icons/fa";
import { instance } from "../../apis/util/instance";

// 로그인 안하고 들어가면 로그인 페이지로 돌리기
// 구매하기 버튼 누르면 상품 구매 페이지로 넘기기
//

function ShoppingBasket(props) {
    const navigate = useNavigate();

    // 선택된 상품 구매 위한 atom 사용
    const [selectedProducts, setSelectedProducts] =
        useRecoilState(selectedItemsAtom); // atom 사용

    const [productList, setProductList] = useState([]); // 상품 목록 상태 추가

    // 전체 체크박스 기본 속성 - false
    const [isAllchecked, setIsAllchecked] = useState(false);

    // 장바구니 상품 가져오기
    const { data, isLoading, isError, refetch } = useQuery(
        "basketProducts",
        async () => {
            return await instance.get("/user/cart");
        },
        {
            onSuccess: (data) => setProductList(data),
            refetchOnWindowFocus: false, // 창 포커스 시 재요청 하지 않음
            retry: 1,
            // 데이터 가져오면 productList에 설정
        }
    );

    // 삭제 요청을 위한 mutation
    const mutation = useMutation(
        async (cartId, productId) => {
            return await instance.delete(`/api/cart/${cartId}/product/${productId}`);
        },
        {
            onSuccess: () => {
                refetch(); // 삭제 후 장바구니를 다시 불러오기
            },
        }
    );

    // 전체 체크박스 체인지 함수
    const handleAllCkeckBoxOnChange = () => {
        const checkState = !isAllchecked;
        setIsAllchecked(checkState);
        setProductList(
            productList.map((product) => ({ ...product, checked: checkState }))
        );
    };

    // 개별 체크박스 체인지 함수
    const handleCheckBoxOnChange = (productId) => {
        const updateProductList = productList.map((product) =>
            product.productId === productId
                ? { ...product, checked: !product.checked }
                : product
        );
        setProductList(updateProductList);

        // 모든 개별 체크박스가 선택된 경우 전체 체크박스도 체크
        const allChecked = updateProductList.every((product) => product.checked);
        setIsAllchecked(allChecked);
    };

    // 수량 변경 함수
    const handleQuantityChange = (index, number) => {
        const updatedProducts = productList.map((product, i) =>
            i === index
                ? { ...product, quantity: Math.max(1, product.quantity + number) }
                : product
        );
        setProductList(updatedProducts);
    };

    // 삭제 버튼 클릭 함수
    const handleDeleteButtonOnClick = (product) => {
        mutation.mutate({ cartId: product.cartId, productId: product.productId });
    };

    // 상품갯수 * 가격 함수
    const calculateTotalPrice = (product) => {
        return product.price * product.quantity;
    };

    // 총 상품금액, 총합계 계산 함수
    const calculateTotals = () => {
        const totalProductAmount = productList.reduce((total, product) => {
            return total + (product.checked ? calculateTotalPrice(product) : 0);
        }, 0);
        const deliveryFee = totalProductAmount >= 30000 ? 0 : 3000;
        const totalAmount = totalProductAmount + deliveryFee;

        return { totalProductAmount, totalAmount, deliveryFee };
    };

    const { totalProductAmount, totalAmount, deliveryFee } = calculateTotals();

    // 구매 버튼 클릭 시 작동
    const handleBuyButtonOnClick = () => {
        const selectedProducts = productList.filter((product) => product.checked);
        const selectedProductIds = selectedProducts.map((product) => ({
            productId: product.productId,
            quantity: product.quantity,
        }));

        if (selectedProductIds.length > 0) {
            setSelectedProducts(selectedProductIds);
            navigate(`/order`);
        } else {
            alert("주문할 상품을 선택해 주세요.");
        }
    };

    if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>데이터를 가져오는데 실패했습니다.</div>

    return (
        <div css={s.cartContainer}>
            {/* 장바구니 목록 섹션 */}
            <div css={s.cartListSection}>
                <div css={s.basketHeader}>
                    <h2 css={s.title}>장바구니</h2>
                </div>
                <div css={s.basketBox}>
                    <table css={s.productTable}>
                        <thead css={s.thead}>
                            <tr>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={handleAllCkeckBoxOnChange}
                                        checked={isAllchecked}
                                    />
                                </td>
                                <th>상품</th>
                                <th>상품명</th>
                                <th>수량</th>
                                <th>금액</th>
                                <th>할인</th>
                                <th>합계금액</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((product, index) => (
                                <tr key={product.productId}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            onChange={() => handleCheckBoxOnChange(product.productId)}
                                            checked={product.checked}
                                        />
                                    </td>
                                    <td>
                                        <div css={s.img}>
                                            <img src={product.thumbnailImg} />
                                        </div>
                                    </td>
                                    <td>
                                        <div css={s.productName}>{product.title}</div>
                                        <tr>{product.description}</tr>
                                    </td>
                                    <td>
                                        <button onClick={() => handleQuantityChange(index, -1)}>
                                            -
                                        </button>
                                        {product.quantity}
                                        <button onClick={() => handleQuantityChange(index, +1)}>
                                            +
                                        </button>
                                    </td>
                                    <td>{product.price.toLocaleString()} 원</td>
                                    <td>-</td>
                                    <td> {calculateTotalPrice(product).toLocaleString()} 원</td>
                                    <td>
                                        <button onClick={() => handleDeleteButtonOnClick(product)}>
                                            삭제
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div css={s.footerBox}>
                    <div css={s.priceBox}>
                        <div css={s.productAmount}>
                            <p>
                                총 {productList.filter((product) => product.checked).length}{" "}
                                개의 상품금액
                            </p>
                            <p>{totalProductAmount.toLocaleString()}원</p>
                        </div>
                        <FaPlus />
                        <div css={s.deliveryFee}>
                            <p>배송비</p>
                            <p>{deliveryFee.toLocaleString()}원</p>
                        </div>
                        <FaEquals />
                        <div css={s.totalAmount}>
                            <p>합계</p>
                            <p>{totalAmount.toLocaleString()}원</p>
                        </div>
                    </div>
                </div>
                <div css={s.buttonBox}>
                    <button onClick={handleBuyButtonOnClick}>주문하기</button>
                    <button onClick={() => setProductList([])}>전체삭제</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingBasket;
