/* eslint-disable */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DefaultView from './DefaultView.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import {ImageGalleryComponent} from './ImageGalleryStyles.jsx';

const placeholder = 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80';

const ImageGallery = ({currentStyle, currentView, onImageClick, currentImage}) => {
  if (Object.keys(currentStyle).length) {
    const photosArray = currentStyle.photos;
    if (photosArray[0].thumbnail_url === null ) {
      photosArray[0].thumbnail_url = placeholder;
    }
    if (photosArray[0].url === null) {
      photosArray[0].url = placeholder;
    }
    const [currentStylePhotoIndex, setStyleIndex] = useState(0);
    const getCurrentImage = () => {
      for (let i = 0; i < photosArray.length; i++) {
        if (currentImage.url === photosArray[i].url) {
          setStyleIndex(i);
          break;
        }
      }
    }
    let onGalleryButtonClick = (event) => {
      var direction = event.target.classList[0];
      if (direction === 'image-left' && currentStylePhotoIndex !== 0) {
        setStyleIndex(currentStylePhotoIndex - 1);
      }
      else if (direction === 'image-right' && currentStylePhotoIndex !== photosArray.length - 1) {
        setStyleIndex(currentStylePhotoIndex + 1);
      }
    }
    const onThumbnailImageClick = (event) => {
      setStyleIndex(Number(event.target.id));
    }

    useEffect(() => {
      getCurrentImage();
    }, [])
  return (
    <ImageGalleryComponent className='image-gallery-component'>
      <ThumbnailCarousel photosArray={photosArray} onThumbnailImageClick={onThumbnailImageClick} currentStylePhotoIndex={currentStylePhotoIndex}/>
      <DefaultView currentView={currentView} image={photosArray[currentStylePhotoIndex]} onGalleryButtonClick={onGalleryButtonClick} onImageClick={onImageClick}/>
    </ImageGalleryComponent>
  );
  }
  return null;
}

export default ImageGallery;