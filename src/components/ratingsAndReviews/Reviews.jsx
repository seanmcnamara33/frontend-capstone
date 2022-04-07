/* eslint-disable */
import React from 'react';
import './Reviews.css';
import {formatDate} from '../common/helpers.js';
import ReviewPhotos from './ReviewPhotos.jsx';


const Reviews = (props) => {
  // console.log(props.data)
  return (

    props.data.map((review) => {
      return (
        <div className='review-tile' key={review.review_id}>
           {review.rating}
          <div className='review-summary'>{review.summary}</div>
          <div className ='review-body'>{review.body}</div>
          <div className='review-name'>By {review.reviewer_name}, {formatDate(review.date)} | Helpful? Yes({review.helpfulness})</div>

          <ReviewPhotos data={review.photos}/>

          {review.recommend}
          {review.response}
        </div>
      )
    })
  )
};

export default Reviews;

// {review.helpfulness} number
// {review.photos} urls
// {review.rating} number
// {review.recommend} boolean
// {review.response} text body
