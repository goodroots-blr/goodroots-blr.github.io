import React from 'react';
import Button from './../Button/Button';
// import { Link } from "react-router-dom";
import SessionStorage from './../../../resources/helpers/SessionStorage';
import './ProductTile.scss';

const ProductTile = ({ img, title, cost, category, onClick }) => {
    const handleAddToCart = () => {
        onClick(category);
        // setToggle(true);
        // const existingProducts = JSON.parse(SessionStorage.get("products")) || [];
        // const currentProduct = {
        //     type: title,
        //     count: 1
        // }
        // if (existingProducts) {
        //     existingProducts.push(currentProduct)
        // }
        // storeData(existingProducts)
    }

    const storeData = (existingProducts) => {
        SessionStorage.set("products", existingProducts);
    }

    return (
        <div className="productTile">
            <div className="productImage">
                <img src={img} alt={title} />
            </div>
            <div className="productInfo">
                <div className="productExtraInfo">
                    <div className="">
                        {category && <strong className="title">{category}</strong>}
                        <strong className="title">&nbsp;&nbsp;{title}</strong>
                    </div>
                    {cost && <span className="cost">{cost}</span>}
                </div>
                <Button title="Add to cart" onClick={handleAddToCart} />
                {/* {toggle && <Link className="button button-inverse" to="/checkout">Checkout now</Link>} */}
            </div>
        </div>
    );
};

export default ProductTile;