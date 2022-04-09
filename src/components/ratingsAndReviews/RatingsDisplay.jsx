/* eslint-disable */
import React, { useState, useEffect } from 'react';
import RatingsDisplayChart from './RatingsDisplayChart.jsx';

const RatingsDisplay = (props) => {



  console.log(props.metaData.recommended);

    // let rec = props.metaData.recommended;
    // let recValue = Math.abs((+rec.false / +rec.true) * 100 -100);




  return (
    <>
    <div>
      {/* {revalue}% of reviews recommend this product */}
    </div>
    <RatingsDisplayChart metaData={props.metaData.ratings}/>
    </>
  );
};

export default RatingsDisplay;

