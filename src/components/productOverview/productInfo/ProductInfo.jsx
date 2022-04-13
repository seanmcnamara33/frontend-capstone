/* eslint-disable */
import React from 'react';
import {ProductDescriptionContainer, ProductDescriptionTitle} from './ProductInfoStyles.jsx';

const ProductInfo = ({ currentItem }) => {
  if (currentItem.description) {
    return (
      <ProductDescriptionContainer>
        <ProductDescriptionTitle>{currentItem.slogan}</ProductDescriptionTitle>
        <p>{currentItem.description}</p>
      </ProductDescriptionContainer>
    );
  }
  return (null);
};

export default ProductInfo;
