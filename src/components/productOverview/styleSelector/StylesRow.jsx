/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';
import {BsCheck2Circle} from 'react-icons/bs';
const StyleCircleRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  margin: 10px;
`;

const StyleCircle = styled.img`
  height: 60px;
  width: 60px;
  opacity: 70%;
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid black;
  border-radius: 50%;
`;

const StyleCircleSelected = styled.img`
  height: 60px;
  width: 60px;
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid black;
  border-radius: 50%;
`;

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