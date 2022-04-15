/* eslint-disable */
import React, {useState} from 'react';
import {DefaultImg} from './ImageGalleryStyles.jsx';

const DefaultView = ({image, onGalleryButtonClick, currentView, onImageClick}) => {
  const placeholder = 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80';
  if (image === undefined) {
    image = {url: placeholder, thumbnail_url: placeholder}
  }
  if (image !== undefined && currentView === 'default' && image.url !== undefined) {
    return (
      <DefaultImg src={image.url} alt='default view of currently selected image of currently selected style' onClick={() => onImageClick(image)}></DefaultImg>
    )
  }
  return null;
}

export default DefaultView;