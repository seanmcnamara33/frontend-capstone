/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';

const ThumbnailContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Thumbnail = styled.img `
  height: 50px;
  width: 50px;
`;

const SelectedThumbnail = styled.img `
  height: 50px;
  width: 50px;
  border: 1px solid yellow;
`;

const ThumbnailCarousel = ({photosArray, onThumbnailImageClick, currentStylePhotoIndex}) => {
  console.log(currentStylePhotoIndex);
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
      <button className='image-up' onClick={(event) => onThumbnailButtonClick(event)}>Up</button>
      {currentThumbnails.map((photo, i) => {
        if (photo.thumbnail_url === photosArray[currentStylePhotoIndex].thumbnail_url) {
          return <SelectedThumbnail id={i + count} src={photo.thumbnail_url} onClick={(event) => onThumbnailImageClick(event)}></SelectedThumbnail>
        }
        return <Thumbnail id={i + count} src={photo.thumbnail_url} onClick={(event) => onThumbnailImageClick(event)}></Thumbnail>
      })}
      <button className='image-down' onClick={(event) => onThumbnailButtonClick(event)}>Down</button>
    </ThumbnailContainer>
  );
}
export default ThumbnailCarousel;
