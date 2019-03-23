import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import SessionStorage, { STORE_NAME } from './../../../resources/helpers/SessionStorage'
import './RadioButtons.scss';

const RadioButtons = ({
    availableItems,
    selectedProductId,
    onCloseClick,
    onProductionSelection,
    checkoutProducts
}) => {
    useEffect(() => {
        if (!SessionStorage.get(STORE_NAME)) {
            const obj = {}, child = {}
            child[`${selectedProductId}-1`] = 1;
            obj[selectedProductId] = child
            onProductionSelection(obj)
        }
    })
    const items = [availableItems["product-id-1"], availableItems["product-id-2"]];
    const handleChange = (parentId, id) => {
        const obj = {}, child = {}
        child[id] = 1;
        obj[parentId] = child
        onProductionSelection(obj)
    }

    return (
        <div className="RadioButtons">
            <h1 className="main-title small">Choose your mangoes</h1>
            {
                items.map((item, i) => {
                    return (
                        <section key={`section-${i}`}>
                            <h3>{item.title}</h3>
                            {
                                item.options.map(({ price, label, parentId, id, }, i) => {
                                    {
                                        return (
                                            <label key={`${id}`}
                                                className="custom-radio">{label} {price}
                                                <input type="radio"
                                                    onChange={() => handleChange(parentId, id)}
                                                    defaultChecked={(selectedProductId === parentId) && i === 0}
                                                    name={item.title} />
                                                <span className="checkmark"></span>
                                            </label>
                                        )
                                    }
                                })
                            }
                        </section>
                    )
                })
            }
            {
                <Link className="button button-inverse"
                    to={{ pathname: '/checkout', state: { products: checkoutProducts } }}>
                    Checkout now
                 </Link>
            }
            <div className="close-btn" onClick={onCloseClick}>x</div>
        </div>
    );
};

export default RadioButtons;