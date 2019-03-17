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
                    <strong>Why </strong> GoodRoots
                    </h1>
                <div className="WhyMango-content">
                    <ul>
                        <li>
                            <strong>100% Carbide free </strong>
we bring these mangoes directly from farms in semi ripened condition hence no ripening process is used</li>
                        <li>
                            <strong>Farm Fresh </strong>
all our mangoes are farm fresh. We bring fresh stock every alternate day maintaining freshness of the fruit
                            </li>
                        <li>
                           <strong>Original Alphonso's </strong>
the mangoes are original ratnagiri Alphonso’s which are famous worldwide grown in our ratnagiri & devgad farms
                            </li>
                        <li>
                            <strong>Grade 1 Quality </strong>
we only server export quality mangoes which are grade 1 quality and each fruit is about 250 to 270 gms
                            </li>
                        <li><strong>Multiple harvesting</strong> over weeks to ensure naturally ripened fruits
</li>
                        <li><strong>Natural ripening method </strong> used at our own packaging centre
</li>
                        <li><strong>IIHR</strong> mandated practices for fruits setting, harvesting and ripening</li>
                        <li><strong>Delivering</strong> from ‘tree to consumer’ in max. 5-7 days
</li>
                    </ul>
                </div>
            </div>
        </Element >
    );
};

export default WhyMango;