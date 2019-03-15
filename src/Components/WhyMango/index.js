import React from 'react';
import {
    Element,
} from "react-scroll";

import './WhyMango.scss';

const WhyMango = props => {
    return (
        <Element name="whyMango" className="WhyMango">
            <div className="container">
                <h1 className="main-title">
                    <strong>Why</strong> Mango
                    </h1>
                <div className="WhyMango-content">
                    <ul>
                        <li>
                            <strong>100% Carbide free </strong>
We bring these mangoes directly from farms in semi ripened condition hence no ripening process is used</li>
                        <li>
                            <strong>Farm Fresh </strong>
All our mangoes are farm fresh. We bring fresh stock every alternate day maintaining freshness of the fruit
                            </li>
                        <li>
                           <strong>Original Alphonso's </strong>
The mangoes are original ratnagiri Alphonso’s which are famous worldwide grown in our ratnagiri & devgad farms
                            </li>
                        <li>
                            <strong>Grade 1 Quality </strong>
We only server export quality mangoes which are grade 1 quality and each fruit is about 250 to 270 gms
                            </li>
                        <li><strong>3 Ply packaging </strong>
We use solid 3 ply packing boxed especially designed for mangoes with vents to keep then fresh during transit</li>
                        <li><strong>Pan India Delivery </strong>
We can ship these mangoes almost everywhere in India in 2/4 days of time so that you enjoy best fruit</li>
                        <li>Multiple harvesting over weeks to ensure naturally ripened fruits
</li>
                        <li>Natural ripening method* used at our own packaging centre
</li>
                        <li>IIHR mandated practices for fruits setting, harvesting and ripening</li>
                        <li>Delivering from ‘tree to consumer’ in max. 5-7 days
</li>
                    </ul>
                </div>
            </div>
        </Element >
    );
};

export default WhyMango;