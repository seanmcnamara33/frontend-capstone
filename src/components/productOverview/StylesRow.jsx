/* eslint-disable */
import React from 'react';

const StylesRow = ({ index, styleGroup }) => {
  return (
    <div className='styles-row'>
      {styleGroup.map((style, index) => {
        return <span key={index} className='style-circle'>{style.name} | </span>
      })}
    </div>
  );
};

export default StylesRow;