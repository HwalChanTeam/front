import React, { useCallback, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from "../../../apis/util/instance";
import { v4 as uuid } from 'uuid';
import { storage } from "../../../firebase/firebase";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { menus } from "../../../constants/mainMenus";

function ProductRegister(props) {

    const [isUploading, setUploading] = useState(false);

    const [ contentsUrl, setContentsUrl ] = useState([]);

    const [product, setProduct] = useState({
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
            const response = await instance.post("/admin/product/add", product);
            console.log(response)
            alert("상품 등록이 완료되었습니다.");
        } catch (e) {
            console.error(e);
            // 중복되었을때 에러
        }
        setProduct({
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

                            if (type === "thumbnailImg" && urls.length === 1) {
                                setProduct((product) => ({
                                    ...product,
                                    thumbnailImg: urls[0]
                                }));
            
                            } else if (type === "contentsImg") {
                                setProduct((product) => ({
                                    ...product,
                                    contentsImg:  [...new Set([...product.contentsImg, ...urls])]
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
            <h1>상품 등록</h1>
            <div css={s.mainBox}>
                <div css={s.registerBox}>
                    <div css={s.inputBox}>
                        <div>
                            <label for="category">카테고리</label>
                            <select
                                name="categoryId"
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
                            <label for="origin">상품 설명</label>
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
                    </div>
                </div>
                <div css={s.rightBox}>
                    {
                        // 상품 이미지(thumbnailImg) 등록을 눌렀을 때 이미지가 옆으로 뜨도록 설정 
                        isUploading && (
                            <>
                                <p>상품 이미지</p>
                                <div css={s.thumbnailImgBox}>
                                    <img src={product.thumbnailImg} />
                                </div>
                            </>
                        )
                    }
                    {
                        // 상세 이미지(contentsImg) 등록을 눌렀을 때 이미지가 옆으로 뜨도록 설정
                        isUploading && ( 
                            <>
                                <div css={s.contentsImgLayout}>
                                    <div css={s.contentsImgBox}>
                                        <img src={product.contentsImg[0]} />
                                        <img src={product.contentsImg[1]} />
                                        <img src={product.contentsImg[2]} />
                                        <img src={product.contentsImg[3]} />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductRegister;
