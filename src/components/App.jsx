/* eslint-disable */
import React, {useState, useEffect} from 'react';
import 'whatwg-fetch';
import Overview from './productOverview/productInfo/Overview.jsx';
import RelatedList from './relatedProducts/RelatedList.jsx';
import QuestionsAnswers from './questionsAnswers/QuestionsAnswers.jsx';
import ReviewList from './ratingsAndReviews/ReviewList.jsx';
import { NavBar } from './AppStyles';

const App = () => {
  const [currentItem, setCurrentItem] = useState({});

  const getFirstItem = () => {
    fetch(`${process.env.API_URI}/products`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then((results) => setCurrentItem(results[0]));
      })
      .catch((err) => {
        console.log(`Error found in getFirstItem: ${err}`);
      });
  };

  useEffect(() => {
    getFirstItem();
  }, []);

  return (
    <>
      <NavBar>Kids Next Door</NavBar>
      {/* <Overview currentItem={currentItem}/>
      <RelatedList />
      <QuestionsAnswers /> */}
      <ReviewList />
    </>
  )
}

export default App;
