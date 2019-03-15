import React from 'react';
import ProductTile from './../ProductTile';
import OurProductsData from './../../resources/data/OurProducts';
import './OurProducts.scss';
import {
    Element,
} from "react-scroll";
import data from './../../resources/data/Footer'

const OurProducts = props => {
    return (
        <Element name="ourProducts" className="ourProducts">
            <div className="container">
                <h1 className="main-title">
                    <strong>Our</strong> products
                </h1>
                <div className="products">
                    {OurProductsData.map((product, i) => (
                        <ProductTile key={i} {...product} />
                    ))}
                </div>
                <p>
                    For bulk orders or for regular supply of our mangoes please write to us at <u>{data.address.email}</u>
                </p>
            </div>
        </Element>
    );
};

export default OurProducts;