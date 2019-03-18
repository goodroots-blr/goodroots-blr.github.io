import React from 'react';
import data from './../../resources/data/Home'
import {
    Element,
} from "react-scroll";
import './AboutUs.scss';

const AboutUs = () => {
    return (
        <Element name="aboutUs" className="aboutUs">
            <div className="container">
                {data.paragraph}
            </div>
        </Element>
    );
};

export default AboutUs;