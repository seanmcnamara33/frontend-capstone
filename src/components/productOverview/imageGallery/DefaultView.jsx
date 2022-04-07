/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const DefaultGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  margin: 20px;
  background-color: grey;
  border-radius: 3px;
  height: 80vh;
  width: 100%;
`;
const Image = styled.img `
  min-height: 100%;
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
  border-radius: 3px;
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