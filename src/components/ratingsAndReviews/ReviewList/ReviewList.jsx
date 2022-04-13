/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Reviews from './Reviews.jsx';
import AddReview from '../AddReview/AddReview.jsx';
import RatingsDisplay from '../RatingsDisplay/RatingsDisplay.jsx';
import SortBar from '../SortBar/SortBar.jsx';
import './ReviewList.css';
import 'whatwg-fetch';


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
        setCurrentReviews([...response.results]);
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

  const sortReviews = (sortFactor, reviewsObj) => {
    let reviews = reviewsObj;

    if (sortFactor === 'newest') {
      reviews.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB - dateA;
      })
    }
    if (sortFactor === 'helpful') {
      reviews.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      })
    }
    if (sortFactor === 'relevant') {
      reviews.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB - dateA || b.helpfulness - a.helpfulness;
      })
    }
    return reviews;
  }


  const getSortData = (sortFactor) => {
    fetch(`${process.env.API_URI}/reviews/?product_id=${props.id}&count=${currentReviews.length}&page=${pageCount}&sort=${sortFactor}`, {
      method: 'GET',
      headers: { Authorization: process.env.API_KEY }
    })
      .then((response) => {
        response.json().then((results) => {
          setCurrentReviews(sortReviews(sortFactor, results.results));
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
          //if results is the same or empty need ot hide button
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
    <div className='main' id='ratings-and-reviews'>
      <div className='title-sortbar'>
        <div className='review-list'>
          <label>Ratings & Reviews</label>
          <div>
            <SortBar totalReviews={totalReviews} getSortData={getSortData} />
          </div>
          <div className='reviews'>
            <Reviews data={currentReviews} />
          </div>
          <div className='review-list-btn'>
            {showMoreReviewsBtn ? <button type='button' className='showmore-btn' onClick={handleClick}> More Reviews</button> : null}
            <AddReview id={props.id} metaData={metaData} />
          </div>
        </div>

        <div className='ratings-breakdown'>
          <label>Ratings Breakdown</label>
          <RatingsDisplay setTotalReviews={setTotalReviews} metaData={metaData} />
        </div>
      </div>

    </div>




  )
};

export default ReviewList;