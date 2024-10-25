/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import *as s from './style';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getPopularityProudctApi } from '../../../apis/productApi';

function PopularityProduct(props) {

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <div css={s.subLayout}>
                        <h2>BEST(TOP10)</h2>
                    </div>

                    <tbody css={s.menuLayout}>
                        <tr>
                            <td>
                                <div css={s.numberLayout}>
                                    <h1>1</h1>
                                </div>
                                <div css={s.menuList}>
                                        <div css={s.imgLayout}>
                                            <Link>
                                                <img src="" />
                                            </Link>
                                        </div>
                                        <div css={s.productLayout}>
                                            <h2>aa</h2>
                                            <h2>33</h2>
                                        </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PopularityProduct;