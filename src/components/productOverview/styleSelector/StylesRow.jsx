/* eslint-disable */
import React from 'react';

const StylesRow = ({ index, styleGroup, onStyleCircleClick }) => {
  let trueStyleIndex;
  if (index === 0) {
    trueStyleIndex = 0;
  } else {
    trueStyleIndex = (index * 4);
  }
  return (
    <div className='styles-row'>
      {styleGroup.map((style, i) => {
        return <span onClick={(event) => onStyleCircleClick(event, trueStyleIndex + i)} key={i} className='style-circle'>{style.name} | </span>
      })}
    </div>
  );
};

export default StylesRow;