/* eslint-disable */
import React, {useState, useEffect} from 'react';
import DefaultView from './DefaultView.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import {ImageGalleryComponent, ImageLeft, ImageRight} from './ImageGalleryStyles.jsx';
import {placeholder} from '../../common/helpers.js';

const ImageGallery = ({currentStyle, currentView, onImageClick, currentImage}) => {
  if (Object.keys(currentStyle).length) {
    let photosArray = currentStyle.photos || [];
    if (!photosArray.length) {
      photosArray.push({url: placeholder, thumbnail_url: placeholder})
    }
    if (photosArray[0].thumbnail_url === undefined || photosArray[0].thumbnail_url === null) {
      photosArray[0].thumbnail_url = placeholder;
    }
    if (photosArray[0].url === undefined || photosArray[0].url === null) {
      photosArray[0].url = placeholder;
    }
    const [currentStylePhotoIndex, setStyleIndex] = useState(0);
    const [isInTransition, setTransition] = useState(false);
    const getCurrentImage = () => {
      for (let i = 0; i < photosArray.length; i++) {
        if (currentImage.url === photosArray[i].url) {
          setStyleIndex(i);
          break;
        }
      }
    }
    let onGalleryButtonClick = (event) => {
      var direction = event.target.dataset.direction;
      if (direction === 'left' && currentStylePhotoIndex !== 0) {
        setStyleIndex(currentStylePhotoIndex - 1);
      }
      else if (direction === 'right' && currentStylePhotoIndex !== photosArray.length - 1) {
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
      <ImageLeft data-direction='left' onClick={(event) => onGalleryButtonClick(event)}>{String.fromCharCode(0x2B05)}</ImageLeft>
      <DefaultView photosArray={photosArray} currentStylePhotoIndex={currentStylePhotoIndex} currentView={currentView} image={photosArray[currentStylePhotoIndex]} onImageClick={onImageClick}/>
      <ImageRight data-direction='right' onClick={(event) => onGalleryButtonClick(event)}>{String.fromCharCode(0x2B95)}</ImageRight>
    </ImageGalleryComponent>
  );
  }
  return null;
}

export default ImageGallery;