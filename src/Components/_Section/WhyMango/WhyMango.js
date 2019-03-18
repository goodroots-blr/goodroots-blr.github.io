import React from 'react';
import Scrolling from './../../_UI/Scrolling/Scrolling'
import './WhyMango.scss';

const WhyMango = ({ data }) => {
    return (
        <div className="WhyMango">
            <div className="container">
                <h1 className="main-title">
                    {data.title()}
                </h1>
                {/* <div className={`center-item item center-item-1`}>
                    <i className={`icon ${data.items3[0].icon}`} />
                    <div class="item-content">
                        <strong>{data.items3[0].title}</strong>
                        <p>{data.items3[0].desc}</p>
                    </div>
                </div> */}
                <div className="WhyMango-content">
                    <ul className="WhyMango-content-list">
                        {
                            data.items1.map((item, i) => {
                                return (
                                    <li key={`item1-${i + 1}`}
                                        className={`left-item item item1-${i + 1}`}>
                                        <div className="item-content">
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
                    </div>
                    <ul className="WhyMango-content-list">
                        {
                            data.items2.map((item, i) => {
                                return (
                                    <li key={`item2-${i + 1}`} 
                                        className={`right-item item item2-${i + 1}`}>
                                        <i className={`icon ${item.icon}`} />
                                        <div className="item-content">
                                            <strong>{item.title}</strong>
                                            <p>{item.desc}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* <div className={`center-item item center-item-2`}>
                    <i className={`icon ${data.items3[0].icon}`} />
                    <div class="item-content">
                        <strong>{data.items3[0].title}</strong>
                        <p>{data.items3[0].desc}</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Scrolling({ scrollId: "whyMango" })(WhyMango);