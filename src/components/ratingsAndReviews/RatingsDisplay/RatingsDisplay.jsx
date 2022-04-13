/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import RatingsDisplayChart from './RatingsDisplayChart.jsx';
import StarsContainer from '../../common/StarsContainer.jsx';
import './RatingsDisplay.css';
import RatingsCharacteristicsChart from './RatingsCharacteristicsChart';
import {ProductContext} from '../../context/Product.jsx';

const RatingsDisplay = (props) => {
  const {currentItem} = useContext(ProductContext);

  const getRecValue = (props) => {
    let rec = props.metaData.recommended;
    let fval = 0;
    let tval = 0;
    for (let key in rec) {
      if (key === 'false') {
        fval = +rec[key]
      }
      if (key === 'true') {
        tval = +rec[key]
      }
    }
    let recValue = Math.abs((fval / tval) * 100 - 100);
    return recValue;
  }


  const getAvgRating = (props) => {
    let obj = props.metaData.ratings
    let totalStars = 0;
    let totalReviews = 0;

    for (let i in obj) {
      totalStars += (+i)*(+obj[i]);
      totalReviews += (+obj[i])
    }
    return totalStars/totalReviews
  }


  return (
    <>
    <div>
      <h1 className='ratings-star'>
        {Math.round(getAvgRating(props)*2)/2}
        <span><StarsContainer currentItem={currentItem} starsAndReviews={false} singleReview={false}/></span>
      </h1>
      <div className='review-recommend'>
        {Math.round(getRecValue(props))}% of reviews recommend this product
      </div>
      <RatingsDisplayChart
        setTotalReviews={props.setTotalReviews}
        metaData={props.metaData.ratings} />
      <RatingsCharacteristicsChart
        characteristics={props.metaData.characteristics} />
    </div>
    </>
  );
};

export default RatingsDisplay;

