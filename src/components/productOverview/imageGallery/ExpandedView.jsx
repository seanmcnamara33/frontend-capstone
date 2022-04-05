/* eslint-disable */
import React, {useState} from 'react';
import styled from 'styled-components';

const ExpandedContainer = styled.div`
  display: flex;
  flex-direction: columns;
  width:90%;
  height: 50%;
`;

const ExpandedImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ExpandedView = ({currentStyle}) => {
  const expandedPhotosArray = currentStyle.photos;
  console.log(expandedPhotosArray);
  const [currentStyleExpandedIndex, setExpandedStyleIndex] = useState(0);

  const onExpandedButtonClick = (event) => {
    if (currentStyleExpandedIndex !== expandedPhotosArray.length - 1 && event.target.classList[0] === 'expanded-image-right') {
      setExpandedStyleIndex(currentStyleExpandedIndex + 1);
    } else if (currentStyleExpandedIndex !== 0 && event.target.classList[0] === 'expanded-image-left') {
      setExpandedStyleIndex(currentStyleExpandedIndex - 1);
    }
  }

  return (
    <ExpandedContainer>
      <button className='expanded-image-left' onClick={(event) => onExpandedButtonClick(event)}>Left</button>
      <ExpandedImage src={expandedPhotosArray[currentStyleExpandedIndex].url}></ExpandedImage>
      <button className='expanded-image-right' onClick={(event) => onExpandedButtonClick(event)}>Right</button>
    </ExpandedContainer>
  );
}

export default ExpandedView;