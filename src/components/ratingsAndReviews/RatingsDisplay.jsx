/* eslint-disable */
import React, { useState, useEffect } from 'react';
import RatingsDisplayChart from './RatingsDisplayChart.jsx';
import './RatingsDisplay.css';

const RatingsDisplay = (props) => {

  console.log(props.metaData);

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
      {/* //need average opf rating score here long with stars */}
    </div>
    <div className='review-recommend'>
      {Math.round(getRecValue(props))}% of reviews recommend this product
    </div>
    <RatingsDisplayChart metaData={props.metaData.ratings}/>
    </>
  );
};

export default RatingsDisplay;

