import React from 'react';
import img1 from "./../images/OurProducts/product-1.png";
// import img2 from "./../images/OurProducts/product-2.png";
// import img3 from "./../images/OurProducts/product-3.png";
// import img4 from "./../images/OurProducts/product-4.png";
// import img5 from "./../images/OurProducts/product-5.png";
// import img6 from "./../images/OurProducts/product-6.png";
import data from './CompanyRelated';

export default {
  "title": () => <><strong>Our</strong> products</>,
  "bulkOrderText": () => <>
    For bulk orders or for regular supply of our mangoes please write to us at &nbsp;
    <u>
      {data.email}
    </u>
  </>,
  "products": {
    "product-id-1": {
      "id" : "product-id-1",
      "title": "Alphanso",
      "category": "Alphanso",
      "options": [
        {
          "id": "product-id-1-1",
          "parentId":"product-id-1",
          "label": "1 dozon",
          "price": "1000",
          "img": img1,
        },
        {
          "id": "product-id-1-2",
          "parentId":"product-id-1",
          "label": "2 dozon",
          "price": "2000",
          "img": img1,
        },
        {
          "id": "product-id-1-3",
          "parentId":"product-id-1",
          "label": "3 dozon",
          "price": "3000",
          "img": img1,
        }
      ]
    },
    "product-id-2": {
      "id" : "product-id-2",
      "title": "Banganapalli",
      "category": "Banganapalli",
      "options": [
        {
          "id": "product-id-2-1",
          "parentId":"product-id-2",
          "label": "1 dozon",
          "price": "1000",
          "img": img1,
        },
        {
          "id": "product-id-2-2",
          "parentId":"product-id-2",
          "label": "2 dozon",
          "price": "2000",
          "img": img1,
        },
        {
          "id": "product-id-2-3",
          "parentId":"product-id-2",
          "label": "3 dozon",
          "price": "3000",
          "img": img1,
        }
      ]
    }
  }
}