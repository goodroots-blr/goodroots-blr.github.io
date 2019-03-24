import React from 'react';
import _keys from 'lodash/keys';
import Button from './../../_UI/Button/Button';
import { withRouter } from 'react-router-dom';
import './RadioButtons.scss';

const RadioButtons = (props) => {
    const sParentId = _keys(props.selectedProducts)[0];
    const handleChange = (parentId, id) => {
        const obj = {};
        obj[parentId] = id
        props.onChange(obj)
    }

    const onCheckoutClick = () => {
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
                                                className="custom-radio">{label} {price}
                                                <input type="radio"
                                                    onChange={() => handleChange(parentId, id)}
                                                    defaultChecked={(sParentId === parentId) && i === 0}
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
            <div className="close-btn" onClick={()=>props.onCloseClick(sParentId)}>x</div>
        </div>
    );
};

export default withRouter(RadioButtons);