/* eslint-disable */
import React, { useState, useContext } from 'react';
import './Reviews.css';
import { formatDate } from '../../common/helpers.js';
import ReviewPhotos from './ReviewPhotos.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewHelpfulness from './ReviewHelpfulness.jsx';
import StarsContainer from '../../common/StarsContainer.jsx';
import {ProductContext} from '../../context/Product.jsx';



const Reviews = (props) => {

  const {currentItem} = useContext(ProductContext);
  console.log(props.data)
  return (
    props.data.map((review) => {
      return (
        <div className='review-tile' key={review.review_id}>
          <StarsContainer singleRating={review.rating} starsAndReviews={false} singleReview={true}/>
          <div className='review-summary'>{review.summary}</div>
          <div className='review-body'>
            <ReviewBody body={review.body} />
          </div>
          <ReviewPhotos data={review.photos} />
          <div className='review-name'>
           <ReviewHelpfulness
           name={review.reviewer_name}
           date={review.date}
           helpfulness={review.helpfulness}
           review_id={review.review_id}
           reported={review.reported}/>
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


