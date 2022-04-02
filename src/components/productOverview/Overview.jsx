/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import StarReviews from './StarReviews.jsx';
import ProductInfo from './ProductInfo.jsx';
import IconList from './IconList.jsx';
import StyleSelector from './StyleSelector.jsx';
import StylesView from './StylesView.jsx';
import SelectSize from './SelectSize.jsx';
import SelectQuantity from './SelectQuantity.jsx';
import AddToCart from './AddToCart.jsx';

// state variables inside function?
const Overview = () => {
  const [currentItem, setCurrentItem] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [allStyles, setAllStyles] = useState([]);
  const [currentSize, setSize] = useState({});
  const [currentAmount, setAmount] = useState(0);
  const [cart, setCart] = useState([]);

  const getFirstItem = () => {
<<<<<<< HEAD
    console.log(process.env.API_URI);

=======
>>>>>>> 734b2b4 (add functionality for select size/select quantity, and addToCart buttons. addToCart needs to toggle size dropdown on click if no size is selected)
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
        response.json().then((result) => {
          setCurrentStyle(result.results[0]);
          setAllStyles(result.results);
        });
      })
      .catch((err) => {
        console.log(`Error found in getFirstStyle: ${err}`);
      });
  };


  const onReviewLinkClick = () => {
    // either have TIM add a ref using useRef to the reviews header, so that you can use scrollIntoView on the ref to get to it on click
    // OR, have TIM add an id to the review parent div, which you can then referene with document.getElementById(), and then you can call [element].scrollIntoView() on that element
    // you can also make it scroll smoothly, with scrollIntoView({behavior: 'smooth'})
    console.log('onReviewLinkClick not ready yet!');
  };

  const onStyleCircleClick = (event, index) => {
    // should change styling of clicked circle - should highlight it/add a floating checkmark
    // on click, they should also change the current image in the image gallery/carousel
    const newStyle = allStyles[index];
    setCurrentStyle(newStyle);
  };

  const onSizeChange = (event) => {
    const size = event.target.value;
    let currentSku;
    for (let sku in currentStyle.skus) {
      if (currentStyle.skus[sku].size === size) {
        currentSku = currentStyle.skus[sku];
      }
    }
    setSize(currentSku);
    setAmount(1);
  };

  const onQuantityChange = (event) => {
    setAmount(event.target.value);
  };

  const onAddToCartClick = () => {
    for (let i = 0; i < currentAmount; i++) {
      cart.push(currentStyle);
    }
    setCart(cart);
  };

  const onAddToCartClickNoSize = () => {

    console.log('we are in onAddToCartClickNoSize');
  };

  useEffect(() => {
    getFirstItem();
  }, []);

  useEffect(() => {
    if (Object.keys(currentItem).length) {
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
      <StyleSelector currentItem={currentItem} currentStyle={currentStyle} />
      <StylesView allStyles={allStyles} onStyleCircleClick={onStyleCircleClick} />
      <div className='cart-features'>
        <SelectSize currentStyle={currentStyle} onSizeChange={onSizeChange} />
        <SelectQuantity currentSize={currentSize} currentStyle={currentStyle} onQuantityChange={onQuantityChange} />
      </div>
      <AddToCart currentStyle={currentStyle} currentSize={currentSize} currentAmount={currentAmount} onAddToCartClickNoSize={onAddToCartClickNoSize} onAddToCartClick={onAddToCartClick} />
      <button className='star'>IM A STAR</button>
    </>
  );
};

export default Overview;
