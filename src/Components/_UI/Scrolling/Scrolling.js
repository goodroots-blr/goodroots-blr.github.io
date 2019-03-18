import React from 'react';
import {
    Element,
} from "react-scroll";
import PropTypes from 'prop-types';

const Scrolling = (properties) => {
    return (WrappedComponent) => {
        return (props) => {
            return (
                <Element name={`${properties.scrollId}`}>
                    <WrappedComponent {...props} />
                </Element>
            );
        };
    }
};


export default Scrolling;