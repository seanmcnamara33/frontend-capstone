/* eslint-disable */
import React from 'react';
import './Reviews.css'


const Reviews = (props) => {
  // console.log(props.data)
  return (

    props.data.map((review) => {
      let date = new Date(review.date)
      return (
        <div className='review-tile' key={review.review_id}>
          <div className='review-summary'>{review.summary}</div>
          <div className ='review-body'>{review.body}</div>
          <div className='review-name'>{review.reviewer_name}</div>
          <div className='review-date'>{review.date}</div>

          {review.helpfulness}
          {review.photos}
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