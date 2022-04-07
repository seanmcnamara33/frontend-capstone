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
          <div className='review-summary'>{review.summary}</div>
          <div className ='review-body'>{review.body}</div>
          <div className='review-name'>{review.reviewer_name}</div>
          <div className='review-date'>{formatDate(review.date)}</div>
          {review.helpfulness}
          <ReviewPhotos data={review.photos}/>
          {review.rating}
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