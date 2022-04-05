/* eslint-disable */
import React, { useState, useEffect } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedList = () => {
  const [relatedProds, setRelatedProds] = useState([]);
  const productId = 65631;

  const getRelatedProductsID = () => {
    fetch(`${process.env.API_URI}/products/${productId}/related`, { method: 'GET', headers: { Authorization: process.env.API_KEY }})
      .then((response) => {
        response.json().then((results) => {
          setRelatedProds(results);
        })
      })
      .catch((err) => console.log(`Error getting related products: ${err}`))
  }

  useEffect(() => {
    getRelatedProductsID();
  }, [])

  return (
    <div>
      <h3>Related Products</h3>
      <ol>
        {relatedProds.map(prod => {
          return (
            <li key={prod}>
              <RelatedProductCard prod={prod}/>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default RelatedList;