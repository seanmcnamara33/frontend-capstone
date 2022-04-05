/* eslint-disable */
import React from 'react';


const Reviews = (props) => {
  // console.log(props.data)
  return(

    props.data.map((review) => {
      return(
        <div key={review.review_id}>
          sample text
          {review.body}
          {review.date}
          {review.helpfulness}
          {review.photos}
          {review.rating}
          {review.recommend}
          {review.response}
          {review.reviewer_name}
          {review.summary}
        </div>
      )
    })
  )
};

export default Reviews;