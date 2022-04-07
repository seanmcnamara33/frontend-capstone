/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const AddToCartButton = styled.button`
  all: unset;
  height: 100%;
  width: 75%;
  background-color: white;
  padding:0.35em 1.2em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 3px;
  box-sizing: border-box;
  text-decoration:none;
  text-align: center;
  font-family:'Roboto',sans-serif;
  font-weight:300;
`;

const AddToCart = ({currentStyle, currentSize, onAddToCartClick, onAddToCartClickNoSize}) => {
  let sizes = new Set();
  for (let sku in currentStyle.skus) {
    if (currentStyle.skus[sku].quantity > 0) {
      sizes.add(currentStyle.skus[sku].size);
    }
  }
  sizes = Array.from(sizes);
  if (!Object.keys(currentSize).length) {
    return (
      <AddToCartButton onClick={() => onAddToCartClickNoSize()}>Add To Bag {String.fromCharCode(0xFF0B)}</AddToCartButton>
    )
  } else if (sizes.length) {
    return (
      <AddToCartButton onClick={() => onAddToCartClick()}>Add To Bag {String.fromCharCode(0xFF0B)}</AddToCartButton>
    )
  }
  return null;
}
export default AddToCart;