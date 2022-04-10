/* eslint-disable */
import React, { useState, useEffect } from 'react';
import RatingsDisplayChart from './RatingsDisplayChart.jsx';
import StarsContainer from '../common/StarsContainer.jsx';
import './RatingsDisplay.css';

const RatingsDisplay = (props) => {

    const getRecValue = (props) => {
      let rec = props.metaData.recommended;
      let fval = 0;
      let tval = 0;
      for (let key in rec) {
        if(key === 'false') {
          fval = +rec[key]
        }
        if(key === 'true') {
          tval = +rec[key]
        }
      }
      let recValue = Math.abs((fval / tval) * 100 -100);
      return recValue;
    }



  return (
    <>
    <div>
      {/* <StarsContainer /> */}
    </div>
    <div className='review-recommend'>
      {Math.round(getRecValue(props))}% of reviews recommend this product
    </div>
    <RatingsDisplayChart setTotalReviews={props.setTotalReviews} metaData={props.metaData.ratings}/>
    </>
  );
};

export default RatingsDisplay;

