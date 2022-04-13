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
      <NavBar>Kids Next Door</NavBar>
      <Overview currentItem={currentItem}/>
      <RelatedList currentItem={currentItem} id={productId}/>
      <OutfitList currentItem={currentItem} id={productId}/>
      <QuestionsAnswers id={productId}/>
      <ReviewList id={productId}/>
    </CountClick>
  )
}

export default App;
