import React from 'react';
import data from './../../resources/data/Footer';
import {
    Element,
} from "react-scroll";
import SocialIcons from './../SocialIcons'
import './Footer.scss';

const Footer = props => {
    return (
        <Element name="contactus">
            <footer>
                <div className="container">
                    <h1 className="main-title">
                        {data.title()}
                    </h1>
                    <div className="content">
                        <div className="left__content">
                            <p className="line1">{data.address.line1}</p>
                            {/* <p className="line">{data.address.line2}</p> */}
                            <p className="line">{data.address.line3}</p>
                            <p className="line">{data.address.line4}</p>
                            <p className="line">{data.address.line5}</p>
                            <p className="line">
                                <a href={`mailto:${data.address.email}?Subject=Hello%20GoodRoots`}>
                                    {data.address.email}
                                </a>
                            </p>
                            <p className="line">
                                <a href={`tel:${data.address.contactNumber}`}>
                                    {data.address.contactNumber}
                                </a>                            
                                </p>
                            <SocialIcons />
                        </div>
                        <div className="right__content">
                            <img src={data.img} alt={data.alt} />
                            <a className="map"
                                target="_blank"
                                href="https://goo.gl/maps/KpiWkomEV7U2">
                                « Open in Google Maps »
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </Element>
    );
};

export default Footer;