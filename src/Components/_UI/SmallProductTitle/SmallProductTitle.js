import React from 'react';
import Stepper from './../Stepper/Stepper'
import Button from './../Button/Button'
import './SmallProductTitle.scss'

const SmallProductTitle = ({ id, parentId, category, label, price, img, removeBtn, onRemoveClick }) => {
    return (
        <div className="smallProductTitle" id={id} data-parent-id={parentId}>
            <div className="smallProductTitle-left">
                <img src={img} alt={id} />
                {/* {stepper && <Stepper />} */}
            </div>
            <div className="smallProductTitle-right">
                <p className="product-name">{category}</p>
                <p className="product-quantity">{label}</p>
                <p className="product-price cost">{price}</p>
                {/* {removeBtn && <Button type="solid"
                    onClick={() => onRemoveClick(parentId, id)}
                    size="small"
                    title="remove" />} */}
            </div>
        </div>
    );
};

SmallProductTitle.defaultProps = {
    stepper: true
}

export default SmallProductTitle;