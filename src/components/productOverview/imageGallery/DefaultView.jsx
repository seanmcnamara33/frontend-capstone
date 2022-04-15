/* eslint-disable */
import React, {useState} from 'react';
import {DefaultImg} from './ImageGalleryStyles.jsx';

const DefaultView = ({image, onGalleryButtonClick, currentView, onImageClick}) => {
  if (currentView === 'default') {
    return (
      <DefaultImg src={image.url} alt='default view of currently selected image of currently selected style' onClick={() => onImageClick(image)}></DefaultImg>
    )
  }
  return null;
}

export default DefaultView;