import React from 'react';
import {
    Element,
} from "react-scroll";
import SocialIcons from './../../_UI/SocialIcons/SocialIcons';
import './Footer.scss';

const Footer = ({ data }) => {
    return (
        <Element name="contactus">
            <footer>
                <div className="container">
                    <h1 className="main-title">
                        {data.title()}
                    </h1>
                    <div className="content">
                        <div className="left__content">
                            <p className="address-title">
                                {data.address.title}
                            </p>
                            {
                                data.address.lines.map((line, i) => {
                                    return (
                                        <p key={i} className="line">{line}</p>
                                    )
                                })
                            }
                            <p className="line">
                                <a href={`mailto:${data.email}?Subject=Hello%20GoodRoots`}>
                                    {data.email}
                                </a>
                            </p>
                            <p className="line">
                                <a href={`tel:${data.contactNumber}`}>
                                    {data.contactNumber}
                                </a>
                            </p>
                            <SocialIcons icons={data.socailIcons} />
                        </div>
                        <div className="right__content">
                            <img src={data.img} alt={data.alt} />
                            <a className="map"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={data.mapLink}>
                                {data.mapText}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </Element>
    );
};

export default Footer;