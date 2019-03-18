import React from 'react';
import map from "./../images/Footer/map.png";
import data from './CompanyRelated';

export default {
    title: () => <><strong>Our</strong> Address</>,
    address: data.address,
    contactNumber: data.contactNumber,
    email: data.email,
    img: map,
    alt: "Our Address",
    socailIcons : data.socialIcons,
    mapLink: "https://goo.gl/maps/KpiWkomEV7U2",
    copyrightText: () => <>Copyright @ 2018 GoodRoots LLP Bangalore</>
};
 

