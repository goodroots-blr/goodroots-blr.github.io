import React, { useState } from 'react';
import Button from './../Button/Button';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _keyBy from 'lodash/keyBy';
import { ourProductsData } from './../../../resources/data';
import { connect } from 'react-redux';
import ProductActions from './../../../Containers/ProductActions';
import './MobileProductTile.scss';

const MobileProductTile = (props) => {
    const { id, parentId, label,
        category, img, cost, onClick,
        onProductSelection, selectedProducts, type } = props;

    const products = ourProductsData[type].products.filter((p) => p.id === parentId)[0];
    const variations = products.options.map((v) => ({
        "id": v.id,
        "label": v.label,
        "price": v.price
    }));

    const otherObj = _keyBy(variations, 'id');
    const selectedPrice = otherObj[selectedProducts[parentId]] ? otherObj[selectedProducts[parentId]].price : cost
    const effectiveCost = _isEmpty(selectedProducts) ? cost : selectedPrice
    const [productPrice, setProductPrice] = useState(effectiveCost);
    const contructSelection = () => {
        const selectionObj = {};
        if (_isEmpty(selectedProducts)) {
            selectionObj[parentId] = 1;
            return selectionObj;
        } else {
            _map(selectedProducts, (value, key) => {
                selectionObj[key] = value.split('-')[2] - 1
            });
            if(!selectedProducts.hasOwnProperty(parentId)) {
                selectionObj[parentId] = 1;
            }
            return selectionObj
        }
    }


    const handleOnchange = (e) => {
        const id = e.target.value
        setProductPrice(otherObj[id].price);
        const obj = {};
        obj[parentId] = id
        onProductSelection(obj)
    }

    const handleAddToCart = () => {
        const obj = {};
        obj[parentId] = id
        onClick(obj);
    }

    return (
        <div className="mobileProductTile" id={id} data-parent-id={parentId}>
            <div className="productImage">
                <img src={img} alt={label} />
                {category && <strong>{category}</strong>}
            </div>
            <div className="productInfo">
                <div className="productExtraInfo">
                    {/* <strong className="title">{label}</strong> */}
                    <span class="custom-dropdown">
                        <select onChange={handleOnchange}>
                            {variations.map((v, i) => {
                                return (
                                    <option selected={contructSelection()[parentId] === i}
                                        key={v.label} value={v.id}>
                                        {v.label}
                                    </option>
                                )
                            })}
                        </select>
                    </span>
                </div>
                <div className="cost">
                    <span>{productPrice}</span>
                </div>
                {<Button title="Add to cart" onClick={handleAddToCart} />}
            </div>
        </div>
    );
};

export function mapStateToProps(state) {
    return {
        selectedProducts: state.ProductReducers.selectedProducts
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        onProductSelection: function (token) {
            dispatch(ProductActions.onProductSelection(dispatch, token))
        },
        onProductRemoval: function (parentId) {
            dispatch(ProductActions.onProductRemoval(dispatch, parentId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileProductTile);