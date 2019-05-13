import React from 'react';
import img1 from "./../images/OurProducts/product-1.png";
import img2 from "./../images/OurProducts/product-2.png";
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
  "products": [
    {
      "id": "p-1",
      "title": "Kensington Pride",
      "category": "Kensington Pride",
      "options": [
        {
          "id": "p-1-1",
          "parentId": "p-1",
          "label": "1/2 dozen",
          "price": "599",
          "img": img2,
        },
        {
          "id": "p-1-2",
          "parentId": "p-1",
          "label": "1 dozen",
          "price": "899",
          "img": img2,
        },
        {
          "id": "p-1-3",
          "parentId": "p-1",
          "label": "2 dozen",
          "price": "1599",
          "img": img2,
        },
        {
          "id": "p-1-4",
          "parentId": "p-1",
          "label": "3 dozen",
          "price": "2399",
          "img": img2,
        }
      ]
    },
    {
      "id": "p-2",
      "title": "Alphonso",
      "category": "Alphonso",
      "options": [
        {
          "id": "p-2-1",
          "parentId": "p-2",
          "label": "1/2 dozen",
          "price": "599",
          "img": img1,
        },
        {
          "id": "p-2-2",
          "parentId": "p-2",
          "label": "1 dozen",
          "price": "899",
          "img": img1,
        },
        {
          "id": "p-2-3",
          "parentId": "p-2",
          "label": "2 dozen",
          "price": "1599",
          "img": img1,
        },
        {
          "id": "p-2-4",
          "parentId": "p-2",
          "label": "3 dozen",
          "price": "2399",
          "img": img1,
        }
      ]
    }
  ]
}