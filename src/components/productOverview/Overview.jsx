/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import StarReviews from './StarReviews.jsx';
import ProductInfo from './ProductInfo.jsx';
import IconList from './IconList.jsx';
// state variables inside function?
const Overview = () => {
  const [currentItem, setCurrentItem] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});

  const getFirstItem = () => {
    console.log(process.env.API_URI);

    fetch(`${process.env.API_URI}/products`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then((results) => setCurrentItem(results[0]));
      })
      .catch((err) => {
        console.log(`Error found in getFirstItem: ${err}`);
      });
  };

  const getFirstStyle = (productId) => {
    fetch(`${process.env.API_URI}/products/${productId}/styles`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then((result) => setCurrentStyle(result.results[0]));
      })
      .catch((err) => {
        console.log(`Error found in getFirstStyle: ${err}`);
      });
  };

  const onReviewLinkClick = () => {
    // either have Varun add a ref using useRef to the reviews header,
    // so that you can use scrollIntoView on the ref to get to it on click
    // OR, have Varun add an id to the review parent div,
    // which you can then referene with document.getElementById(),
    // and then you can call [element].scrollIntoView() on that element
    // you can also make it scroll smoothly, with scrollIntoView({behavior: 'smooth'})
    console.log('onReviewLinkClick not ready yet!');
  };

  useEffect(() => {
    getFirstItem();
  }, []);

  useEffect(() => {
    if (Object.keys(currentItem).length) {
      // console.log(currentItem);
      getFirstStyle(currentItem.id);
    }
  }, [currentItem]);

  return (
    <>
      <h1>Product Overview</h1>
      <StarReviews currentItem={currentItem} onReviewLinkClick={onReviewLinkClick} />
      <p>
        Category:
        {currentItem.category}
      </p>
      <h4>
        Product Name:
        {currentItem.name}
      </h4>
      <p>
        Price:
        {currentStyle.original_price}
      </p>
      <ProductInfo currentItem={currentItem} />
      <IconList />
    </>
  );
};

export default Overview;
