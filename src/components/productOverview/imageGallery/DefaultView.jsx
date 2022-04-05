/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const DefaultGallery = styled.div`
  display: flex;
`;
const Image = styled.img `
  height: 80%;
  width: 80%;
  cursor: zoom-in;
`;
const DefaultView = ({image, onGalleryButtonClick, currentView, onImageClick}) => {
  if (currentView === 'default') {
    return (
      <DefaultGallery>
        <button className='image-left' onClick={(event) => onGalleryButtonClick(event)}>Left</button>
        <Image src={image.url} onClick={() => onImageClick(image)}></Image>
        <button className='image-right' onClick={(event) => onGalleryButtonClick(event)}>Right</button>
      </DefaultGallery>
    )
  }
  return null;
}

export default DefaultView;