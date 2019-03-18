import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Scrolling from './../../_UI/Scrolling/Scrolling';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './OurFarm.scss';


const OurFarm = ({data}) => {
    return (
        <div name="ourFarm" className="ourFarm">
            <div className="container">
                <h1 className="main-title">
                    {data.title()}
                </h1>
            </div>
            <Carousel
            autoPlay
            infiniteLoop 
            stopOnHover={false}
            showStatus={false}
            showThumbs={false}>
                {data.images.map((item) => {
                    return (
                        <div key={item.alt}>
                            <img src={item.img} alt={item.alt} />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    );
};

export default Scrolling({ scrollId: "ourFarm" })(OurFarm);