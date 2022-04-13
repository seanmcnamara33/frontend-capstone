/* eslint-disable */
import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import {QuantityDiv, SelectSizing} from './StyleSelectorStyles.jsx';
import {IoIosArrowDown} from 'react-icons/io';

const customStyles = {
  option: () => ({}),
  control: () => ({
    textAlign: 'center',
  }),
}

const SelectQuantity = ({ currentSize, currentStyle, onQuantityChange }) => {
  if (Object.keys(currentSize).length) {
    let quantityList = [];
    for (let i = 0; i < currentSize.quantity; i++) {
      if (i >= 15) {
        break;
      }
      quantityList.push({value: i + 1, label: i + 1});
    }
    return (
      <QuantityDiv>
        <SelectSizing>
          <Select components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null}} options={quantityList} styles={customStyles} placeholder={<div style={{color: 'black', textAlign: 'left'}}>1</div>}></Select>
        </SelectSizing>
        <div><IoIosArrowDown/></div>
      </QuantityDiv>
    )
  }
  return(
    <QuantityDiv>
      <SelectSizing>
        <Select components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} styles={customStyles} isDisabled placeholder={<div style={{color: 'black', textAlign: 'left'}}>-</div>}></Select>
      </SelectSizing>
      <div><IoIosArrowDown/></div>
    </QuantityDiv>
  );
};

export default SelectQuantity;
