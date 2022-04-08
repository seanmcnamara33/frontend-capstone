/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import {ProductDescriptionContainer, ProductDescriptionTitle} from './ProductInfoStyles.jsx';

const ProductInfo = ({ currentItem }) => {
  if (currentItem.description) {
    return (
      <ProductDescriptionContainer>
        <ProductDescriptionTitle>Product Description</ProductDescriptionTitle>
        <p>{currentItem.description}</p>
      </ProductDescriptionContainer>
    );
  }
  return (null);
};

export default ProductInfo;
