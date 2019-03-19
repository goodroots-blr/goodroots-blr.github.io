import React, { useState } from 'react';
import Button from './../Button/Button';
import Stepper from './../Stepper/Stepper';
import './ProductTile.scss';

const ProductTile = ({ img, title, cost }) => {
    const [toggle, setToggle] = useState(false)
    const handleAddToCart = () => {
        setToggle(true)
    }

    const handleCheckout = () => {

    }

    const handleStepper = (count) => {
        console.log(count);
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