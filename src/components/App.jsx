/* eslint-disable */
import React, {useState, useEffect} from 'react';
import Overview from './productOverview/productInfo/Overview.jsx';
import RelatedList from './relatedProducts/RelatedList.jsx';
import QuestionsAnswers from './questionsAnswers/QuestionsAnswers.jsx';
import styled from 'styled-components';
import 'whatwg-fetch';
// import RelatedList from './relatedProducts/RelatedList.jsx';
import ReviewList from './ratingsAndReviews/ReviewList.jsx';
// eslint-disable-next-line react/function-component-definition


const NavBar = styled.div`
width: 100%;
height: 3em;
background: rgb(222, 99, 23);
color: #fff;
margin: 0;
padding: 0;
display: flex;
align-items: center;
font-size: 24px;
`;


const App = () => {
  // ! things we need to make overall state

  // load the data
  // pass the whole product to overview
  // then pass only ids to the rest of the componentes
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
      {/* <NavBar>Kids Next Door</NavBar>
      <Overview currentItem={currentItem}/>
      <RelatedList />
      <QuestionsAnswers /> */}
      <ReviewList />
    </>
  )
}

export default App;
