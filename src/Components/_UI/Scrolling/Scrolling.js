import React from 'react';
import {
    Element,
} from "react-scroll";

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