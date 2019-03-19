import React from 'react';
import './Givingback.scss'

const Givingback = ({ data }) => {
    return (
        <div className="givingBack section-top-spacing">
            <div className="container">
                <h1 className="main-title">
                    {data.title()}
                </h1>
                <div className="content">
                    <div className="left__content">
                        <img src={data.img} alt={data.alt} />
                    </div>
                    <div className="right__content">
                        {
                            data.paragraphs.map((para, index) => {
                                return (
                                    <p key={index}>{para}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Givingback;