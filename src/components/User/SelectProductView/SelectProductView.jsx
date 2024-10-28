import React from 'react';
import { Route, Routes } from 'react-router';
import NewProductView from '../NewProductView/NewProductView';
import BestProduct from '../BestProductView/BestProduct';
import Review from '../Review/Review';

function SelectProductView(props) {
    return (
        <div>
            <Routes>
                <Route path="/user/newproduct" element={ <NewProductView /> } />
                <Route path="/user/best" element={ <BestProduct /> } />
                <Route path="/user/review" element={ <Review /> } /> 
            </Routes>
        </div>
    );
}

export default SelectProductView;