import React, { useState } from 'react';
import Button from './../Button/Button';
import Stepper from './../Stepper/Stepper';
import SessionStorage from './../../../resources/helpers/SessionStorage';
import './ProductTile.scss';

const ProductTile = ({ img, title, cost }) => {
    const [toggle, setToggle] = useState(false)
    const handleAddToCart = () => {
        setToggle(true);
        const existingProducts = JSON.parse(SessionStorage.get("products")) || [];
        const currentProduct = {
            type: title,
            count: 1
        }
        if (existingProducts) {
            existingProducts.push(currentProduct)
        }
        storeData(existingProducts)
    }

    const handleCheckout = () => {

    }

    const storeData = (existingProducts) => {
        SessionStorage.set("products", existingProducts);
    }

    const handleStepper = (count) => {
        const existingProducts = JSON.parse(SessionStorage.get("products"));
        existingProducts.
    }
    return (
        <div className="productTile">
            <div className="productInfo">
                <img src={img} alt={title} />
                <strong className="title">{title}</strong>
                {cost && <span className="cost">{cost}</span>}
            </div>
            <div className="productAction">
                {toggle && <Stepper onStepper={handleStepper} />}
                {!toggle && <Button title="Add to cart" onClick={handleAddToCart} />}
                {toggle && <Button title="Checkout now" onClick={handleCheckout} />}
            </div>
        </div>
    );
};

export default ProductTile;