import React from 'react';
import img1 from "./../images/OurProducts/product-1.png";
import img2 from "./../images/OurProducts/product-2.png";
import img3 from "./../images/OurProducts/product-3.png";
import img4 from "./../images/OurProducts/product-4.png";
import img5 from "./../images/OurProducts/product-5.png";
import img6 from "./../images/OurProducts/product-6.png";
import data from './CompanyRelated';

export default {
  "title": () => <><strong>Our</strong> products</>,
  "bulkOrderText": () => <>
    For bulk orders or for regular supply of our mangoes please write to us at &nbsp;
    <u>
      {data.email}
    </u>
  </>,
  "products": [
    [
      {
        img: img1,
        category: "Alphanso",
        title: "1 dozen",
        cost: "1000.00"
      }
    ],
    [
      {
        img: img4,
        category: "Banganapalli",
        title: "1 dozen",
        cost: "1000.00"
      }
    ]
  ]
}


// ,
    // {
    //   img: img5,
    //   title: "5 dozen",
    //   cost: "5000.00"
    // }