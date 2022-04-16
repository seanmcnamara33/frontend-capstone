/* eslint-disable */
import React, {useState} from 'react';
import {ThumbnailContainer, Thumbnail, SelectedContainer, SelectedThumbnail, SelectedThumbnailUnderline, ThumbnailButton} from './ImageGalleryStyles.jsx';

const ThumbnailCarousel = ({photosArray, onThumbnailImageClick, currentStylePhotoIndex}) => {
  const [count, setCount] = useState(0);
  var currentThumbnails = photosArray.slice(count, count + 7);

  const onThumbnailButtonClick = (event) => {
    if (currentThumbnails.length === 7 && photosArray.length > 7) {
      if (event.target.dataset.direction === 'up' && count > 0) {
        setCount(count - 1);
      } else if (event.target.dataset.direction === 'down' && count < photosArray.length - 7){
        setCount(count + 1);
      }
    }
  };

  const checkPhotoUrl = url =>
    /^http?s?:?/.test(url)

  return (
    <ThumbnailContainer className='thumbnail-carousel'>
      <ThumbnailButton data-direction='up' onClick={(event) => onThumbnailButtonClick(event)}>{String.fromCharCode(0x02C4)}</ThumbnailButton>
      {currentThumbnails.map((photo, i) => {
        if (photo !== undefined && checkPhotoUrl(photo.thumbnail_url) && photo.thumbnail_url === photosArray[currentStylePhotoIndex]?.thumbnail_url) {
          return (
          <SelectedContainer key={photo.thumbnail_url}>
            <SelectedThumbnail id={i + count} src={photo.thumbnail_url} alt='selected style thumbnail image' onClick={(event) => onThumbnailImageClick(event)}></SelectedThumbnail>
            <SelectedThumbnailUnderline></SelectedThumbnailUnderline>
          </SelectedContainer>
          );
        }
        if (photo !== undefined && checkPhotoUrl(photo.thumbnail_url)) {
          return <Thumbnail id={i + count} src={photo.thumbnail_url} alt='style thumbnail image' key={photo.thumbnail_url} onClick={(event) => onThumbnailImageClick(event)}></Thumbnail>
        }
      })}
      <ThumbnailButton data-direction='down' onClick={(event) => onThumbnailButtonClick(event)}>{String.fromCharCode(0x02C5)}</ThumbnailButton>
    </ThumbnailContainer>
  );
}
export default ThumbnailCarousel;
