/* eslint-disable */
import React, { useEffect } from 'react';
import './RatingsDisplayChart.css';

const RatingsDisplayChart = (props) => {

  let ratings = []
  for (let i in props.metaData) {
    ratings.push(+props.metaData[i]);
  }


  const getTotalRating = (arr) => {
    return arr.reduce((a, b) => {
      return (a + b);
    })
  }

  useEffect(() => {
    if(ratings.length > 0)
    props.setTotalReviews(getTotalRating(ratings))
  }, [ratings])


  return (

    ratings.map((value, index) => {
      return (
        <>
          <label> {index + 1} Stars <span className='ratings'> {value} total reviews</span></label>
          <div className='ratings-bar' key={index}>
            <div className='ratings-innerbar' style={{ width: Math.round(value / getTotalRating(ratings) * 100) + '%' }}>
            </div>
          </div>
        </>
      )
    })
  )

}

export default RatingsDisplayChart;