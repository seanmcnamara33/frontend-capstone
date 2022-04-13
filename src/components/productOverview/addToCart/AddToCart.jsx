/* eslint-disable */
import React from 'react';
import {AddToCartButton} from './AddToCartStyles.jsx';

const AddToCart = ({currentStyle, currentSize, onAddToCartClick, onAddToCartClickNoSize}) => {
  let sizes = new Set();
  for (let sku in currentStyle.skus) {
    if (currentStyle.skus[sku].quantity > 0) {
      sizes.add(currentStyle.skus[sku].size);
    }
  }
  sizes = Array.from(sizes);
  if (Object.keys(currentSize).length) {
    if (sizes.length) {
      return (
        <AddToCartButton onClick={() => onAddToCartClick()}>
          <>
            <div>Add To Bag</div>
            <div>{String.fromCharCode(0xFF0B)}</div>
          </>
        </AddToCartButton>
      )
    } else {
      return (
        <AddToCartButton disabled={true}>
          <>
            <div>Add To Bag</div>
            <div>{String.fromCharCode(0xFF0B)}</div>
          </>
        </AddToCartButton>
      )
    }
  }
  return (
    <AddToCartButton onClick={() => onAddToCartClickNoSize(sizes)}>
      <>
        <div>Add To Bag</div>
        <div>{String.fromCharCode(0xFF0B)}</div>
      </>
    </AddToCartButton>
  )
}
export default AddToCart;