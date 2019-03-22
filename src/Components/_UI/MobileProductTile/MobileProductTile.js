import React, { useState } from 'react';
import Button from './../Button/Button';
import MobileOverlay from './../MobileOverlay/MobileOverlay';
import RadioButtons from './../RadioButtons/RadioButtons';
import { Link } from "react-router-dom";
import SessionStorage from './../../../resources/helpers/SessionStorage';
import './MobileProductTile.scss';

const renderMobileOverlay = () => {
    return(
        <MobileOverlay type="full">
            <RadioButtons />
        </MobileOverlay>
    )
}

const MobileProductTile = ({ img, title, cost, category }) => {
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

    const storeData = (existingProducts) => {
        SessionStorage.set("products", existingProducts);
    }

    return (
        <div className="mobileProductTile">
            <div className="productImage">
                <img src={img} alt={title} />
            </div>
            <div className="productInfo">
                <div className="productExtraInfo">
                    {category && <strong>{category}</strong>}
                    <strong className="title">{title}</strong>
                </div>
                <div className="cost">
                    <span>{cost}</span>
                </div>
                {<Button title="Add to cart" onClick={handleAddToCart} />}
                {/* {renderMobileOverlay()} */}
                {/* {toggle && renderMobileOverlay()} */}
                {/* {toggle && <Link className="button button-inverse" to="/checkout">Checkout now</Link>} */}
            </div>
        </div>
    );
};

export default MobileProductTile;