import React from 'react';
import Button from './../Button/Button';
import './ProductTile.scss';

const ProductTile = ({ img, title, cost, category, onClick }) => {
    const handleAddToCart = () => {
        onClick(category);
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
            </div>
        </div>
    );
};

export default ProductTile;