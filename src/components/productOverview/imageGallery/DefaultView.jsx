/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const DefaultGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 60px;
  height: 80vh;
  width: 100%;
`;
const Image = styled.img `
  height: 100%;
  width: 100%;
  cursor: zoom-in;
`;


const DefaultView = ({image, onGalleryButtonClick, currentView, onImageClick}) => {
  if (currentView === 'default') {
    return (
      <DefaultGallery>
        <button className='image-left' onClick={(event) => onGalleryButtonClick(event)}>{String.fromCharCode(0x2190)}</button>
        <Image src={image.url} onClick={() => onImageClick(image)}></Image>
        <button className='image-right' onClick={(event) => onGalleryButtonClick(event)}>{String.fromCharCode(0x2192)}</button>
      </DefaultGallery>
    )
  }
  return null;
}

export default DefaultView;
// style={{all: 'unset'}}