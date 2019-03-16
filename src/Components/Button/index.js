import React from 'react';
import './Button.scss';

const Button = props => {
    const handleClick = () => {
        props.onClick()
    }
    return (
        <button className={`button button-${props.type}`}
            onClick={handleClick}>
            {props.title}            
        </button>
    );
};

Button.defaultProps = {
    type: "primary",
    onClick: () => {
        
    }
}

export default Button;