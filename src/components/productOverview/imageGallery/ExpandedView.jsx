/* eslint-disable */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {EntireExpandedView, ExpandedContainer, ZoomedImage, ZoomedContainer, ExpandedImage, Icons, Icon, SelectedIcon} from './ImageGalleryStyles.jsx';

const ExpandedView = ({currentStyle, currentImage, onRestoreDefaultClick}) => {
  const expandedPhotosArray = currentStyle.photos;
  const [currentStyleExpandedIndex, setExpandedStyleIndex] = useState(0);
  const [zoomed, setZoomedState] = useState(false);
  const [zoomCoordinates, setZoomCoordinates] = useState({x: 0, y: 0});

  const getCurrentImage = () => {
    for (let i = 0; i < expandedPhotosArray.length; i++) {
      if (currentImage.url === expandedPhotosArray[i].url) {
        setExpandedStyleIndex(i);
        break;
      }
    }
  }

  const onExpandedButtonClick = (event) => {
    if (currentStyleExpandedIndex !== expandedPhotosArray.length - 1 && event.target.classList[0] === 'expanded-image-right') {
      setExpandedStyleIndex(currentStyleExpandedIndex + 1);
    } else if (currentStyleExpandedIndex !== 0 && event.target.classList[0] === 'expanded-image-left') {
      setExpandedStyleIndex(currentStyleExpandedIndex - 1);
    }
  }

  const onExpandedImageClick = (event) => {
    if (!zoomed) {
      setZoomedState(true);
      setZoomCoordinates({x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY});
    } else {
      setZoomedState(false);
      setZoomCoordinates({x: 0, y: 0});
    }
  }

  const onIconClick = (event) => {
    setExpandedStyleIndex(Number(event.target.dataset.index));
  }

  const onImageOver = (event) => {
    let coordinates = {x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY};
    setZoomCoordinates(coordinates);
  }

  let icons = [];
  for (var i = 0; i < expandedPhotosArray.length; i++) {
    icons.push(i + 1);
  };

  useEffect(() => {
    getCurrentImage();
  }, [])

  if (!zoomed) {
    return(
      <EntireExpandedView>
        <ExpandedContainer>
          <button className='expanded-image-left' onClick={(event) => onExpandedButtonClick(event)}>{String.fromCharCode(0x2B05)}</button>
          <ExpandedImage src={expandedPhotosArray[currentStyleExpandedIndex].url} onClick={(event) => onExpandedImageClick(event)}></ExpandedImage>
          <button className='expanded-image-right' onClick={(event) => onExpandedButtonClick(event)}>{String.fromCharCode(0x2B95)}</button>
          <button className='restore-default' onClick={() => onRestoreDefaultClick(expandedPhotosArray[currentStyleExpandedIndex])}>{String.fromCharCode(0x2311)}</button>
        </ExpandedContainer>
        <Icons>
          {icons.map((icon, index) => {
            if (index === currentStyleExpandedIndex) {
              return <SelectedIcon data-index={index} onClick={(event) => onIconClick(event)} key={`icon${index}`}>{String.fromCharCode(0x2B24)}</SelectedIcon>
            }
            return <Icon data-index={index} onClick={(event) => onIconClick(event)} key={`icon${index}`}>{String.fromCharCode(0x2B24)}</Icon>
          })}
        </Icons>
      </EntireExpandedView>
    );
  } else {
    return (
      <ZoomedContainer>
        <ZoomedImage onPointerMove={(event) => onImageOver(event)} style={{'transformOrigin': `${zoomCoordinates.x}px ${zoomCoordinates.y}px`}}onClick={(event) => onExpandedImageClick(event)} src={expandedPhotosArray[currentStyleExpandedIndex].url}></ZoomedImage>
      </ZoomedContainer>
    );
  }
}

export default ExpandedView;
