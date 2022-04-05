/* eslint-disable */
import React, { useState } from 'react';

const ProductInfo = ({ currentItem }) => {
  if (currentItem.description) {
    return (
      <div>
        <p>
          Product Description:
          {currentItem.description}
        </p>
      </div>
    );
  }
  return (null);
};

export default ProductInfo;
