import React from 'react';
import {
    Element,
} from "react-scroll";

import data from './../../resources/data/WhyMango';
import './WhyMango.scss';

const WhyMango = props => {
    return (
        <Element name="whyMango" className="WhyMango">
            <div className="container">
                <h1 className="main-title">
                    {data.title()}
                </h1>
                <div className={`center-item item center-item-1`}>
                    <i className={`icon ${data.items3[0].icon}`} />
                    <div class="item-content">
                        <strong>{data.items3[0].title}</strong>
                        <p>{data.items3[0].desc}</p>
                    </div>
                </div>
                <div className="WhyMango-content">
                    <ul className="WhyMango-content-list">
                        {
                            data.items1.map((item, i) => {
                                return (
                                    <li className={`left-item item item1-${i + 1}`}>
                                        <div class="item-content">
                                            <strong>{item.title}</strong>
                                            <p>{item.desc}</p>
                                        </div>
                                        <i className={`icon ${item.icon}`} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="image-container">
                        <div className="bgImg"></div>
                        {/* <img src={data.img.src} alt={data.img.alt} /> */}
                    </div>
                    <ul className="WhyMango-content-list">
                        {
                            data.items2.map((item, i) => {
                                return (
                                    <li className={`right-item item item2-${i + 1}`}>
                                        <i className={`icon ${item.icon}`} />
                                        <div class="item-content">
                                            <strong>{item.title}</strong>
                                            <p>{item.desc}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={`center-item item center-item-2`}>
                    <i className={`icon ${data.items3[0].icon}`} />
                    <div class="item-content">
                        <strong>{data.items3[0].title}</strong>
                        <p>{data.items3[0].desc}</p>
                    </div>
                </div>
            </div>
        </Element >
    );
};

export default WhyMango;