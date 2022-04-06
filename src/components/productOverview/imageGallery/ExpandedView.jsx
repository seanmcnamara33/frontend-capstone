/* eslint-disable */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ExpandedContainer = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
  align-self: center;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: grey;
  padding: 60px;
  margin: 20px;
  width: 100%;
  height: 90vh;
`;

const ZoomedImage = styled.img`
  transform: scale(2.5);
  object-fit: fill;
  height: 100%;
  width: 50%;
  border-radius: 3px;
  overflow: hidden;
  cursor: zoom-out;
`;

const ZoomedContainer = styled.div`
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: grey;
  padding: 60px;
  margin: 20px;
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

const ExpandedImage = styled.img`
  object-fit: fill;
  width: 50%;
  height: 100%;
  border-radius: 3px;
  overflow: hidden;
  cursor: crosshair;
`;


const IconList  = styled.div`
  display: flex;
  position: relative;
  top: 270px;
  left: 355px;
`;

const Icon = styled.div`
  font-size: large;
  font-weight: bold;
  margin: 5px;
`;

const SelectedIcon = styled.div`
  font-size: large;
  font-weight: bold;
  border-bottom: 3px solid black;
  border-radius: 3px;
  margin: 5px;
`;

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
    setExpandedStyleIndex(Number(event.target.innerText) - 1);
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
    <ExpandedContainer>
      <IconList>
        {icons.map((icon, index) => {
          if (index === currentStyleExpandedIndex) {
            return <SelectedIcon onClick={(event) => onIconClick(event)} key={`icon${index}`}>{icon}</SelectedIcon>
          }
          return <Icon onClick={(event) => onIconClick(event)} key={`icon${index}`}>{icon}</Icon>
        })}
      </IconList>
      <button className='expanded-image-left' onClick={(event) => onExpandedButtonClick(event)}>{String.fromCharCode(0x2190)}</button>
      <ExpandedImage src={expandedPhotosArray[currentStyleExpandedIndex].url} onClick={(event) => onExpandedImageClick(event)}></ExpandedImage>
      <button className='expanded-image-right' onClick={(event) => onExpandedButtonClick(event)}>{String.fromCharCode(0x2192)}</button>
      <button className='restore-default' onClick={() => onRestoreDefaultClick(expandedPhotosArray[currentStyleExpandedIndex])}>{String.fromCharCode(0x2311)}</button>
    </ExpandedContainer>
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