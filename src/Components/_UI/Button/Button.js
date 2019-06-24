import React from 'react';
import './Button.scss';

const Button = props => {
    const handleClick = () => {
        props.onClick()
    }
    return (
        <button className={`button button-${props.type} button-${props.size} button-${props.disabled}`}
            onClick={handleClick}
            >
            {props.title}            
        </button>
    );
};

Button.defaultProps = {
    type: "primary",
    disabled: '',
    size: '',
    onClick: () => { }
}

export default Button;