import React from 'react';
import Scrolling from './../../_UI/Scrolling/Scrolling';
import './WhoWeAre.scss';

const WhoWeAre = ({ data }) => {
    return (
        <div className="whoWeAre section-top-spacing">
            <div className="container">
                <h1 className="main-title">
                    {data.title()}
                </h1>
                <div className="content">
                    <div className="left__content">
                        <h2>
                            {data.subTitle}
                        </h2>
                        {
                            data.paragraphs.map((para, index) => {
                                return (
                                    <p key={`whoweare-${index}`}>
                                        {para}
                                    </p>
                                )
                            })
                        }

                        {data.listItems && <ul>
                            {
                                data.listItems.map((item) => {
                                    return (
                                        <li key={item}>{item}</li>
                                    )
                                })
                            }
                        </ul>}
                    </div>
                    <div className="right__content">
                        <img src={data.img} alt={data.alt} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scrolling({ scrollId: "whoweare" })(WhoWeAre);