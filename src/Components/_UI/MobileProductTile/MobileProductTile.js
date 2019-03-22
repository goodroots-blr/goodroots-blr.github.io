import React from 'react';
import Button from './../Button/Button';
import './MobileProductTile.scss';

const MobileProductTile = ({ img, title, cost, category, onClick }) => {
    const handleAddToCart = () => {
        onClick(category);
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
            </div>
        </div>
    );
};

export default MobileProductTile;