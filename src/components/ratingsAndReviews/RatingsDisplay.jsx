/* eslint-disable */
import React, { useState, useEffect } from 'react';
import RatingsDisplayChart from './RatingsDisplayChart.jsx';

const RatingsDisplay = (props) => {

  const [ratingsData, setRatingsData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URI}/reviews/meta/?product_id=65631`, {
      method: 'GET',
      headers: { Authorization: process.env.API_KEY }
    })
      .then((response) => {
        response.json().then((results) => {
          // console.log('success', results)
          setRatingsData(results);
        });
      })
      .catch((err) => {
        console.log('failed load Ratings GET');
      });
  }, [])

  // console.log(ratingsData)

  return (
    <>
    <RatingsDisplayChart ratingsData={ratingsData.ratings}/>
    </>
  );
};

export default RatingsDisplay;

