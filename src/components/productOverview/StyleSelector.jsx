/* eslint-disable */
import React, { useState } from 'react';
const StyleSelector = ({currentItem, currentStyle}) => {
  if (Object.keys(currentStyle).length) {
    return(
      <div>
        <p><b>STYLE > </b>{currentStyle.name}</p>
      </div>
    );
  } else {
    return null;
  }
};
export default StyleSelector;