import React, {useState} from 'react';
import Button from './../Button/Button';
import './ProductTile.scss';
import { ourProductsData } from './../../../resources/data'

const ProductTile = ({ id, parentId, label, category, img, cost, onClick }) => {
    const [ productPrice, setProductPrice ] = useState(cost)
    const products = ourProductsData.products.filter((p) => p.id == parentId)[0];
    const variations = products.options.map((v) => ({
        "label": v.label,
        "price": v.price,
    }));

    const handleOnchange = (e) => {
        setProductPrice(e.target.value)
    }

    const handleAddToCart = () => {
        const obj = {};
        obj[parentId] = id
        onClick(obj);
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
                        <select onChange={handleOnchange}>
                            {variations.map((v) => {
                                return (
                                    <option key={v.label} value={v.price}>
                                        {v.label}
                                    </option>
                                )
                            })}
                        </select>
                        {/* <strong className="title">&nbsp;&nbsp;{label}</strong> */}
                    </div>
                    {/* {cost && <span className="cost">{cost}</span>} */}
                    {productPrice && <span className="cost">{productPrice}</span>}
                </div>
                <Button title="Add to cart" onClick={handleAddToCart} />
            </div>
        </div>
    );
};

export default ProductTile;