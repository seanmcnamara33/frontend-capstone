/* eslint-disable */
import React, { useState } from 'react';

const SelectSize = ({ currentStyle, onSizeChange }) => {
  let sizes = new Set();
  for (let sku in currentStyle.skus) {
    if (currentStyle.skus[sku].quantity > 0) {
      sizes.add(currentStyle.skus[sku].size);
    }
  }
  sizes = Array.from(sizes);
  if (sizes.length) {
    return (
      <select id='size' className='sizes-select' onChange={(event) => onSizeChange(event)}>
        <option value=''>Select Size</option>
        {sizes.map((size, index) => {
          return <option value={size} key={`size${index}`}>{size}</option>
        })}
      </select>
    );
  }
  return(
    <select className='sizes-select'>
      <option value='' disabled={true}>OUT OF STOCK</option>
    </select>
  )
};

export default SelectSize;