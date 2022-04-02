import React from 'react';
import styled from 'styled-components';

const ImageGalleryComponent = styled.div`
  display: flex;
  height: 94vh;
  width: 100%;
  border: 1px solid black;
`;
const ImageGallery = () => {
  return (
    <ImageGalleryComponent className='image-gallery-component'>THIS IS THE IMAGE GALLERY COMPONENT</ImageGalleryComponent>
  );
}

export default ImageGallery;