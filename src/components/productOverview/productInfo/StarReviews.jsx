/* eslint-disable */
import React, { useState, useEffect } from 'react';
import 'whatwg-fetch';
import { getStars, calculateTotalReviewNumber, calculateAverage } from '../../common/helpers.js';
import styled from 'styled-components';

const StarsAndReviews = styled.div`
  display: flex;
`;

const StarReviews = ({ currentItem, onReviewLinkClick }) => {
  const [rating, setRating] = useState(3.5);
  const [reviewNum, setReviewNum] = useState(0);
  const stars = [String.fromCharCode(0x2606), String.fromCharCode(0x2606), String.fromCharCode(0x2606), String.fromCharCode(0x2606), String.fromCharCode(0x2606)];
  useEffect(() => {
    if (Object.keys(currentItem).length) {
      getStars(currentItem.id)
      .then((result) => {
        // setRating(result[0]);
        setReviewNum(result[1])
      })
    }
  }, [currentItem]);

  if (reviewNum > 0) {
    return (
      <StarsAndReviews>
        {stars.map((star, i) => {
          if (rating - i >= 1) {
            return <span>{String.fromCharCode(0x2605)}</span>
          } else if (rating - i < 1 && rating - i > 0) {
            var amt = (i - rating) * -100;
            console.log(amt);
            return <span className='partly-filled-star' style={{background: `linear-gradient(to left, white ${amt}%, black ${100 - amt}%)`, backgroundClip: 'text', webkitBackgroundClip: 'text', webkitTextFillColor: 'transparent'}}>{String.fromCharCode(0x2605)}</span>
          } else {
            return <span>{String.fromCharCode(0x2606)}</span>
          }
        })}
        <span onClick={() =>  onReviewLinkClick() }>
          Read All
          {reviewNum}
          Reviews
        </span>
      </StarsAndReviews>
    );
  }
  return (null);
};

export default StarReviews;
