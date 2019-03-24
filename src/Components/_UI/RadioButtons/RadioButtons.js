import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import SessionStorage, { STORE_NAME } from './../../../resources/helpers/SessionStorage'
import './RadioButtons.scss';

const productObject = (parentId, id, label = "1 dozon") => {
    const obj = {}, child = {}
    child[id] = label;
    obj[parentId] = child
    return obj;
}

const onProductionSelection = (obj) => {
    SessionStorage.set(STORE_NAME, { ...obj });
}

const RadioButtons = ({
    availableItems,
    selectedProductId,
    onCloseClick
}) => {
    const items = [availableItems["product-id-1"], availableItems["product-id-2"]];
    const [checkoutProducts, setCheckoutProducts] = useState(
        productObject(selectedProductId, `${selectedProductId}-1`))

    useEffect(() => {
        if (!SessionStorage.get(STORE_NAME)) {
            onProductionSelection(checkoutProducts);
        }
    });
    const handleChange = (parentId, id, label) => {
        let updatedCheckoutProducts = { ...checkoutProducts, ...productObject(parentId, id, label) };
        setCheckoutProducts(updatedCheckoutProducts)
        onProductionSelection(updatedCheckoutProducts)
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
                                                    onChange={() => handleChange(parentId, id, label)}
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
                    to={{
                        pathname: '/checkout',
                        state: {
                            products: checkoutProducts,
                        }
                    }}>
                    Checkout now
                 </Link>
            }
            <div className="close-btn" onClick={onCloseClick}>x</div>
        </div>
    );
};

export default RadioButtons;