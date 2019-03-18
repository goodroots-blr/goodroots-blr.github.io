import React from 'react';
import ProductTile from './../../_UI/ProductTile/ProductTile';
import './OurProducts.scss';
import {
    Element,
} from "react-scroll";

const OurProducts = ({data}) => {
    return (
        <Element name="ourProducts" className="ourProducts">
            <div className="container">
                <h1 className="main-title">
                    <strong>Our</strong> products
                </h1>
                <div className="products">
                    {data.products.map((product, i) => (
                        <ProductTile key={i} {...product} />
                    ))}
                </div>
                <p>
                    {data.bulkOrderText()}
                </p>
            </div>
        </Element>
    );
};

export default OurProducts;