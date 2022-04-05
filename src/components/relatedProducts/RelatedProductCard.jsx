/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: end;
  align-items: center;
  padding-left: 3px;
  padding-right: 3px;
`;

const RelatedProductCard = ({ prod }) => {
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState([]);
  const [image, setImage] = useState('');

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
          setImage(result.results[0].photos[0].thumbnail_url);
        })
      })
  }

  useEffect(() => {
    getProduct();
    getStyle();
  }, [])

  return (
    <CardStyle>
      <img src={image}/>
      <p>{product.name}</p>
      <p>${style.original_price}</p>
    </CardStyle>
  );
}

export default RelatedProductCard;

//style.results[0].sale_price ? style.results[0].sale_price:
