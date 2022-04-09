/* eslint-disable */
import React from 'react';
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


  return (

    ratings.map((value, index) => {
      console.log(ratings, getTotalRating(ratings))
      return (
        <>
          <label> {index + 1} Stars</label>
          <div className='ratings-bar' key={index}>
            <div className='ratings-innerbar' style={{}}>
              {Math.round(value / getTotalRating(ratings) * 100) + '%'}
            </div>
          </div>
        </>
      )
    })
  )

}

export default RatingsDisplayChart;