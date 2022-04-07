/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import ImageGallery from '../imageGallery/ImageGallery.jsx';
import StarReviews from './StarReviews.jsx';
import ProductInfo from './ProductInfo.jsx';
import IconList from './IconList.jsx';
import StyleSelector from '../styleSelector/StyleSelector.jsx';
import StylesView from '../styleSelector/StylesView.jsx';
import SelectSize from '../styleSelector/SelectSize.jsx';
import SelectQuantity from '../styleSelector/SelectQuantity.jsx';
import AddToCart from '../AddToCart/AddToCart.jsx';
import ExpandedView from '../imageGallery/ExpandedView.jsx';
import Select from 'react-select';
import styled from 'styled-components';
import 'whatwg-fetch';

const ProductOverview = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const ProductInformation = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  justify-content: space-between;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const CartFeatures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const AddToCartFeatures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const StarButton = styled.button`
  all: unset;
  width: 15%;
  background-color: white;
  padding:0.35em 1.2em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 3px;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  text-align: center;
  height: 100%;
`;

const Overview = ({currentItem}) => {
  const [currentView, setView] = useState('default');
  const [currentStyle, setCurrentStyle] = useState({});
  const [allStyles, setAllStyles] = useState([]);
  const [currentSize, setSize] = useState({});
  const [currentAmount, setAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const selectRef = useRef();

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
    const size = event.value;
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
    selectRef.current.focus();
  };

  const onImageClick = (image) => {
    setCurrentImage(image);
    setView('expanded');
  }

  const onRestoreDefaultClick = (image) => {
    setCurrentImage(image);
    setView('default');
  };

  useEffect(() => {
    if (Object.keys(currentItem).length) {
      getFirstStyle(currentItem.id);
    }
  }, [currentItem]);

  if (currentView === 'default') {
    return (
    <ProductOverview>
      <ImageGallery currentImage={currentImage} currentStyle={currentStyle} currentView={currentView} onImageClick={onImageClick}/>
      <ProductInformation>
        <StarReviews currentItem={currentItem} onReviewLinkClick={onReviewLinkClick} />
        <CategoryContainer>
          <p className='category'>{currentItem.category}</p>
          <h2 className='product-name'>{currentItem.name}</h2>
        </CategoryContainer>
        <p className='price'>${Math.round(currentStyle.original_price)}</p>
        <ProductInfo currentItem={currentItem} />
        <IconList />
        <StyleSelector currentItem={currentItem} currentStyle={currentStyle} />
        <StylesView currentStyle={currentStyle} allStyles={allStyles} onStyleCircleClick={onStyleCircleClick} />
        <CartFeatures>
          <SelectSize selectRef={selectRef} openMenuOnFocus={Select.openMenuOnFocus} currentStyle={currentStyle} onSizeChange={onSizeChange} />
          <SelectQuantity currentSize={currentSize} currentStyle={currentStyle} onQuantityChange={onQuantityChange} />
        </CartFeatures>
        <AddToCartFeatures>
          <AddToCart currentStyle={currentStyle} currentSize={currentSize} currentAmount={currentAmount} onAddToCartClickNoSize={onAddToCartClickNoSize} onAddToCartClick={onAddToCartClick} />
          <StarButton>{String.fromCharCode(0x2606)}</StarButton>
        </AddToCartFeatures>
      </ProductInformation>
    </ProductOverview>
    );
  }
  return (
    <ProductOverview>
      <ExpandedView currentStyle={currentStyle} currentImage={currentImage} onRestoreDefaultClick={onRestoreDefaultClick}/>
    </ProductOverview>
  );
};

export default Overview;
