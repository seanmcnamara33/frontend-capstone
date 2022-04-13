/* eslint-disable */
import React, { useState, useEffect } from 'react';
import 'whatwg-fetch';
import { getStars, calculateTotalReviewNumber, calculateAverage } from './helpers.js';
import styled from 'styled-components';
import {AllStars, StarsAndReviews, Star, ReviewLink, MergeStar, FirstStarPortion, SecondStarPortion} from './StarsContainerStyles.jsx';

const StarsContainer = ({ currentItem, onReviewLinkClick, starsAndReviews, singleReview, singleRating }) => {
  const [rating, setRating] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);
  const stars = [String.fromCharCode(0x2606), String.fromCharCode(0x2606), String.fromCharCode(0x2606), String.fromCharCode(0x2606), String.fromCharCode(0x2606)];
  if (singleReview === false) {
    useEffect(() => {
      if (Object.keys(currentItem).length) {
        getStars(currentItem.id)
        .then((result) => {
          setRating(result[0]);
          setReviewNum(result[1])
        })
      }
    }, [currentItem]);
    if (reviewNum > 0 && starsAndReviews === false) {
      return (
        <StarsAndReviews>
          <AllStars rating={rating}></AllStars>
        </StarsAndReviews>
      );
    } else if (reviewNum > 0 && starsAndReviews === true) {
      return (
        <StarsAndReviews>
          <AllStars rating={rating}></AllStars>
          <ReviewLink onClick={() =>  onReviewLinkClick() }>Read All {reviewNum} Reviews</ReviewLink>
        </StarsAndReviews>
      );
    } else {
      return null;
    }
  } else {
    useEffect(() => {
      setRating(singleRating)
    }, [singleReview]);
    return (
      <StarsAndReviews>
      <AllStars rating={rating}></AllStars>
    </StarsAndReviews>
    )
  }
}
export default StarsContainer;
