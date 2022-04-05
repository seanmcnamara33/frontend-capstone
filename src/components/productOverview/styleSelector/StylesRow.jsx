/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const StyleCircleRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  margin: 10px;
`;

const StyleCircle = styled.img`
  height: 60px;
  width: 60px;
  margin-left: 5px;
  margin-right: 5px;
  border: 1px solid black;
  border-radius: 50%;
`;

const StylesRow = ({ index, styleGroup, onStyleCircleClick }) => {
  let trueStyleIndex;
  if (index === 0) {
    trueStyleIndex = 0;
  } else {
    trueStyleIndex = (index * 4);
  }
  console.log(styleGroup);
  return (
    <StyleCircleRow className='styles-row'>
      {styleGroup.map((style, i) => {
        return <StyleCircle onClick={(event) => onStyleCircleClick(event, trueStyleIndex + i)} key={i} className='style-circle' src={style.photos[0].thumbnail_url}></StyleCircle>
      })}
    </StyleCircleRow>
  );
};

export default StylesRow;