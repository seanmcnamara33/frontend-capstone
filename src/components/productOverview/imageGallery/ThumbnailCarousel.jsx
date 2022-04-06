/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';

const ThumbnailContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 50px;
  top: 100px;
`;

const Thumbnail = styled.img `
  height: 50px;
  width: 50px;
  border: 1px solid black;
  margin: 5px;
`;

const SelectedThumbnail = styled.img `
  height: 50px;
  width: 50px;
  border: 1px solid yellow;
  margin: 5px;
  margin-bottom: 2px;
`;

const SelectedThumbnailUnderline = styled.div `
  height: 3px;
  width: 50px;
  border-bottom: 3px solid yellow;
  margin-bottom: 5px;
`;

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
          <div key={i}>
            <SelectedThumbnail id={i + count} key={`selectedThumb${i}`} src={photo.thumbnail_url} onClick={(event) => onThumbnailImageClick(event)}></SelectedThumbnail>
            <SelectedThumbnailUnderline key={`thumbUnderline${i}`}></SelectedThumbnailUnderline>
          </div>
          );
        }
        return <Thumbnail id={i + count} src={photo.thumbnail_url} key={`thumb${i}`} onClick={(event) => onThumbnailImageClick(event)}></Thumbnail>
      })}
      <button style={{all: 'unset'}} className='image-down' onClick={(event) => onThumbnailButtonClick(event)}>{String.fromCharCode(0x2304)}</button>
    </ThumbnailContainer>
  );
}
export default ThumbnailCarousel;
