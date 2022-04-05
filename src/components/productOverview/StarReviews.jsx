/* eslint-disable */
import React, { useState, useEffect } from 'react';
import 'whatwg-fetch';
import { getStars, calculateTotalReviewNumber, calculateAverage } from '../common/helpers.js';

const StarReviews = ({ currentItem, onReviewLinkClick }) => {
  const [rating, setRating] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);

  useEffect(() => {
    if (Object.keys(currentItem).length) {
      getStars(currentItem.id)
      .then((result) => {
        setRating(result[0]);
        setReviewNum(result[1])
      })
    }
  }, [currentItem]);

  if (reviewNum > 0) {
    return (
      <>
        <div>
          STARS:
          {rating}
        </div>
        <div onClick={() =>  onReviewLinkClick() }>
          Read All
          {reviewNum}
          Reviews
        </div>
      </>
    );
  }
  return (null);
};

export default StarReviews;
