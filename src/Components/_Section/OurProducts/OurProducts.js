import React, { useState } from 'react';
import MobileOverlay from './../../_UI/MobileOverlay/MobileOverlay';
import RadioButtons from './../../_UI/RadioButtons/RadioButtons';
import MobileProductTile from './../../_UI/MobileProductTile/MobileProductTile';
import ProductTile from './../../_UI/ProductTile/ProductTile';
import Scrolling from './../../_UI/Scrolling/Scrolling';
import { connect } from 'react-redux';
import ProductActions from './../../../Containers/ProductActions';
import './OurProducts.scss';

const getProductTile = (Component, availableProducts, handleClick, type) => {
    return (
        availableProducts.map((products) => {
            return (
                <div className="products" key={products.id}>
                    <Component
                        type={type}
                        id={products.options[1].id}
                        parentId={products.options[1].parentId}
                        label={products.options[1].label}
                        category={products.category}
                        img={products.options[1].img}
                        cost={products.options[1].price}
                        onClick={handleClick} />
                </div>
            )
        })
    )
}

const OurProducts = (props) => {
    const availableProducts = props.data.products;
    const [toggle, setToggle] = useState(false);
    const [itemClicked, setItemClicked] = useState(props.selectedProducts);
    const handleClick = (obj) => {
        setItemClicked(obj)
        document.body.classList.add('productOverlay--open');
        setToggle(true)
    }

    const onCloseClick = () => {
        setToggle(false)
        document.body.classList.remove('productOverlay--open');
    }

    const onChange = (obj) => {
        props.onProductSelection(obj)
    }

    return (
        <div className="ourProducts section-top-spacing">
            <div className="container">
                <h1 className="main-title">
                    {props.data.title()}
                </h1>
                <div className="desktopOnly">
                    <div className="desktop-products-container">
                        {
                            getProductTile(
                                ProductTile,
                                availableProducts,
                                handleClick,
                                props.type
                            )
                        }
                    </div>
                </div>
                <div className="mobileOnly">
                    {getProductTile(MobileProductTile, availableProducts, handleClick, props.type)}
                </div>
                {!props.isPrebook && <div className="details">
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>1 dozen</th>
                                <th>2 dozen</th>
                                <th>3 dozen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Kensington Pride</th>
                                <td>3.5 - 4 kgs</td>
                                <td>6.5 - 7 kgs</td>
                                <td>9.5 - 10.5 kgs</td>
                            </tr>
                            <tr>
                                <th>Alphonso</th>
                                <td>3 - 3.5 kgs</td>
                                <td>6 - 6.5 kgs</td>
                                <td>9 - 10 kgs</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="disclaimer">* Weights shown above are approximate.</div>
                </div>}
                <p className="bulkOrderText">
                    {props.data.bulkOrderText()}
                </p>
            </div>
            {!props.isPrebook && <p className="delivery">
                {props.data.delivery()}
            </p>}
            {toggle && <MobileOverlay klassName={props.type}>
                <RadioButtons
                    itemClicked={itemClicked}
                    selectedProducts={props.selectedProducts}
                    availableItems={availableProducts}
                    onChange={onChange}
                    onCloseClick={onCloseClick} />
            </MobileOverlay>}
        </div>
    );
};

export function mapStateToProps(state) {
    return {
        selectedProducts: state.ProductReducers.selectedProducts
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        onProductSelection: function (token) {
            dispatch(ProductActions.onProductSelection(dispatch, token))
        },
        onProductRemoval: function (parentId) {
            dispatch(ProductActions.onProductRemoval(dispatch, parentId))
        }
    }
}

const withScroll = Scrolling({ scrollId: "ourProducts" })(OurProducts)
export default connect(mapStateToProps, mapDispatchToProps)(withScroll);