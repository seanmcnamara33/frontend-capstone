/* eslint-disable */
import React from 'react';
import StylesRow from './StylesRow.jsx';

const StylesView = ({ allStyles, onStyleCircleClick, currentStyle}) => {
  let styleGroups = [];
  for (let i = 0; i < allStyles.length; i = i + 4) {
    let len = allStyles.length - i;
    if (len > 4) {
      let styleGroup = allStyles.slice(i, 4);
      styleGroups.push(styleGroup);
    } else {
      let styleGroup = allStyles.slice(i, allStyles.length);
      styleGroups.push(styleGroup);
    }
  }
  if (allStyles.length > 0) {
    return (
      styleGroups.map((styleGroup, index) => {
        return <StylesRow key={index} index={index} styleGroup={styleGroup} onStyleCircleClick={onStyleCircleClick} currentStyle={currentStyle}/>
      })
    );
  }
  return null;
};

export default StylesView;