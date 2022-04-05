/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';

const ExpandedContainer = styled.div`
  display: flex;
  flex-direction: columns;
  width: 90%;
  height: 50%;
`;

const ExpandedImage = styled.img`
  width: 100%;
  height: 100%;
`;

const IconList  = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 20px;
  width: 20px;
`;
const SelectedIcon = styled.div`
  height: 20px;
  width: 20px;
  color: yellow;
`;


const ExpandedView = ({currentStyle}) => {
  const expandedPhotosArray = currentStyle.photos;
  const [currentStyleExpandedIndex, setExpandedStyleIndex] = useState(0);

  const onExpandedButtonClick = (event) => {
    if (currentStyleExpandedIndex !== expandedPhotosArray.length - 1 && event.target.classList[0] === 'expanded-image-right') {
      setExpandedStyleIndex(currentStyleExpandedIndex + 1);
    } else if (currentStyleExpandedIndex !== 0 && event.target.classList[0] === 'expanded-image-left') {
      setExpandedStyleIndex(currentStyleExpandedIndex - 1);
    }
  }

  const onExpandedImageHover = () => {

  }

  const onIconClick = (event) => {
    console.log(event.target.innerText);
    setExpandedStyleIndex(Number(event.target.innerText) - 1);
  }

  let icons = [];
  for (var i = 0; i < expandedPhotosArray.length; i++) {
    icons.push(i + 1);
  };

  return (
    <ExpandedContainer>
      <IconList>
        {icons.map((icon, index) => {
          if (index === currentStyleExpandedIndex) {
            return <SelectedIcon onClick={(event) => onIconClick(event)} key={`icon${index}`}>{icon}</SelectedIcon>
          }
          return <Icon onClick={(event) => onIconClick(event)} key={`icon${index}`}>{icon}</Icon>
        })}
      </IconList>
      <button className='expanded-image-left' onClick={(event) => onExpandedButtonClick(event)}>Left</button>
      <ExpandedImage src={expandedPhotosArray[currentStyleExpandedIndex].url}></ExpandedImage>
      <button className='expanded-image-right' onClick={(event) => onExpandedButtonClick(event)}>Right</button>
    </ExpandedContainer>
  );
}

export default ExpandedView;