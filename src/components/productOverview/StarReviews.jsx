/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';

const StarReviews = ({ currentItem, onReviewLinkClick }) => {
  const [rating, setRating] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);

  const calculateAverage = (object) => {
    let sum = 0;
    let count = 0;
    for (const prop in object) {
      sum += parseInt((prop * object[prop]));
      count += parseInt(object[prop]);
    }
    return Math.round((sum / count) * 10) / 10;
  };

  const calculateTotalReviewNumber = (object) => {
    let count = 0;
    for (const prop in object) {
      count += parseInt(object[prop]);
    }
    return count;
  };

  const getStars = (productId) => {
    fetch(`${process.env.API_URI}/reviews/meta?product_id=${productId}`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then((result) => {
          const average = calculateAverage(result.ratings);
          const reviews = calculateTotalReviewNumber(result.ratings);
          setRating(average);
          setReviewNum(reviews);
        });
      })
      .catch((err) => {
        console.log(`Error found in getStars: ${err}`);
      });
  };

  useEffect(() => {
    getStars(currentItem.id);
  });

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
