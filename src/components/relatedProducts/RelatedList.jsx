/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedListStyle = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 400px;
  width: auto;
  padding-left: 5px;
  padding-right: 5px;
`;

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
      <RelatedListStyle>
        {relatedProds.map(prod => {
          return (
            <li key={prod}>
              <RelatedProductCard prod={prod}/>
            </li>
          );
        })}
      </RelatedListStyle>
    </div>
  );
}

export default RelatedList;