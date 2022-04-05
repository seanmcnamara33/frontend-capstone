/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Reviews from './Reviews.jsx';
import AddReview from './AddReview.jsx';
import RatingsDisplay from './RatingsDisplay.jsx';
import SortBar from './SortBar.jsx';


const ReviewList = (props) => {
  //state
  const [currentReviews, setCurrentReviews] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [reviewCount, setCount] = useState(2);

  useEffect(() => {
    fetch(`${process.env.API_URI}/reviews/?product_id=65631&count=${reviewCount}`, {
      method: 'GET',
      headers: {Authorization: process.env.API_KEY}
    })
    .then((response) => {
      response.json().then((results) => {
        // console.log(results.results)
        setCurrentReviews(results.results);
        setCount(reviewCount + 2);
      });
    })
    .catch((err) => {
      console.log('failed load GET');
    });

    // fetch(`${process.env.API_URI}/reviews/meta/?product_id=65631`, {
    //   method: 'GET',
    //   headers: {Authorization: process.env.API_KEY}
    // })
    // .then((response) => {
    //   response.json().then((results) => {
    //     console.log(results)
    //     setMetaData(results);
    //   });
    // })
    // .catch((err) => {
    //   console.log('failed load Meta GET');
    // });

  }, [])


  // const getReviews = () => {
  //   fetch(`${process.env.API_URI}/reviews`, {
  //     method: 'GET',
  //     headers: {Authorization: process.env.API_KEY}
  //   })
  //   .then((response) => {
  //     response.json().then((results) => {
  //       console.log(results)
  //       setCurrentReviews(results)
  //     })
  //   })
  //   .catch((err) => {
  //     console.log('failed load GET', err)
  //   })
  // }

  const handleClick = () => {
    //load 2 more reviews
    fetch(`${process.env.API_URI}/reviews/?product_id=65631&count=${reviewCount}`, {
      method: 'GET',
      headers: {Authorization: process.env.API_KEY}
    })
    .then((response) => {
      response.json().then((results) => {
        console.log(results.results)
        setCount(reviewCount + 2)
        setCurrentReviews(results.results);
      });
    })
    .catch((err) => {
      console.log('failed load GET');
    });
  }

  return(
    <div>
      <label>Ratings & Reviews</label>
      <SortBar />
      <Reviews data={currentReviews}/>
      <button type='button' onClick={handleClick}> More Reviews</button>
      <AddReview />
      <RatingsDisplay />
    </div>
  )
};

export default ReviewList;