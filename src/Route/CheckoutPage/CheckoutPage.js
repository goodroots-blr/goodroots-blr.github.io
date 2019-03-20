import React, { useReducer } from 'react';
import Layout from './../../Components/_UI/Layout/Layout';
import UserDetailsForm from './../../Components/_Section/UserDetailsForm/UserDetailsForm';
import SmallProductTitle from './../../Components/_UI/SmallProductTitle/SmallProductTitle';
import Button from './../../Components/_UI/Button/Button';
import './CheckoutPage.scss';

const reducer = (state, action) => {
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
            return {
                hideOrder: true,
                showChangeBtnInOrder: true,
                hideDeliveryAddress: true,
                showChangeBtnInDeliveryAddress: true,
                hideOrderSummary: false,
                showChangeBtnInOrderSummary: false
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
};

const CheckoutPage = ({ data }) => {
    let initialState = {
        hideOrder: false,
        showChangeBtnInOrder: false,
        hideDeliveryAddress: true,
        showChangeBtnInDeliveryAddress: false,
        hideOrderSummary: true,
        showChangeBtnInOrderSummary: false
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Layout>
            <div className="checkoutPage section-top-spacing-layout container">
                <div className="content">
                    <div className="col-9">
                        <div className="white-box">
                            <div className="cart-title">
                                <h2>My Cart(2)</h2>
                                {state.showChangeBtnInOrder &&
                                    <Button title="Change" onClick={() => dispatch({ type: 'SHOW_ORDER' })} />}
                            </div>
                            <div className={`white-box-content ${state.hideOrder && "hide"}`}>
                                <div className="smallProductTitle-container">
                                    <SmallProductTitle />
                                </div>
                                <div className="actions">
                                    <Button title="Continue shopping" />
                                    <Button type="solid" title="Place order" onClick={() => dispatch({ type: 'HIDE_ORDER' })} />
                                </div>
                            </div>
                        </div>
                        <div className="white-box">
                            <div className="cart-title">
                                <h2>
                                    Enter Delivery Address
                                </h2>
                                {state.showChangeBtnInDeliveryAddress &&
                                    <Button title="Change" onClick={() => dispatch({ type: 'SHOW_ADDRESS' })} />}
                            </div>
                            <div className={`white-box-content ${state.hideDeliveryAddress && "hide"}`}>
                                <div className="smallProductTitle-container">
                                    <UserDetailsForm />
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
                                    <SmallProductTitle stepper={false} />
                                </div>
                                <div className="actions">
                                    <Button type="solid" title="Pay now" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="white-box">
                            Price Details
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};


export default CheckoutPage;