/* eslint-disable */
import React from 'react';
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
      <button className='add-to-cart' onClick={() => onAddToCartClickNoSize()}>Add To Bag</button>
    )
  } else if (sizes.length) {
    return (
      <button className='add-to-cart' onClick={() => onAddToCartClick()}>Add To Bag</button>
    )
  }
  return null;
}
export default AddToCart;