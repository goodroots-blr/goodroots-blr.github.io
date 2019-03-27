import React from 'react';
import _keys from 'lodash/keys';
import _values from 'lodash/values';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import Button from './../../_UI/Button/Button';
import { withRouter } from 'react-router-dom';
import './RadioButtons.scss';

const RadioButtons = (props) => {
    let obj = props.selectedProducts || props.itemClicked;
    let selectionObj = {};
    if (_isEmpty(props.selectedProducts)) {
        const pId = _keys(props.itemClicked)[0]
        selectionObj[pId] = 0;
    } else {
        _map(props.selectedProducts, (value, key) => {
            selectionObj[key] = value.split('-')[2] - 1
        })
    }


    const handleChange = (parentId, id) => {
        obj[parentId] = id;
    }

    const onCheckoutClick = () => {
        props.onChange(obj);
        props.history.push('/checkout');
    }


    return (
        <div className="RadioButtons">
            <h1 className="main-title small">Choose your mangoes</h1>
            {
                props.availableItems.map((item, i) => {
                    return (
                        <section key={`section-${i}`}>
                            <h3>{item.title}</h3>
                            {
                                item.options.map(({ price, label, parentId, id, }, i) => {
                                    {
                                        return (
                                            <label key={`${id}`}
                                                className="custom-radio">
                                                <span className="radio-text">
                                                    {label}
                                                </span>
                                                <span className="cost-icon">{price}</span>
                                                <input type="radio"
                                                    onChange={() => handleChange(parentId, id)}
                                                    defaultChecked={selectionObj[parentId] === i}
                                                    name={item.title} />
                                                <span className="checkmark"></span>
                                            </label>
                                        )
                                    }
                                })
                            }
                        </section>
                    )
                })
            }
            {
                <Button type="inverse" title="Checkout now" onClick={onCheckoutClick} />
            }
            <div className="close-btn" onClick={() => props.onCloseClick()}>x</div>
        </div>
    );
};

export default withRouter(RadioButtons);