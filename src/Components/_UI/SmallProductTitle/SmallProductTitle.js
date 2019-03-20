import React from 'react';
import Stepper from './../Stepper/Stepper'
import { ourProductsData } from './../../../resources/data'
import './SmallProductTitle.scss'

const SmallProductTitle = ({ data }) => {
    return (
        <div className="smallProductTitle">
            <div className="smallProductTitle-left">
                <img src={ourProductsData.products[0].img} alt="hello" />
                <Stepper />
            </div>
            <div className="smallProductTitle-right">
                <p className="product-name">Alphanso</p>
                <p className="product-quantity">1 dozen</p>
                <p className="product-price">1000</p>
            </div>
        </div>
    );
};

export default SmallProductTitle;