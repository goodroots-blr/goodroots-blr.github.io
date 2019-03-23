import React from 'react';
import Button from './../Button/Button';
import './ProductTile.scss';

const ProductTile = ({ id, parentId, label, category, img, cost, onClick }) => {
    const handleAddToCart = () => {
        onClick(id, parentId);
    }
    return (
        <div className="productTile" id={id} data-parent-id={parentId}>
            <div className="productImage">
                <img src={img} alt={label} />
            </div>
            <div className="productInfo">
                <div className="productExtraInfo">
                    <div className="">
                        {category && <strong className="title">{category}</strong>}
                        <strong className="title">&nbsp;&nbsp;{label}</strong>
                    </div>
                    {cost && <span className="cost">{cost}</span>}
                </div>
                <Button title="Add to cart" onClick={handleAddToCart} />
            </div>
        </div>
    );
};

export default ProductTile;