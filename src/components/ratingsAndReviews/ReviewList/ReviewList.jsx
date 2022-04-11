/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Reviews from './Reviews.jsx';
import AddReview from '../AddReview/AddReview.jsx';
import RatingsDisplay from '../RatingsDisplay/RatingsDisplay.jsx';
import SortBar from '../SortBar/SortBar.jsx';
import './ReviewList.css';


const ReviewList = (props) => {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [showMoreReviewsBtn, setShowMoreReviewsBtn] = useState(true);
  const reviewCount = 2;


  const getReviewData = async (id) => {
    try {
      let body = await fetch(`${process.env.API_URI}/reviews/?product_id=${id}&count=2&page=${pageCount}`, {
        method: 'GET',
        headers: { Authorization: process.env.API_KEY }
      })
      let response = await body.json();

      if (response) {
        setCurrentReviews([...currentReviews, ...response.results]);
        setPageCount(pageCount + 1);
      };
    } catch (err) { console.log(err) }
  };

  const getMetaData = async (id) => {
    try {
      let body = await fetch(`${process.env.API_URI}/reviews/meta/?product_id=${id}`, {
        method: 'GET',
        headers: { Authorization: process.env.API_KEY }
      })
      let response = await body.json();
      if (response) {
        setMetaData(response);
      }
    } catch (err) { console.log(err) }
  };


  useEffect(() => {
    if (props.id !== '') {
      getReviewData(props.id);
      getMetaData(props.id)
    }

  }, [props.id])


  const getSortData = (sortFactor) => {
    fetch(`${process.env.API_URI}/reviews/?product_id=${props.id}&count=${currentReviews.length}&page=${pageCount}&sort=${sortFactor}`, {
      method: 'GET',
      headers: { Authorization: process.env.API_KEY }
    })
      .then((response) => {
        response.json().then((results) => {
          setCurrentReviews([...currentReviews, ...results.results]);
        });
      })
      .catch((err) => {
        console.log('failed load GET');
      });
  }



  const handleClick = () => {
    fetch(`${process.env.API_URI}/reviews/?product_id=${props.id}&count=2&page=${pageCount}`, {
      method: 'GET',
      headers: { Authorization: process.env.API_KEY }
    })
      .then((response) => {
        response.json().then((results) => {
          Object.values(currentReviews) === Object.values(results.results) ? setShowMoreReviewsBtn(false) : setShowMoreReviewsBtn(true);

          setPageCount(pageCount + 1);
          setCurrentReviews([...currentReviews, ...results.results]);
        });
      })
      .catch((err) => {
        console.log('failed load GET');
      });
  }




  return (
    <div>
      <label>Ratings & Reviews</label>
      <SortBar totalReviews={totalReviews} getSortData={getSortData} />
      <div className='review-list'>
        <Reviews data={currentReviews} />
      </div>
      <div>
        {showMoreReviewsBtn ? <button type='button' onClick={handleClick}> More Reviews</button> : null}
      </div>


      <AddReview id={props.id} metaData={metaData} />
      <label>Ratings Breakdown</label>
      <RatingsDisplay setTotalReviews={setTotalReviews} metaData={metaData} />
    </div>
  )
};

export default ReviewList;