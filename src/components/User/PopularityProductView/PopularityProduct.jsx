/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import *as s from './style';

const products = [
    {
        id: 1,
        img: "https://semie.cooking/image/contents/recipe/ee/hy/xdlvlsdq/131722691qqag.jpg",
        name: "부대찌개",
        price: "11,000",
    },
    {
        id: 2,
        img: "",
        name: "bbbb",
        price: "11,000"
    },
    {
        id: 3,
        img: "",
        name: "cccc",
        price: "11,000"
    },
    {
        id: 4,
        img: "",
        name: "dddd",
        price: "11,000"
    },
    {
        id: 5,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        id: 6,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        id: 7,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        id: 8,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        id: 9,
        img: "",
        name: "ffff",
        price: "11,000"
    },
    {
        id: 10,
        img: "",
        name: "ffff",
        price: "11,000"
    },
];

function PopularityProduct(props) {

    const productPath = (productId) => `/product/${productId}`;

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>BEST(TOP10)</h2>
                    </div>

                    <tbody css={s.menuLayout}>
                    {   
                        products.map((product) => (
                            <tr>
                                <td>
                                    <div css={s.numberLayout}>
                                        <h1>01</h1>
                                    </div>
                                    <div css={s.menuList}>
                                            <div css={s.imgLayout}>
                                                <Link 
                                                    key={product.id}
                                                    to={productPath(product.id)}>
                                                        <img src={product.img} />
                                                </Link>
                                            </div>
                                            <div css={s.productLayout}>
                                                <h2>{product.name}</h2>
                                                <h2>{product.price}</h2>
                                            </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PopularityProduct;