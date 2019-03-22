import React from 'react';
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
            {
                data.items.map((item) => {
                    return (
                        <section>
                            {
                                item.options.map(({ label, price }, i) => {                                    
                                    {
                                        if ((selectedProduct.toLowerCase() === item.name) && i === 0) {
                                            return (
                                                <label>
                                                    <input checked="checked" name={item.name} type="radio" />
                                                    {label} {price}

                                                </label>
                                            )
                                        }
                                        else {
                                            return(
                                                <label>
                                                <input name={item.name} type="radio" />
                                                {label} {price}

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
            <div className="close-btn" onClick={onCloseClick}>x</div>
        </div>
    );
};

export default RadioButtons;