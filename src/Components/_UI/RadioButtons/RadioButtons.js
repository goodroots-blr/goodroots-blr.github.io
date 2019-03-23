import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './RadioButtons.scss';
const data = {
    "items": [
        {
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
const RadioButtons = ({ selectedProduct, onCloseClick, onProductionSelection, products }) => {
    useEffect(() => {
        const obj = {}
        obj[selectedProduct] = {
            "label": "1 dozon",
            "quantity": 1,
            "price": 1000
        };
        handleChange(obj)
    })
    const handleChange = (obj) => {
        onProductionSelection(obj)
    }
    return (
        <div className="RadioButtons">
            <h1 className="main-title small">Choose your mangoes</h1>
            {
                data.items.map((item, i) => {
                    return (
                        <section key={`section-${i}`}>
                            <h3>{item.title}</h3>
                            {
                                item.options.map(({ label, price }, i) => {
                                    {
                                        if ((selectedProduct === item.title) && i === 0) {
                                            return (
                                                <label key={`${label}-${item.title}`}
                                                    className="custom-radio">{label} {price}
                                                    <input type="radio"
                                                        onChange={() => {
                                                            const obj = {}
                                                            obj[item.title] = {
                                                                "label": label,
                                                                "quantity": 1,
                                                                "price": price
                                                            };
                                                            handleChange(obj)
                                                        }}
                                                        defaultChecked={true}
                                                        name={item.title} />
                                                    <span className="checkmark"></span>
                                                </label>
                                            )
                                        }
                                        else {
                                            return (
                                                <label key={`${label}-${item.title}`}
                                                    className="custom-radio">{label} {price}
                                                    <input type="radio"
                                                        onChange={() => {
                                                            const obj = {}
                                                            obj[item.title] = {
                                                                "label": label,
                                                                "quantity": 1,
                                                                "price": price
                                                            };
                                                            handleChange(obj)
                                                        }}
                                                        name={item.title} />
                                                    <span className="checkmark"></span>
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
            {
                <Link className="button button-inverse"
                    to={{ pathname: '/checkout', state: { products: products } }}>
                    Checkout now
                 </Link>
            }
            <div className="close-btn" onClick={onCloseClick}>x</div>
        </div>
    );
};

export default RadioButtons;