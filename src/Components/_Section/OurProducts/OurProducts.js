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
                    {data.title()}
                </h1>
                <div className="desktopOnly">
                    <div className="desktop-products-container">
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
                </div>
                <div className="mobileOnly">
                    {
                        <>
                            <MobileProductTile {...data.products[0][0]} />
                            <MobileProductTile {...data.products[1][0]} />
                        </>
                    }
                </div>
                <p className="bulkOrderText">
                    {data.bulkOrderText()}
                </p>
            </div>
        </div>
    );
};

export default Scrolling({ scrollId: "ourProducts" })(OurProducts);