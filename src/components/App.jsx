/* eslint-disable */
import React, {useState, useEffect, useRef} from 'react';
import 'whatwg-fetch';
import Overview from './productOverview/productInfo/Overview.jsx';
import RelatedList from './relatedProducts/RelatedList.jsx';
import QuestionsAnswers from './questionsAnswers/QuestionsAnswers.jsx';
import ReviewList from './ratingsAndReviews/ReviewList.jsx';
import { NavBar } from './AppStyles.jsx';
import {fakeSession} from './common/helpers';

const App = () => {
  const [currentItem, setCurrentItem] = useState({});
  const [productId, setProductId] = useState('');
  const session = useRef();

  const checkSession = () => {
    let s = localStorage.getItem('session');
    return s === session.current;
  }
  const createSession = () => {
    session.current = fakeSession();
    localStorage.setItem('session', session.current);
  }

  const getFirstItem = () => {
    fetch(`${process.env.API_URI}/products`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then((results) => {
          setCurrentItem(results[0]);
          setProductId(results[0].id);
        });
      })
      .catch((err) => {
        console.log(`Error found in getFirstItem: ${err}`);
      });
  };

  useEffect(() => {
    console.log('MOUNTED');
    getFirstItem();
    createSession();
    return () => localStorage.clear();
  }, []);

  return (
    <>
      <NavBar>Kids Next Door</NavBar>
      <Overview currentItem={currentItem}/>
      <RelatedList currentItem={currentItem} id={productId}/>
      <OutfitList currentItem={currentItem}/>
      <QuestionsAnswers id={productId} checkSession={checkSession}/>
      <ReviewList />
    </>
  )
}

export default App;
