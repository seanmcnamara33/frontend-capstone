/* eslint-disable */
import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import {SizeDiv} from './StyleSelectorStyles.jsx';

const customStyles = {
  option: () => ({}),
  control: () => ({
    all: 'unset',
    fontFamily: '"Roboto", sans-serif',
    fontWeight: '300',
  }),
}

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
      <SizeDiv>
        <Select components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} options={options} ref={selectRef} openMenuOnFocus={true} styles={customStyles} onChange={(event) => onSizeChange(event)} placeholder='Select Size'>
        </Select>
      </SizeDiv>
    );
  }
  return(
    <Select components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} options={{value: '', label: ''}}  styles={customStyles} placeholder='Select Size'></Select>
  )
};

export default SelectSize;

{/* <option value=''>Select Size</option>
{sizes.map((size, index) => {
  return <option value={size} key={`size${index}`}>{size}</option>
})} */}
