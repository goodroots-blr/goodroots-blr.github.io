import React from 'react';
import { Link } from "react-router-dom";
import './RadioButtons.scss';
const data = {
    "items": [
        {
            "name": "alphanso",
            "title": "Alphanso",
            "options": [
                {
                    "label": "1 dozon",
                    "price": "1000"
                },
                {
                    "label": "2 dozon",
                    "price": "2000"
                },
                {
                    "label": "3 dozon",
                    "price": "3000"
                }
            ]
        },
        {
            "name": "banganapalli",
            "title": "Banganapalli",
            "options": [
                {
                    "label": "1 dozon",
                    "price": "1000"
                },
                {
                    "label": "2 dozon",
                    "price": "2000"
                },
                {
                    "label": "3 dozon",
                    "price": "3000"
                }
            ]
        }
    ]
}
const RadioButtons = ({ selectedProduct, onCloseClick }) => {
    return (
        <div className="RadioButtons">
            <h1 className="main-title small">Choose your mangoes</h1>
            {
                data.items.map((item) => {
                    return (
                        <section>
                            <h3>{item.title}</h3>
                            {
                                item.options.map(({ label, price }, i) => {
                                    {
                                        if ((selectedProduct.toLowerCase() === item.name) && i === 0) {
                                            return (
                                                <label class="custom-radio">{label} {price}
                                                    <input type="radio" checked="checked" name={item.name} />
                                                    <span class="checkmark"></span>
                                                </label>
                                            )
                                        }
                                        else {
                                            return (
                                                <label class="custom-radio">{label} {price}
                                                    <input type="radio"  name={item.name} />
                                                    <span class="checkmark"></span>
                                                </label>
                                            )
                                        }
                                    }
                                })
                            }
                        </section>
                    )
                })
            }
            {<Link className="button button-inverse" to="/checkout">Checkout now</Link>}
            <div className="close-btn" onClick={onCloseClick}>x</div>
        </div>
    );
};

export default RadioButtons;