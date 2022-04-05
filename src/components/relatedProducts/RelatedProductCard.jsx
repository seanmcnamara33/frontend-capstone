/* eslint-disable */
import React, { useState, useEffect } from 'react';

const RelatedProductCard = ({ prod }) => {
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState([]);

  const getProduct = () => {
    fetch(`${process.env.API_URI}/products/${prod}`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then(result => {
          setProduct(result);
        })
      })
  };

  const getStyle = () => {
    fetch(`${process.env.API_URI}/products/${prod}/styles`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then(result => {
          setStyle(result.results[0]);
        })
      })
  }

  useEffect(() => {
    getProduct();
    getStyle();
  }, [])

  return (
    <div>
      <p>{product.name}</p>
    </div>
  );
}

export default RelatedProductCard;

//style.results[0].sale_price ? style.results[0].sale_price:
