import React from 'react';
import ProductTile from './../../_UI/ProductTile/ProductTile';
import MobileProductTile from './../../_UI/MobileProductTile/MobileProductTile';
import Scrolling from './../../_UI/Scrolling/Scrolling'
import './OurProducts.scss';

const OurProducts = ({ data }) => {
    return (
        <div className="ourProducts section-top-spacing">
            <div className="container">
                <h1 className="main-title">
                    <strong>Our</strong> products
                </h1>
                <div className="desktopOnly">
                    {
                        data.products.map((products) => {
                            return (
                                <div className="products">
                                    {products.map((product, i) => (
                                        <ProductTile key={i} {...product} />
                                    ))}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mobileOnly">
                    {
                        data.products.map((products) => {
                            return (
                                <div className="products">
                                    {products.map((product, i) => (
                                        <MobileProductTile key={i} {...product} />
                                    ))}
                                </div>
                            )
                        })
                    }
                </div>
                <p>
                    {data.bulkOrderText()}
                </p>
            </div>
        </div>
    );
};

export default Scrolling({ scrollId: "ourProducts" })(OurProducts);