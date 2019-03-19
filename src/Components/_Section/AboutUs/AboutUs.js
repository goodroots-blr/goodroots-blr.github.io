import React from 'react';
import Scrolling from './../../_UI/Scrolling/Scrolling';
import './AboutUs.scss';

const AboutUs = ({content}) => {
    return (
        <div className="aboutUs section-top-spacing">
            <div className="container">
                {content}
            </div>
        </div>
    );
};

export default Scrolling({ scrollId: "aboutUs" })(AboutUs);