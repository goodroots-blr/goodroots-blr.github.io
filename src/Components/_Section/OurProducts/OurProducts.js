import React from 'react';
import ProductTile from './../../_UI/ProductTile/ProductTile';
import Scrolling from './../../_UI/Scrolling/Scrolling'
import './OurProducts.scss';

const OurProducts = ({data}) => {
    return (
        <div className="ourProducts section-top-spacing">
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
        </div>
    );
};

export default Scrolling({ scrollId: "ourProducts" })(OurProducts);