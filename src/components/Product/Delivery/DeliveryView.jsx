import React from 'react';
import { useParams } from 'react-router-dom';

function DeliveryView(props) {
    const { id } = useParams();

    return (
        <div style={{marginTop: "80px"}}>
            <img src="https://www.omealdang.com/fserver//files/ckeditor/202236/1662528622_0.jpg" />
        </div>
    );
}

export default DeliveryView;