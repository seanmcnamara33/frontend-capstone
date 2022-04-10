/* eslint-disable */
import React, { useState } from 'react';
import './Reviews.css';
import { formatDate } from '../common/helpers.js';
import ReviewPhotos from './ReviewPhotos.jsx';
import ReviewBody from './ReviewBody.jsx';


const Reviews = (props) => {
  // console.log(props.data)





  return (

    props.data.map((review) => {
      return (
        <div className='review-tile' key={review.review_id}>
          {review.rating}
          <div className='review-summary'>{review.summary}</div>
            {/* need to refactor body to show only 250 and add more button */}
            <ReviewBody body={review.body}/>
          {/* <div className='review-body'>{review.body.length > 250 ? review.body : 'too long'}</div> */}

          <div className='review-name'>By {review.reviewer_name}, {formatDate(review.date)} | Helpful? Yes({review.helpfulness})</div>
          <div>{review.email ? 'verified purchaser' : null}</div>

          <ReviewPhotos data={review.photos} />

          <div>{review.recommend ? 'I recommend this product.' : null}</div>

          <div>

          </div>{review.response ? 'response from seller' + review.response : null}</div>
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
