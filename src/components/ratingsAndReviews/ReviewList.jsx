/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Reviews from './Reviews.jsx';
import AddReview from './AddReview.jsx';


const ReviewList = (props) => {
  //state
  const [currentReviews, setCurrentReviews] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URI}/reviews/?product_id=65631`, {
      method: 'GET',
      headers: {Authorization: process.env.API_KEY}
    })
    .then((response) => {
      response.json().then((results) => {
        console.log(results.results)
        setCurrentReviews(results.results);
      });
    })
    .catch((err) => {
      console.log('failed load GET');
    });
  }, [])


  const getReviews = () => {
    fetch(`${process.env.API_URI}/reviews`, {
      method: 'GET',
      headers: {Authorization: process.env.API_KEY}
    })
    .then((response) => {
      response.json().then((results) => {
        console.log(results)
        setCurrentReviews(results)
      })
    })
    .catch((err) => {
      console.log('failed load GET', err)
    })
  }

  const handleClick = (event) => {
    //load 2 more reviews
  }

  return(
    <div>
      <Reviews data={currentReviews}/>
      <button type='button' onClick={handleClick}> More Reviews</button>
      <AddReview />
    </div>
  )
};

export default ReviewList;


// 65631 product id