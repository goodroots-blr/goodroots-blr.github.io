import React, { useState } from 'react';
import ReactDom from 'react-dom';
import UserForm from './../UserForm'
import Button from './../Button'
import './ProductOverlay.scss';

const ProductOverlay = props => {
    const [msg, setMsg] = useState(true)
    const handleClick = () => {
        props.hideMenu()
    };
    const showSucessMessage = () => {
        setMsg('SHOW_MESSAGE')
    }
    return ReactDom.createPortal(
        <div
            className="productOverlay"
        >
            {msg !== 'SHOW_MESSAGE' && <UserForm
                selectedProduct={props.title}
                showSucessMessage={showSucessMessage}
                hideMenu={handleClick} />}

            {msg === 'SHOW_MESSAGE' && <div className="sucessmsg userForm">
                <div class="svg-box">
                    <svg class="circular green-stroke">
                        <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10" />
                    </svg>
                    <svg class="checkmark green-stroke">
                        <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                            <path class="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53" />
                        </g>
                    </svg>
                </div>
                <div>
                    We have captured your details successfully.<br />
                    We will reach out to you very soon.
                </div>
                <Button title="Close"
                    type="inverse"
                    onClick={handleClick} />
            </div>}
        </div>,
        document.body
    );

};

export default ProductOverlay;