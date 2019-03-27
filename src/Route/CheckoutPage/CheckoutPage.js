import React, { useReducer, useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ProductActions from './../../Containers/ProductActions';
import _keys from 'lodash/keys';
import _values from 'lodash/values';
import _isEmpty from 'lodash/isEmpty';
import Layout from './../../Components/_UI/Layout/Layout';
import UserDetailsForm from './../../Components/_Section/UserDetailsForm/UserDetailsForm';
import SmallProductTitle from './../../Components/_UI/SmallProductTitle/SmallProductTitle';
import Button from './../../Components/_UI/Button/Button';
import FullPageLoader from './../../Components/_UI/FullPageLoader/FullPageLoader';
import { ourProductsData } from './../../resources/data'
import './CheckoutPage.scss';

const constructProductsList = (passedProps) => {
    let items = [];
    if (!_isEmpty(passedProps)) {
        const sParentIds = _keys(passedProps);
        sParentIds.map((sPId) => {
            const filtered = ourProductsData.products.filter(prodData => prodData.id === sPId)[0]
            const options = filtered.options.filter((options) => options.id === passedProps[sPId])[0];
            let obj = {
                id: options.id,
                parentId: options.parentId,
                category: filtered.category,
                label: options.label,
                price: options.price,
                img: options.img
            }
            items.push(obj)
        })
    }

    return items;
}

const CheckoutPage = (props) => {
    const [showLoader, setShowLoader] = useState(false)
    const dataToPost = []
    const userFormRef = useRef();
    const items = constructProductsList(props.selectedProducts);
    const itemsPrice = items.reduce((acc, curr) => {
        acc = acc + parseInt(curr.price)
        return acc;
    }, 0);

    const deliveryFee = "FREE";
    const totalPay = itemsPrice + (isNaN(deliveryFee) ? 0 : deliveryFee);


    const handleRemoveClick = (parentId, id) => {
        props.onProductRemoval(parentId);
    }

    const getHash = () => {
        setShowLoader(true)
        const obj = {
            fname: dataToPost.userDetails.name,
            phone: dataToPost.userDetails.contactNumber,
            email: dataToPost.userDetails.email,
            pinfo: _values(props.selectedProducts)
        }
        
        fetch('http://localhost:4000', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        }).then((res) => {
            return res.text()
        }).then((htmlString)=> {
            console.log(htmlString);
            var div = document.createElement('div');
            div.innerHTML = htmlString;
            document.body.appendChild(div);
            document.getElementById("myForm").submit()
        })
    }
    const showProducts = (removeBtn) => {
        return (
            <>
                {items.map((item) => {
                    return (<SmallProductTitle
                        removeBtn={removeBtn}
                        onRemoveClick={handleRemoveClick}
                        key={item.parentId}
                        {...item} />)
                })}
            </>
        )
    }

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
                                            {showProducts(true)}
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
                                        <h2> {state.showChangeBtnInDeliveryAddress ? "Address" : "Delivery Address"}</h2>
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
                                        <h2>Order Summary</h2>
                                    </div>
                                    <div className={`white-box-content ${state.hideOrderSummary && "hide"}`}>
                                        <div className="smallProductTitle-container order-summary-container">
                                            {items.map(({ category, label, price }) => {
                                                return (
                                                    <div className="content">
                                                        <div className="col-6 items">
                                                            {category}
                                                            <span>({label})</span>
                                                        </div>
                                                        <div className="col-6 col-6-r cost">{price}</div>
                                                    </div>
                                                )
                                            })}
                                            <div className="content delivery-fee">
                                                <div className="col-6">Delivery Fee</div>
                                                <div className="col-6  col-6-r">{deliveryFee}</div>
                                            </div>

                                            <div className="content total-pay">
                                                <div className="col-6">Total Pay</div>
                                                <div className="col-6  col-6-r cost">{totalPay}</div>
                                            </div>

                                        </div>
                                        <div className="actions">
                                            <Button type="solid" title="Pay now" onClick={getHash} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 desktopOnly">
                                <div className="white-box price-details-container">
                                    <div className="cart-title">
                                        <h2>Bill Details</h2>
                                    </div>
                                    <div className="price-details">
                                        <div className="items">
                                            Price ({items.length} items)<span> ₹{itemsPrice}</span>
                                        </div>
                                        <div className="delivery">
                                            Delivery Fee<span>{deliveryFee}</span>
                                        </div>

                                        <div className="totalpay">
                                            TO PAY<span className='cost1'> {totalPay}</span>
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
            {showLoader && <FullPageLoader />}
        </Layout>
    );
};


export function mapStateToProps(state) {
    return {
        selectedProducts: state.ProductReducers.selectedProducts
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        onProductRemoval: function (parentId) {
            dispatch(ProductActions.onProductRemoval(dispatch, parentId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);