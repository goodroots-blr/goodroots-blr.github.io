import React from 'react';
import './Button.scss';

const Button = props => {
    const handleClick = () => {
        props.onClick()
    }
    return (
        <button className={`button button-${props.type} button-${props.size}`}
            onClick={handleClick}>
            {props.title}            
        </button>
    );
};

Button.defaultProps = {
    type: "primary",
    size: '',
    onClick: () => { }
}

export default Button;