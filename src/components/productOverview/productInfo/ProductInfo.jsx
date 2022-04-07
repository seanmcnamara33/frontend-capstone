/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid black;
  width: 50%;
  box-sizing: border-box;
`;



const ProductInfo = ({ currentItem }) => {
  if (currentItem.description) {
    return (
      <ProductDescription>
        <h4>Product Description</h4>
        <p>{currentItem.description}</p>
      </ProductDescription>
    );
  }
  return (null);
};

export default ProductInfo;
