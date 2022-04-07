/* eslint-disable */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DefaultView from './DefaultView.jsx';
// import ExpandedView from './ExpandedView.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

const ImageGalleryComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 20px 20px 40px 20px;
  height: 100%;
  width: 65%;
`;

const ImageGallery = ({currentStyle, allStyles, currentView, onImageClick, currentImage}) => {
  if (Object.keys(currentStyle).length) {
    const photosArray = currentStyle.photos;
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