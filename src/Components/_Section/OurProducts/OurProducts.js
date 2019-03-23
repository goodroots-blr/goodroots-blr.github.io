import React, { useState } from 'react';
import ProductTile from './../../_UI/ProductTile/ProductTile';
import MobileOverlay from './../../_UI/MobileOverlay/MobileOverlay';
import RadioButtons from './../../_UI/RadioButtons/RadioButtons';
import MobileProductTile from './../../_UI/MobileProductTile/MobileProductTile';
import Scrolling from './../../_UI/Scrolling/Scrolling';
import SessionStorage, { STORE_NAME } from './../../../resources/helpers/SessionStorage'
import './OurProducts.scss';

const OurProducts = ({ data }) => {
    let results = {};
    const [toggle, setToggle] = useState(false);
    const [products, setProducts] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(undefined)
    const handleClick = (category) => {
        document.body.classList.add('productOverlay--open');
        setSelectedProduct(category)
        setToggle(true)
    }
    const onCloseClick = () => {
        setSelectedProduct('')
        setToggle(false)
        document.body.classList.remove('productOverlay--open');
        SessionStorage.clear(STORE_NAME)
    }
    const onProductionSelection = (obj) => {
        const existingProducts = JSON.parse(SessionStorage.get(STORE_NAME)) || {};
        setProducts(existingProducts);
        SessionStorage.set(STORE_NAME, { ...existingProducts, ...obj });
    }
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
                                            <ProductTile key={i} {...product} onClick={handleClick} />
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
                            <MobileProductTile onClick={handleClick} {...data.products[0][0]} />
                            <MobileProductTile onClick={handleClick} {...data.products[1][0]} />
                        </>
                    }
                </div>
                <p className="bulkOrderText">
                    {data.bulkOrderText()}
                </p>
            </div>
            {toggle && <MobileOverlay>
                <RadioButtons
                    products={products}
                    onProductionSelection={onProductionSelection}
                    selectedProduct={selectedProduct}
                    onCloseClick={onCloseClick} />
            </MobileOverlay>}
        </div>
    );
};

export default Scrolling({ scrollId: "ourProducts" })(OurProducts);