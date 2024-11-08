/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import *as s from './style';
import { useState } from 'react';

function InformationView({product}) {
    
    const { id } = useParams();

    // contentsImg1

    return (
        <div css={s.layout}>
            <div css={s.imgLayout}>
                <img src={product.contentsImg1} />
                <img src={product.contentsImg2} />
                <img src={product.contentsImg3} />
                <img src={product.contentsImg4} />
            </div>
        </div>
    );
}

export default InformationView;