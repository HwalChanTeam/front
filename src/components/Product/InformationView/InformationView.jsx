/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import *as s from './style';

function InformationView(props) {
    
    const { id } = useParams();

    return (
        <div css={s.layout}>
            <div css={s.imgLayout}>
                <img src="" />
            </div>
        </div>
    );
}

export default InformationView;