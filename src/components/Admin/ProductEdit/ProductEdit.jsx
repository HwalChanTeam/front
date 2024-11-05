/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from "react";
import * as s from "./style";
import AdminSearch from "../AdminSearch/AdminSearch";
import { instance } from "../../../apis/util/instance";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { count } from "firebase/firestore";
import Modal from "../../Modal/Modal";
import { v4 as uuid } from 'uuid';
import ReactModal from "react-modal";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { menus } from "../../../constants/mainMenus";

function ProductEdit(props) {

    const [productList, setProductList] = useState([]);
    const [checkedIds, setCheckedIds] = useState([]);
    const [searchParam] = useSearchParams();
    const keyword = searchParam.get("keyword");
    // const page = searchParam.get("page");
    const [selectPage, setSelectPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const limit = 20;
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    // 모달을 여는 함수
    const openModal = () => setIsModalOpen(true);
    const [isUploading, setUploading] = useState(false);

    const [contentsUrl, setContentsUrl] = useState([]);

    const [product, setProduct] = useState({
        checkedIds: 0,
        title: "",
        price: 0,
        stock: 0,
        categoryId: 0,
        semiCategoryId: 0,
        description: "",
        origin: "대한민국",
        thumbnailImg: "",
        contentsImg: []
    });

    // 상품 불러오는 쿼리
    const productQuery = useQuery(
        ["productQuery", selectPage],
        async () => {
            console.log("전체");
            const response = await instance.get(`/admin/product?page=${selectPage}&limit=${limit}`);
            setProductList(response?.data?.products);
            console.log(response?.data);
            return response?.data;
        },
        {
            enabled: !keyword,
            retry: 0,
            refetchOnWindowFocus: 0,
            onSuccess: (response) => {
                console.log(response)
                setPageCount(
                    response?.data?.count % limit === 0
                        ? response?.data?.count / limit
                        : Math.floor(response?.data?.count / limit) + 1)
            }
        }
    );

    // 상품 검색 쿼리
    const searchProduct = useQuery(
        ["searchQuery", keyword, selectPage],
        async () => {
            const response = await instance.get(`/admin/product/search?page=${selectPage}&keyword=${keyword}&limit=${limit}`);
            setProductList(response?.data?.products);
        },
        {
            enabled: !!keyword,
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );

    useEffect(() => {
        if (productQuery.data) {
            const calculatedPageCount = productQuery.data?.count % limit === 0
                ? productQuery.data?.count / limit
                : Math.floor(productQuery.data?.count / limit) + 1;
            setPageCount(calculatedPageCount);
        }
        if (searchProduct.data) {
            const calculatedPageCount = searchProduct.data?.count % limit === 0
                ? searchProduct.data?.count / limit
                : Math.floor(searchProduct.data?.count / limit) + 1;
            setPageCount(calculatedPageCount);
        }
        console.log(productList)
    }, [productQuery.data, searchProduct.data]);

    const handleCheckBoxOnChange = (productId) => {
        console.log(productId);
        setCheckedIds((ids) => {
            if (ids.includes(productId)) {
                return ids.filter(id => id !== productId);
            } else {
                return [...ids, productId];
            }
        });
        setProduct((product) => ({
            ...product,
            checkedIds: productId
        }))
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
                setPageCount(selectPage ? parseInt(selectPage) : 1);
                productQuery.refetch();
                console.log("refetch됨");
            }
        }
    );


    const handleOnPageChange = (e) => {
        setSelectPage(e.selected + 1);
        navigate(`/admin/main/product?page=${e.selected + 1}${keyword ? `&keyword=${keyword}` : ''}&limit=${limit}`);
    }

    const handleMainCategoryChange = (e) => {
        const selectedId = parseInt(e.target.value, 10);
        setProduct((product) => ({
            ...product,
            categoryId: selectedId,
            semiCategoryId: 0
        }));
    };

    const handleSubCategoryChange = (e) => {
        const selectedId = parseInt(e.target.value, 10);
        setProduct((prevProduct) => ({
            ...prevProduct,
            semiCategoryId: selectedId
        }));
    };

    const inputOnChange = (e) => {
        const { name, value } = e.target;

        // 금액 입력일 때 숫자만 허용
        if (name === "price" && isNaN(value)) {
            return; // 숫자가 아닐 경우 아무 것도 하지 않음
        }
        if (name === "stock" && isNaN(value)) {
            return; // 숫자가 아닐 경우 아무 것도 하지 않음
        }
        setProduct((product) => ({
            ...product,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitOnClick = async () => {
        try {
            console.log(product);
            const response = await instance.put("/admin/product/edit", product);
            console.log(response)
            alert("상품 수정이 완료되었습니다.");
        } catch (e) {
            console.error(e);
            // 중복되었을때 에러
        }
        setProduct({
            checkedIds: 0,
            title: "",
            price: 0,
            stock: 0,
            categoryId: 0,
            semiCategoryId: 0,
            description: "",
            origin: "대한민국",
            thumbnailImg: "",
            contentsImg: []
        });
        setPageCount(selectPage ? parseInt(selectPage) : 1);
        productQuery.refetch();
        // window.location.reload();
    };


    const handleImageUpload = useCallback((type) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');

        if (type === "contentsImg") {
            input.setAttribute('multiple', 'multiple');
        }

        input.click();

        input.onchange = async () => {
            const files = Array.from(input.files);
            const urls = [];

            if (type === "contentsImg" && files.length > 4) {
                alert(`최대 4장의 이미지만 업로드할 수 있습니다.`);
                return;
            }

            const storage = getStorage();
            setUploading(true);
            files.forEach((file) => {
                const storageRef = ref(storage, `admin/product/${uuid()}_${file.name}`);
                const task = uploadBytesResumable(storageRef, file);
                console.log(storageRef)
                task.on(
                    'state_changed',
                    () => { }, // 업로드 중 상태 핸들링 (옵션)
                    (e) => {
                        console.error(e);
                        setUploading(false);
                    },
                    async () => {
                        try {
                            const url = await getDownloadURL(storageRef); // 업로드 완료 후 URL 가져오기
                            urls.push(url);
                            console.log(url);

                            if (type === "thumbnailImg" && urls.length === 1) {
                                setProduct((product) => ({
                                    ...product,
                                    thumbnailImg: urls[0]
                                }));

                            } else if (type === "contentsImg") {
                                setProduct((product) => ({
                                    ...product,
                                    contentsImg: [...new Set([...product.contentsImg, ...urls])]
                                }));
                            }
                        } catch (e) {
                            console.error(e);
                        } finally {
                            setUploading(false); // false로 할 시 이미지가 자동으로 사라짐 
                        }
                    }
                );
            });
        };
    }, []);

    return (
        <div css={s.layout}>
            <h1>상품 관리</h1>
            <AdminSearch setPageCount={setPageCount} />
            <div css={s.buttonLayout}>
                <button onClick={openModal} disabled={checkedIds.length !== 1}>수정</button>
                <ReactModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    style={{
                        overlay: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                        content: {
                            position: "static",
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "5px",
                            width: "400px",
                            maxWidth: "90%",
                            overflow: "auto",
                            inset: "auto",
                        },
                    }}
                >
                    <div css={s.modalLayout}>
                        <h1>상품 등록</h1>
                        <div css={s.mainBox}>
                            <div css={s.registerBox}>
                                <div css={s.inputBox}>
                                    <div>
                                        <label for="category">카테고리</label>
                                        <select
                                            name="categoryId"
                                            // value={checkedIds === productList.productId ?
                                            //     "" 
                                            //     :
                                            //     ""}
                                            value={product.categoryId}
                                            onChange={handleMainCategoryChange}
                                            css={s.selectBox}
                                        >
                                            {
                                                menus[0].subMenus.map(category => (
                                                    <option value={category.id}>{category.name}</option>
                                                ))
                                            }
                                        </select>
                                        <label for="semiCategory">서브 카테고리</label>
                                        <select
                                            name="semiCategoryId"
                                            value={product.semiCategoryId}
                                            onChange={handleSubCategoryChange}
                                            css={s.selectBox}
                                        >
                                            {
                                                menus[0].subMenus.find(menu => menu.id === product.categoryId)?.subSideMenus.map((subMenu) => (
                                                    <option key={subMenu.id} value={subMenu.id}>
                                                        {subMenu.name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <label for="title">상품명</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={product.title}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label for="price">금액</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={product.price}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label for="description">상품 설명</label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={product.description}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label for="origin">원산지</label>
                                        <input
                                            type="text"
                                            name="origin"
                                            value={product.origin}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div>
                                        <label for="stock">재고</label>
                                        <input
                                            type="number"
                                            name="stock"
                                            value={product.stock}
                                            onChange={inputOnChange}
                                        />
                                    </div>
                                    <div >
                                        <label>상품 이미지</label>
                                        <button onClick={() => handleImageUpload("thumbnailImg")}>상품 이미지 등록</button>
                                    </div>
                                    <div>
                                        <label>상세 이미지</label>
                                        <button onClick={() => handleImageUpload("contentsImg")}>상세 이미지 등록</button>
                                    </div>
                                </div>
                                <div css={s.buttonBox}>
                                    <button onClick={handleSubmitOnClick}>상품 등록</button>
                                    <button onClick={() => setIsModalOpen(false)}>취소</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactModal>
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
                                    <td css={s.productItem} key={category.category.categoryId}>{category.category.name}</td> // 카테고리
                                ))
                            }
                            {
                                product?.semiCategories?.map(category => ( // 데이터가 없을때 빈 td
                                    <td css={s.productItem} key={category.semiCategoryId}>{category.name}</td> /* 서브카테고리 */
                                ))
                            }
                            <td css={s.productItem}>{product.title}</td> {/* 상품명 */}
                            <td css={s.productItem}>{product.origin}</td>
                            <td css={s.productItem}>{product.price}</td>
                            <td css={s.productItem}>{product.stock}</td>
                            <td css={s.productItem}>{product.salesCount}</td>
                            <td css={s.productItem}>{product.createdDate}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div css={s.pageNumber}>
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<><MdNavigateBefore /></>}
                    nextLabel={<><MdNavigateNext /></>}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handleOnPageChange}
                />
            </div>
        </div>
    );
}

export default ProductEdit;
