/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import *as s from './style';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getNewProductApi } from '../../../apis/productApi';


function NewProductView(props) {

    return (
        <div css={s.layout}>
        <div css={s.contentLayout}>
            <table css={s.tableLayout}>
                <tbody css={s.menuLayout}>
                    <tr>
                        <td>
                            <div css={s.menuList}>
                                    <div css={s.imgLayout}>
                                        <Link>
                                            <img src="" />
                                        </Link>
                                    </div>
                                    <div css={s.productLayout}>
                                        <h2>aa</h2>
                                        <h2>22</h2>
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

export default NewProductView;