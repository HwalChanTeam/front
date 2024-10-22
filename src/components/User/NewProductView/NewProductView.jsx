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
];

function NewProductView(props) {

    const productPath = (productId) => `/product/${productId}`;

    return (
        <div css={s.layout}>
        <div css={s.contentLayout}>
            <table css={s.tableLayout}>
                <tbody css={s.menuLayout}>
                    {   
                        products.map((product) => (
                            <tr>
                                <td>
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

export default NewProductView;