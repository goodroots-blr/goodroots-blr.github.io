import React, { useState } from 'react';
import Button from './../Button/Button';
// import ProductOverlay from './../../_Section/ProductOverlay/ProductOverlay';
import './ProductTile.scss';

const ProductTile = ({ img, title, cost }) => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        document.body.classList.add('productOverlay--open');
        setToggle(true);
    }
    const hideMenu = () => {
        setToggle(false);
        document.body.classList.remove('productOverlay--open');
    }
    return (
        <div className="productTile">
            <img src={img} alt={title} />
            <div className="productInfo">
                <strong className="title">{title}</strong>
                {cost && <span className="cost">{cost}</span>}
                <Button title="Prebook now" onClick={handleClick} />
                {/* {toggle && <ProductOverlay title={title} hideMenu={hideMenu} />} */}
            </div>
        </div>
    );
};

export default ProductTile;