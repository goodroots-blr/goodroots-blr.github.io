import React from 'react';
import Button from './../Button/Button';
import './MobileProductTile.scss';

const MobileProductTile = ({ id, parentId, label, category, img, cost, onClick }) => {
    const handleAddToCart = () => {
        const obj = {};
        obj[parentId] = id
        onClick(obj);
    }

    return (
        <div className="mobileProductTile" id={id} data-parent-id={parentId}>
            <div className="productImage">
                <img src={img} alt={label} />
            </div>
            <div className="productInfo">
                <div className="productExtraInfo">
                    {category && <strong>{category}</strong>}
                    <strong className="title">{label}</strong>
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