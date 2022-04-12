/* eslint-disable */
import React, {useState, useEffect, useRef, useContext} from 'react';
import 'whatwg-fetch';
import Overview from './productOverview/productInfo/Overview.jsx';
import RelatedList from './relatedProducts/related/RelatedList.jsx';
import OutfitList from './relatedProducts/outfit/OutfitList.jsx';
import QuestionsAnswers from './questionsAnswers/QuestionsAnswers.jsx';
import ReviewList from './ratingsAndReviews/ReviewList/ReviewList.jsx';
import { NavBar } from './AppStyles.jsx';
import { ProductContext } from './context/Product';
import CountClick from './CountClick';

const App = () => {
  const {currentItem, productId, getFirstItem} = useContext(ProductContext);

  useEffect(() => {
    getFirstItem();
  }, []);

  return (
    <CountClick>
      <NavBar key="navbar">Kids Next Door</NavBar>
      <Overview key="overview" currentItem={currentItem}/>
      <RelatedList key="related-list" currentItem={currentItem} id={productId}/>
      <OutfitList key="outfit-list" currentItem={currentItem} id={productId}/>
      <QuestionsAnswers key="question-answers" id={productId} />
      <ReviewList key="review-list" id={productId}/>
    </CountClick>
  )
}

export default App;
