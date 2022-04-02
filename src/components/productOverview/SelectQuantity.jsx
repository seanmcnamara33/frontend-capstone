/* eslint-disable */
import React from 'react';

const SelectQuantity = ({ currentSize, currentStyle, onQuantityChange }) => {
  if (Object.keys(currentSize).length) {
    let quantityList = [];
    for (let i = 1; i < currentSize.quantity; i++) {
      if (i >= 15) {
        break;
      }
      quantityList.push(i + 1);
    }
    return (
      <select className='select-quantity' onChange={(event) => onQuantityChange(event)}>
        <option value='1'>1</option>
        {quantityList.map((amount, index) => {
          return <option value={amount} key={`amount${index}`}>{amount}</option>
        })}
      </select>
    )
  }
  return(
    <select className='select-quantity'>
      <option value='' disabled={true}>-</option>
    </select>
  );
};

export default SelectQuantity;