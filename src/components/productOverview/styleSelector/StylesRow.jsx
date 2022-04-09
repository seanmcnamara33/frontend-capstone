/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';
import {BsCheck2Circle} from 'react-icons/bs';
import {StyleCircleRow, StyleCircle, StyleCircleSelected} from './StyleSelectorStyles.jsx';

const StylesRow = ({ index, styleGroup, onStyleCircleClick, currentStyle }) => {
  console.log(styleGroup);
  let trueStyleIndex;
  if (index === 0) {
    trueStyleIndex = 0;
  } else {
    trueStyleIndex = (index * 4);
  }
  return (
    <StyleCircleRow className='styles-row'>
      {styleGroup.map((style, i) => {
        if (currentStyle.style_id === style.style_id) {
          return (
            <div key={`selected-style${i}`}>
              <StyleCircleSelected onClick={(event) => onStyleCircleClick(event, trueStyleIndex + i)} className='style-circle' src={style.photos[0].thumbnail_url}></StyleCircleSelected>
              <div className='circle-check'><BsCheck2Circle/></div>
            </div>
          )
        } else {
          return <StyleCircle  key={`style${i}`} onClick={(event) => onStyleCircleClick(event, trueStyleIndex + i)} className='style-circle' src={style.photos[0].thumbnail_url}></StyleCircle>
        }
      })}
    </StyleCircleRow>
  );
};

export default StylesRow;