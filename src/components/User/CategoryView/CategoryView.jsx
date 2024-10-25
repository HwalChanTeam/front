/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom';
import *as s from './style';
import { useState } from 'react';
import MainMenu from '../../MainMenu/MainMenu';

function CategoryView(props) {

    return (
        <div css={s.layout}>
            <div css={s.contentLayout}>
                <table css={s.tableLayout}>
                    <tbody css={s.menuLayout}>
                        <td>
                            <tr></tr>
                        </td>
                    </tbody >
                </table >
            </div>
        </div >
    );
}

export default CategoryView;