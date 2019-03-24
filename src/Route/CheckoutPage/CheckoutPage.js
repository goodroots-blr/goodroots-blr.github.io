import React, { useReducer, useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import _map from 'lodash/map';
import _keys from 'lodash/keys';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import Layout from './../../Components/_UI/Layout/Layout';
import UserDetailsForm from './../../Components/_Section/UserDetailsForm/UserDetailsForm';
import SmallProductTitle from './../../Components/_UI/SmallProductTitle/SmallProductTitle';
import Button from './../../Components/_UI/Button/Button';
import SessionStorage, { STORE_NAME } from './../../resources/helpers/SessionStorage'
import { ourProductsData } from './../../resources/data'
import './CheckoutPage.scss';

const constructProductsList = (passedProps) => {
    let items = [];
    !_isEmpty(passedProps) && _map(passedProps, (value, key) => {
        const prodData = ourProductsData.products[key];
        const options = ourProductsData.products[key].options;
        const rest = options.filter(option => option.id === _keys(value)[0])[0];
        const obj = {
            ...rest,
            category: prodData.category,
        }
        items.push(obj);
        return items
    });
    return items;
}

const CheckoutPage = (props) => {
    console.log(props);
    const passedProps = _get(props, "location.state.products") || JSON.parse(SessionStorage.get(STORE_NAME));
    const [items, setItems] = useState(constructProductsList(passedProps));
    const handleRemoveClick = (id) => {
        const filteredItems = items.filter(item => item.id !==id);
        setItems(filteredItems);
        SessionStorage.set(STORE_NAME, { ...filteredItems[0] });
    }
    const showProducts = () => {
        return (
            <>
                {items.map((item) => {
                    return (<SmallProductTitle
                        onRemoveClick={handleRemoveClick}
                        key={item.parentId}
                        {...item} />)
                })}
            </>
        )
    }
    const dataToPost = []
    const userFormRef = useRef();
    let initialState = {
        hideOrder: false,
        showChangeBtnInOrder: false,
        hideDeliveryAddress: true,
        showChangeBtnInDeliveryAddress: false,
        hideOrderSummary: true,
        showChangeBtnInOrderSummary: false
    }
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'HIDE_ORDER':
                return {
                    hideOrder: true,
                    showChangeBtnInOrder: true,
                    hideDeliveryAddress: false,
                    showChangeBtnInDeliveryAddress: false,
                    hideOrderSummary: true,
                    showChangeBtnInOrderSummary: false
                };
            case 'SHOW_ORDER':
                return {
                    hideOrder: false,
                    showChangeBtnInOrder: false,
                    hideDeliveryAddress: true,
                    showChangeBtnInDeliveryAddress: false,
                    hideOrderSummary: true,
                    showChangeBtnInOrderSummary: false
                };
            case 'HIDE_ADDRESS':
                if (Object.keys(userFormRef.current.handleFormSubmit()).length > 0) {
                    dataToPost["userDetails"] = userFormRef.current.handleFormSubmit();
                    return {
                        hideOrder: true,
                        showChangeBtnInOrder: true,
                        hideDeliveryAddress: true,
                        showChangeBtnInDeliveryAddress: true,
                        hideOrderSummary: false,
                        showChangeBtnInOrderSummary: false
                    }
                };
            case 'SHOW_ADDRESS':
                return {
                    hideOrder: true,
                    showChangeBtnInOrder: true,
                    hideDeliveryAddress: false,
                    showChangeBtnInDeliveryAddress: false,
                    hideOrderSummary: true,
                    showChangeBtnInOrderSummary: false
                };
            default:
                return {
                    error: `Passed action type "${action.type}" is not allowed`
                };
        }
    }, initialState);

    useEffect(() => {
        document.body.classList.remove('productOverlay--open');
        window.scrollTo(0, 0);
    })

    return (
        <Layout>
            {
                items.length > 0 ?
                    <div className="checkoutPage section-top-spacing-layout container">
                        <div className="content">
                            <div className="col-9">
                                <div className="white-box">
                                    <div className="cart-title">
                                        <h2>{props.data.LABELS.MYCART_SECTION.TITLE}
                                            ({items.length})</h2>
                                        {state.showChangeBtnInOrder &&
                                            <Button title="Change" onClick={() => dispatch({ type: 'SHOW_ORDER' })} />}
                                    </div>
                                    <div className={`white-box-content ${state.hideOrder && "hide"}`}>
                                        <div className="smallProductTitle-container">
                                            {showProducts()}
                                        </div>
                                        <div className="actions">
                                            <Link className="button button-inverse" to='/'>
                                                {props.data.LABELS.MYCART_SECTION.SHOPPING_BTN}
                                            </Link>
                                            <Button type="solid"
                                                title={props.data.LABELS.MYCART_SECTION.PLACE_ORDER_BTN}
                                                onClick={() => dispatch({ type: 'HIDE_ORDER' })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="white-box">
                                    <div className="cart-title">
                                        <h2>Delivery Address</h2>
                                        {state.showChangeBtnInDeliveryAddress &&
                                            <Button title="Change" onClick={() => dispatch({ type: 'SHOW_ADDRESS' })} />}
                                    </div>
                                    <div className={`white-box-content ${state.hideDeliveryAddress && "hide"}`}>
                                        <div className="userDetailsForm-container">
                                            <UserDetailsForm ref={userFormRef} />
                                        </div>
                                        <div className="actions">
                                            <Button type="solid" title="Continue" onClick={() => dispatch({ type: 'HIDE_ADDRESS' })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="white-box">
                                    <div className="cart-title">
                                        <h2>
                                            Order Summary
                                </h2>
                                    </div>
                                    <div className={`white-box-content ${state.hideOrderSummary && "hide"}`}>
                                        <div className="smallProductTitle-container">
                                            {showProducts()}
                                        </div>
                                        <div className="actions">
                                            <Button type="solid" title="Pay now" onClick={() => console.log(dataToPost)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="white-box price-details-container">
                                    <div className="cart-title">
                                        <h2>Bill Details</h2>
                                    </div>
                                    <div className="price-details">
                                        <div className="items">
                                            Price (2 items)<span> ₹1,559</span>
                                        </div>
                                        <div className="delivery">
                                            Delivery Fee<span>FREE</span>
                                        </div>

                                        <div className="totalpay">
                                            TO PAY<span> ₹1,559</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="checkoutPage section-top-spacing-layout container emptyCartMessage">
                        <h1>{props.data.LABELS.EMPTY_CART}</h1>
                        <Link className="button button-inverse" to='/'>
                            {props.data.LABELS.EMPTY_CART_BTN}
                        </Link>
                    </div>
            }
        </Layout>
    );
};


export default CheckoutPage;