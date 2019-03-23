import React, { useState } from 'react';
import ProductTile from './../../_UI/ProductTile/ProductTile';
import MobileOverlay from './../../_UI/MobileOverlay/MobileOverlay';
import RadioButtons from './../../_UI/RadioButtons/RadioButtons';
import MobileProductTile from './../../_UI/MobileProductTile/MobileProductTile';
import Scrolling from './../../_UI/Scrolling/Scrolling';
import SessionStorage, { STORE_NAME } from './../../../resources/helpers/SessionStorage'
import './OurProducts.scss';

const OurProducts = ({ data }) => {
    const availableProducts = [data.products["product-id-1"], data.products["product-id-2"]];
    const [toggle, setToggle] = useState(false);
    const [checkoutProducts, setCheckoutProducts] = useState({});
    const [selectedProductId, setSelectedProductId] = useState(undefined)

    const handleClick = (id, parentId) => {
        document.body.classList.add('productOverlay--open');
        setSelectedProductId(parentId)
        setToggle(true)
    }

    const onCloseClick = () => {
        setSelectedProductId('')
        setToggle(false)
        document.body.classList.remove('productOverlay--open');
        SessionStorage.clear(STORE_NAME)
    }

    const onProductionSelection = (obj) => {
        const existingProducts = JSON.parse(SessionStorage.get(STORE_NAME)) || {};
        setCheckoutProducts(existingProducts);
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
                            availableProducts.map((products) => {
                                return (
                                    <div className="products">
                                        {/* {products.options[0].map((product) => ( */}
                                        <ProductTile
                                            key={products.options[0].id}
                                            id={products.options[0].id}
                                            parentId={products.options[0].parentId}
                                            label={products.options[0].label}
                                            category={products.category}
                                            img={products.options[0].img}
                                            cost={products.options[0].price}
                                            onClick={handleClick} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mobileOnly">
                    {
                        availableProducts.map((products) => {
                            return (
                                <>
                                    {/* {products.options[0].map((product) => ( */}
                                    <MobileProductTile
                                        key={products.options[0].id}
                                        id={products.options[0].id}
                                        parentId={products.options[0].parentId}
                                        label={products.options[0].label}
                                        category={products.category}
                                        img={products.options[0].img}
                                        cost={products.options[0].price}
                                        onClick={handleClick} />
                                </>
                            )
                        })
                    }
                </div>
                <p className="bulkOrderText">
                    {data.bulkOrderText()}
                </p>
            </div>
            {toggle && <MobileOverlay>
                <RadioButtons
                    selectedProductId={selectedProductId}
                    availableItems={data.products}
                    checkoutProducts={checkoutProducts}
                    onProductionSelection={onProductionSelection}
                    onCloseClick={onCloseClick} />
            </MobileOverlay>}
        </div>
    );
};

export default Scrolling({ scrollId: "ourProducts" })(OurProducts);