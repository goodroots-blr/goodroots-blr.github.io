import React, { useState } from 'react';
import ProductTile from './../../_UI/ProductTile/ProductTile';
import MobileOverlay from './../../_UI/MobileOverlay/MobileOverlay';
import RadioButtons from './../../_UI/RadioButtons/RadioButtons';
import MobileProductTile from './../../_UI/MobileProductTile/MobileProductTile';
import Scrolling from './../../_UI/Scrolling/Scrolling';
import { connect } from 'react-redux';
import ProductActions from './../../../Containers/ProductActions';
import SessionStorage, { STORE_NAME } from './../../../resources/helpers/SessionStorage'
import './OurProducts.scss';

const getProductTile = (Component, availableProducts, handleClick) => {
    return (
        availableProducts.map((products) => {
            return (
                <div className="products"
                    key={`${products.options[0].id}`}
                >
                    {/* {products.options[0].map((product) => ( */}
                    <Component
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
    )
}

const OurProducts = (props) => {
    const availableProducts = [props.data.products["product-id-1"], props.data.products["product-id-2"]];
    const [toggle, setToggle] = useState(false);
    const handleClick = (id, parentId) => {
        document.body.classList.add('productOverlay--open');
        props.onProductSelection(parentId)

        setToggle(true)
    }

    const onCloseClick = () => {
        props.onProductSelection('parentId')
        setToggle(false)
        document.body.classList.remove('productOverlay--open');
    }

    return (
        <div className="ourProducts section-top-spacing">
            <div className="container">
                <h1 className="main-title">
                    {props.data.title()}
                </h1>
                <div className="desktopOnly">
                    <div className="desktop-products-container">
                        {getProductTile(ProductTile, availableProducts, handleClick)}
                    </div>
                </div>
                <div className="mobileOnly">
                    {getProductTile(MobileProductTile, availableProducts, handleClick)}
                </div>
                <p className="bulkOrderText">
                    {props.data.bulkOrderText()}
                </p>
            </div>
            {toggle && <MobileOverlay>
                <RadioButtons
                    //selectedProductId={selectedProductId}
                    availableItems={props.data.products}
                    onCloseClick={onCloseClick} />
            </MobileOverlay>}
        </div>
    );
};

export function mapStateToProps(state) {
    return {

    }
}

export function mapDispatchToProps(dispatch) {
    return {
        onProductSelection: function(token) {
            dispatch(ProductActions.onProductSelection(dispatch, token))
        },
    }
}

const withScroll = Scrolling({ scrollId: "ourProducts" })(OurProducts)
export default connect(mapStateToProps, mapDispatchToProps)(withScroll);