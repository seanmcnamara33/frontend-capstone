/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import {AddToCartButton} from './AddToCartStyles.jsx';

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