/* eslint-disable */
import React from 'react';
import {BsCheck2Circle} from 'react-icons/bs';
import {StyleCircleRow, StyleCircle, StyleCircleSelected, CircleCheck} from './StyleSelectorStyles.jsx';

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
            <div key={style.style_id}>
              <StyleCircleSelected alt='circular view of currently selected style thumbnail' onClick={(event) => onStyleCircleClick(event, trueStyleIndex + i)} className='style-circle' src={style.photos[0].thumbnail_url}></StyleCircleSelected>
              <CircleCheck><BsCheck2Circle/></CircleCheck>
            </div>
          )
        } else {
          return <StyleCircle  alt='circular view of not-currently selected style thumbnail' key={style.style_id} onClick={(event) => onStyleCircleClick(event, trueStyleIndex + i)} className='style-circle' src={style.photos[0].thumbnail_url}></StyleCircle>
        }
      })}
    </StyleCircleRow>
  );
};

export default StylesRow;