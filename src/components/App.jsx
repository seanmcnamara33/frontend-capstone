/* eslint-disable */
import React, {useState, useEffect, useRef, useContext} from 'react';
import 'whatwg-fetch';
import Overview from './productOverview/productInfo/Overview.jsx';
import RelatedList from './relatedProducts/RelatedList.jsx';
import OutfitList from './relatedProducts/OutfitList.jsx';
import QuestionsAnswers from './questionsAnswers/QuestionsAnswers.jsx';
import ReviewList from './ratingsAndReviews/ReviewList.jsx';
import { NavBar } from './AppStyles.jsx';
import { ProductContext } from './context/Product';

const App = () => {
  const {currentItem, productId, getFirstItem, createSession} = useContext(ProductContext);

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
      <QuestionsAnswers id={productId} />
      <ReviewList id={productId}/>
    </>
  )
}

export default App;
