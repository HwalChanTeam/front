/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import *as s from './style';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getNewProductApi } from '../../../apis/productApi';
import { instance } from '../../../apis/util/instance';
import ProductList from '../../ProductList/ProductList';

function NewProductView(props) {

    // 해당 상품 클릭시 해당하는 상품페이지로 넘어가는
    const productPath = (productId) => `/product/${productId}`;

    const [newProductList, setNewProductList] = useState([]);


    const allNewProduct = useQuery(
        "newProducts",
        async () => {
            return await instance.get("/user/public/new");
        },
        {
            onSuccess: (response) => {
                const responseData = response.data // td의 배열 길이 ( 8개 )
                let newProducts = responseData.length
                let result = []
                // 배열을 5개씩으로 분류 하도록 하고 결과값이 소수가 나올경우 정수로 변환시켜주기 위해 floor 사용함  
                // productList % 5를 했을 때 나머지가 0이면 그대로 몫울 1로 두고 아니면 그 몫에 1을 더해라 
                let num = Math.floor(newProducts % 5 === 0 ? newProducts / 5 : (newProducts / 5) + 1)  // 나머지 존재, 2까지 반복 / num = 2
                for (let i = 0; i < num; i++) {
                    let newProductArray = []
                    // 1. j < 2 - 1 === 0 
                    for (let j = 0; j < (num - 1 === i ? (newProducts % 5 === 0 ? 5 : newProducts % 5) : 5); j++) {
                        newProductArray[j] = responseData[j + (i * 5)]
                    }
                    result[i] = newProductArray
                }
                setNewProductList(result)
            },
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    // useEffect(() => {
    //     const textArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"] // response.data /td
    //     let newTextArray = []
    //     let texts = textArray.length
    //     let result = [] // newProductList / table

    //     // Math.ceil(textArray.length/3) + 1

    //     // textArray에서 전부 한번씩 추출해서
    //     // newTextArray 3개씩 나눠서 들어가야함
    //     let num =  Math.floor(texts % 3 === 0 ?  texts / 3 : (texts / 3) + 1) 
    //     for(let i = 0; i < num; i++ ) { // tr
    //         let inTextArray = []
    //         for(let j = 0; j < (num - 1 === i ? (texts % 3 === 0 ? 3 : texts % 3) : 3) ; j++) { // tr:0 = td:{a, b, c} 1 = {d, e, f} 2 = {g, h, i} 3 = {j}
    //             inTextArray[j] = textArray[j + (i * 3)] 
    //         }
    //         result[i] = inTextArray
    //     }
    //     console.log(result)
    // }, [])

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <ProductList productList={newProductList} productPath={productPath} />
            </div>
        </div>
    );
}

export default NewProductView;