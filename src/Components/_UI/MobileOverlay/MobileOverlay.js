import React from 'react';
import ReactDom from 'react-dom';
import './MobileOverlay.scss';

const MobileOverlay = props => {
    return ReactDom.createPortal(
        <div className={`MobileOverlay ${props.type}`}>
            {props.children}
        </div>,
        document.body
    );

};

export default MobileOverlay;