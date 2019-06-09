import React from 'react';
import mango1 from "./../images/OurProducts/mango-1.png";
import mango2 from "./../images/OurProducts/mango-2.png";
import guava1 from "./../images/OurProducts/guava-1.png";
import data from './CompanyRelated';

const guavaProducts = [
  {
    "id": "p-3",
    "title": "Guava Fruit",
    "category": "Guava Fruit",
    "options": [
      {
        "id": "p-3-1",
        "parentId": "p-3",
        "label": "1/2 dozen",
        "price": "599",
        "img": guava1,
      },
      {
        "id": "p-3-2",
        "parentId": "p-3",
        "label": "1 dozen",
        "price": "899",
        "img": guava1,
      },
      {
        "id": "p-3-3",
        "parentId": "p-3",
        "label": "2 dozen",
        "price": "1599",
        "img": guava1,
      },
      {
        "id": "p-3-4",
        "parentId": "p-3",
        "label": "3 dozen",
        "price": "2399",
        "img": guava1,
      }
    ]
  }
]

const mangoProducts = [
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
        "img": mango2,
      },
      {
        "id": "p-1-2",
        "parentId": "p-1",
        "label": "1 dozen",
        "price": "899",
        "img": mango2,
      },
      {
        "id": "p-1-3",
        "parentId": "p-1",
        "label": "2 dozen",
        "price": "1599",
        "img": mango2,
      },
      {
        "id": "p-1-4",
        "parentId": "p-1",
        "label": "3 dozen",
        "price": "2399",
        "img": mango2,
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
        "img": mango1,
      },
      {
        "id": "p-2-2",
        "parentId": "p-2",
        "label": "1 dozen",
        "price": "899",
        "img": mango1,
      },
      {
        "id": "p-2-3",
        "parentId": "p-2",
        "label": "2 dozen",
        "price": "1599",
        "img": mango1,
      },
      {
        "id": "p-2-4",
        "parentId": "p-2",
        "label": "3 dozen",
        "price": "2399",
        "img": mango1,
      }
    ]
  }
]



const mangoData = {
  "title": () => <><strong>Our</strong> products</>,
  "bulkOrderText": () => <>
    For bulk orders or for regular supply of our mangoes please write to us at &nbsp;
    <u>
      {data.email}
    </u>
  </>,
  "delivery": () => <>Deliveries on <strong>Friday's</strong> and <strong>weekends</strong></>,
  "products": mangoProducts
}

const guavaData = {
  "title": () => <><strong>Our</strong> products</>,
  "bulkOrderText": () => <>
    For bulk orders or for regular supply of our mangoes please write to us at &nbsp;
    <u>
      {data.email}
    </u>
  </>,
  "delivery": () => <>Deliveries on <strong>Friday's</strong> and <strong>weekends</strong></>,
  "products": guavaProducts
}

const ourProductsData = {
  'mango': mangoData,
  'guava': guavaData
}

export default ourProductsData