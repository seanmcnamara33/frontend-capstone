/* eslint-disable */
import React, { useState } from 'react';
import Select from 'react-select';

const SelectSize = ({ openMenuOnFocus, selectRef, currentStyle, onSizeChange }) => {
  let sizes = new Set();
  for (let sku in currentStyle.skus) {
    if (currentStyle.skus[sku].quantity > 0) {
      sizes.add(currentStyle.skus[sku].size);
    }
  }
  sizes = Array.from(sizes);
  var options = [];
  for (var i = 0; i < sizes.length; i++) {
    options.push({value: sizes[i], label: sizes[i]});
  }
  if (sizes.length) {
    return (
      <Select options={options} style={{all: 'unset'}} ref={selectRef} openMenuOnFocus={true} className='sizes-select' onChange={(event) => onSizeChange(event)} placeholder='Select Size'>
      </Select>
    );
  }
  return(
    <Select options={{value: '', label: ''}} className='sizes-select' placeholder='Select Size'></Select>
  )
};

export default SelectSize;

{/* <option value=''>Select Size</option>
{sizes.map((size, index) => {
  return <option value={size} key={`size${index}`}>{size}</option>
})} */}