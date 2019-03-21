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
const RadioButtons = (props) => {
    return (
        <div className="RadioButtons">
            {
                data.items.map((item) => {
                    return (
                        <section>
                            {
                                item.options.map(({label, price}) => {
                                    return(
                                        <label>
                                            <input name={item.name} type="radio"/>
                                            {label} {price}

                                        </label>
                                    )
                                })
                            }
                        </section>
                    )
                })
            }
        </div>
    );
};

export default RadioButtons;