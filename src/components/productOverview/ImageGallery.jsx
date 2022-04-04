/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

const ImageGalleryComponent = styled.div`
  display: flex;
  height: 94vh;
  width: 100%;
  border: 1px solid black;
`;
const ImageGallery = ({currentStyle, allStyles}) => {
  if (Object.keys(currentStyle).length) {
    const photosArray = currentStyle.photos;
    const [currentStylePhotoIndex, setStyleIndex] = useState(0);
    const [currentView, setView] = useState('default');
    let onGalleryButtonClick = (event) => {
      var direction = event.target.classList[0];
      if (direction === 'image-left' && currentStylePhotoIndex !== 0) {
        console.log(currentStylePhotoIndex);
        setStyleIndex(currentStylePhotoIndex - 1);
      }
      else if (direction === 'image-right' && currentStylePhotoIndex !== photosArray.length - 1) {
        console.log(currentStylePhotoIndex);
        setStyleIndex(currentStylePhotoIndex + 1);
      }
    }

    const onThumbnailImageClick = (event) => {
      setStyleIndex(Number(event.target.id));
    }

    const onImageClick = (event) => {
      setView('expanded');
    }
  return (
    <ImageGalleryComponent className='image-gallery-component'>
      <ThumbnailCarousel photosArray={photosArray} onThumbnailImageClick={onThumbnailImageClick} currentStylePhotoIndex={currentStylePhotoIndex}/>
      <DefaultView currentView={currentView} image={photosArray[currentStylePhotoIndex]} onGalleryButtonClick={onGalleryButtonClick} onImageClick={onImageClick}/>
      <ExpandedView currentView={currentView}/>
    </ImageGalleryComponent>
  );
  }
  return null;
}

export default ImageGallery;