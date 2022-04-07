/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';

const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid black;
  margin-left: 80px;
  padding-right: 20px;
  width: 50%;
  box-sizing: border-box;
`;

const ProductDescriptionTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
`;

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
