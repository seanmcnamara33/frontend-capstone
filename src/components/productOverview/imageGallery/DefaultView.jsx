/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';
import {DefaultGallery} from './ImageGalleryStyles.jsx';

const DefaultView = ({image, onGalleryButtonClick, currentView, onImageClick}) => {
  if (currentView === 'default') {
    return (
      <DefaultGallery>
        <button className='image-left' onClick={(event) => onGalleryButtonClick(event)}>{String.fromCharCode(0x2B05)}</button>
        <img className='default-img' src={image.url} alt='default view of currently selected image of currently selected style' onClick={() => onImageClick(image)}></img>
        <button className='image-right' onClick={(event) => onGalleryButtonClick(event)}>{String.fromCharCode(0x2B95)}</button>
      </DefaultGallery>
    )
  }
  return null;
}

export default DefaultView;