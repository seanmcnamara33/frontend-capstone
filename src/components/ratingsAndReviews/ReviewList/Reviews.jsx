/* eslint-disable */
import React, { useState } from 'react';
import './Reviews.css';
import { formatDate } from '../../common/helpers.js';
import ReviewPhotos from './ReviewPhotos.jsx';
import ReviewBody from './ReviewBody.jsx';
import 'whatwg-fetch';


const Reviews = (props) => {
  return (
    props.data.map((review) => {

      const handleYesClick = () => {
        event.preventDefault();
        fetch((`${process.env.API_URI}/reviews/:review_id/helpful/?review_id=${review.review_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.API_KEY
          },
          body: JSON.stringify(
            {
              'helpfulness': review.helpfulness + 1
            }
          )
        })).then((response) => {
          console.log('success yes')
        }).catch((err) => {
          console.log(err)
        })
      }

      const handleReportClick = () => {
        event.preventDefault();
        fetch((`${process.env.API_URI}/reviews/:review_id/helpful/?review_id=${review.review_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.API_KEY
          }
        })).then((response) => {
          console.log('success report')
        }).catch((err) => {
          console.log(err)
        })
      }

      return (
        <div className='review-tile' key={review.review_id}>
          {review.rating}
          <div className='review-summary'>{review.summary}</div>
          <ReviewBody body={review.body} />
          <ReviewPhotos data={review.photos} />
          <div className='review-name'>
            By {review.reviewer_name}, {formatDate(review.date)} | Helpful? <a href="#" onClick={handleYesClick}>Yes</a>
            ({review.helpfulness}) | <a href="#" onClick={handleReportClick}>{review.reported ? 'NO' : 'report'}</a>
          </div>
          <div>{review.email ? 'verified purchaser' : null}</div>

          <div className='review-recommend'>{review.recommend ? 'I recommend this product.' : null}</div>

          <div>

          </div>{review.response ? 'response from seller' + review.response : null}</div>
      )
    })
  )
};

export default Reviews;


{/* <a href="#">Yes</a> ({answer.helpfulness}) | <a href="#">{answer.reported ? 'NO':'report'} */ }