/* eslint-disable */
import React, { useState, useEffect } from 'react';
import 'whatwg-fetch';
import { getStars, calculateTotalReviewNumber, calculateAverage } from './helpers.js';
import styled from 'styled-components';
import {StarsAndReviews, Star, ReviewLink, MergeStar, FirstStarPortion, SecondStarPortion} from './StarsContainerStyles.jsx';

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
          {stars.map((star, i) => {
            if (rating - i >= 1) {
              return <Star key={`star${i}`}>{String.fromCharCode(0x2605)}</Star>
            } else if (rating - i < 1 && rating - i > 0) {
              var amt = (i - rating) * -100;
              return (
                <MergeStar>
                  <FirstStarPortion key={`first-star-portion${i}`} style={{background: `linear-gradient(to right, rgb(222, 99, 23) ${amt}%, transparent ${amt}%)`, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{String.fromCharCode(0x2605)}</FirstStarPortion>
                  <SecondStarPortion key={`second-star-portion${i}`}>{String.fromCharCode(0x2606)}</SecondStarPortion>
                </MergeStar>
              )
            } else {
              return <Star key={`star${i}`}>{String.fromCharCode(0x2606)}</Star>
            }
          })}
        </StarsAndReviews>
      );
    } else if (reviewNum > 0 && starsAndReviews === true) {
      return (
        <StarsAndReviews>
          {stars.map((star, i) => {
            if (rating - i >= 1) {
              return <Star key={`star${i}`}>{String.fromCharCode(0x2605)}</Star>
            } else if (rating - i < 1 && rating - i > 0) {
              var amt = (i - rating) * -100;
              return (
                <MergeStar key={`merge-star`}>
                  <FirstStarPortion key={`first-star-portion${i}`} style={{background: `linear-gradient(to right, rgb(222, 99, 23) ${amt}%, transparent ${amt}%)`, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{String.fromCharCode(0x2605)}</FirstStarPortion>
                  <SecondStarPortion key={`second-star-portion${i}`}>{String.fromCharCode(0x2606)}</SecondStarPortion>
                </MergeStar>
              )
            } else {
              return <Star key={`star${i}`}>{String.fromCharCode(0x2606)}</Star>
            }
          })}
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
      {stars.map((star, i) => {
        if (rating - i >= 1) {
          return <Star key={`star${i}`}>{String.fromCharCode(0x2605)}</Star>
        } else if (rating - i < 1 && rating - i > 0) {
          var amt = (i - rating) * -100;
          return (
            <MergeStar>
              <FirstStarPortion key={`first-star-portion${i}`} style={{background: `linear-gradient(to right, rgb(222, 99, 23) ${amt}%, transparent ${amt}%)`, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{String.fromCharCode(0x2605)}</FirstStarPortion>
              <SecondStarPortion key={`second-star-portion${i}`}>{String.fromCharCode(0x2606)}</SecondStarPortion>
            </MergeStar>
          )
        } else {
          return <Star key={`star${i}`}>{String.fromCharCode(0x2606)}</Star>
        }
      })}
    </StarsAndReviews>
    )
  }
}
export default StarsContainer;
