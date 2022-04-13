/* eslint-disable */
import React, {useState} from 'react';
import {DefaultGallery} from './ImageGalleryStyles.jsx';

const DefaultView = ({image, onGalleryButtonClick, currentView, onImageClick}) => {
  if (currentView === 'default') {
    return (
      <img className='default-img' src={image.url} alt='default view of currently selected image of currently selected style' onClick={() => onImageClick(image)}></img>
    )
  }
  return null;
}

export default DefaultView;