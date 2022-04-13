/* eslint-disable */
import React, {useState} from 'react';
import {ThumbnailContainer, Thumbnail, SelectedContainer, SelectedThumbnail, SelectedThumbnailUnderline} from './ImageGalleryStyles.jsx';

const ThumbnailCarousel = ({photosArray, onThumbnailImageClick, currentStylePhotoIndex}) => {
  const [count, setCount] = useState(0);
  var currentThumbnails = photosArray.slice(count, count + 7);

  const onThumbnailButtonClick = (event) => {
    if (currentThumbnails.length === 7 && photosArray.length > 7) {
      if (event.target.classList[0] === 'image-up' && count > 0) {
        setCount(count - 1);
      } else if (event.target.classList[0] === 'image-down' && count < photosArray.length - 7){
        setCount(count + 1);
      }
    }
  };

  return (
    <ThumbnailContainer className='thumbnail-carousel'>
      <button style={{all: 'unset'}} className='image-up' onClick={(event) => onThumbnailButtonClick(event)}>{String.fromCharCode(0x2303)}</button>
      {currentThumbnails.map((photo, i) => {
        if (photo.thumbnail_url === photosArray[currentStylePhotoIndex].thumbnail_url) {
          return (
          <SelectedContainer key={photo.thumbnail_url}>
            <SelectedThumbnail id={i + count} src={photo.thumbnail_url} alt='selected style thumbnail image' onClick={(event) => onThumbnailImageClick(event)}></SelectedThumbnail>
            <SelectedThumbnailUnderline></SelectedThumbnailUnderline>
          </SelectedContainer>
          );
        }
        return <Thumbnail id={i + count} src={photo.thumbnail_url} alt='style thumbnail image' key={photo.thumbnail_url} onClick={(event) => onThumbnailImageClick(event)}></Thumbnail>
      })}
      <button style={{all: 'unset'}} className='image-down' onClick={(event) => onThumbnailButtonClick(event)}>{String.fromCharCode(0x2304)}</button>
    </ThumbnailContainer>
  );
}
export default ThumbnailCarousel;
