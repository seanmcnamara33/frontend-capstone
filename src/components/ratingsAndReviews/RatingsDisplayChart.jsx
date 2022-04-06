/* eslint-disable */
import React from 'react';

const RatingsDisplayChart = (props) => {

  let ratings = []
  let totalReviews = 0
  for (let i in props.ratingsData) {
    ratings.push(props.ratingsData[i]);
    totalReviews += Number(props.ratingsData[i]);
  }



  return (
    //need to return total reviews
    ratings.map((value, index) => {
      return(
        <div key={index}>
          {index +1} Stars {value}
        </div>
      )
    })
  )

}

export default RatingsDisplayChart;