/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import *as s from './style';
import { Link, useNavigate } from 'react-router-dom';

function FrozenProductView(props) {

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <tbody css={s.menuLayout}>
                        <tr>
                            <td>
                                <div css={s.menuList}>
                                    <div css={s.imgLayout}>
                                        <Link></Link>
                                    </div>
                                    <div css={s.productLayout}>
                                        <h2></h2>
                                        <h2></h2>
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

export default FrozenProductView;