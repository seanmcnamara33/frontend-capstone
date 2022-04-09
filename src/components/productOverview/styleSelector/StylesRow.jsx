/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';
import {BsCheck2Circle} from 'react-icons/bs';
import {StyleCircleRow, StyleCircle, StyleCircleSelected} from './StyleSelectorStyles.jsx';

const placeholder = 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80';

const StylesRow = ({ index, styleGroup, onStyleCircleClick, currentStyle }) => {
  let trueStyleIndex;
  if (index === 0) {
    trueStyleIndex = 0;
  } else {
    trueStyleIndex = (index * 4);
  }
  return (
    <StyleCircleRow className='styles-row'>
      {styleGroup.map((style, i) => {
        if (style.photos[0].thumbnail_url === null ) {
          style.photos[0].thumbnail_url = placeholder;
        }
        if (style.photos[0].url === null) {
          style.photos[0].url = placeholder;
        }
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