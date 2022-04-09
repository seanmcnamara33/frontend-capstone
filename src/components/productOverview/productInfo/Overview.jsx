/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import ImageGallery from '../imageGallery/ImageGallery.jsx';
import StarsContainer from '../../common/StarsContainer.jsx';
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
import {ProductOverview, ProductInformation, CategoryContainer, CartFeatures, AddToCartFeatures, StarButton, DescriptionContainer} from './ProductInfoStyles.jsx';

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
    let ratingsAndReviews = document.getElementById('ratings-and-reviews');
    ratingsAndReviews.scrollIntoView({behavior: 'smooth'});
  };

  const onStyleCircleClick = (event, index) => {
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
    if (currentItem !== undefined && Object.keys(currentItem).length) {
      getFirstStyle(currentItem.id);
    }
  }, [currentItem]);


  if (currentItem !== undefined && currentView === 'default' && Object.keys(currentItem).length) {
    return (
      <>
        <ProductOverview>
          <ImageGallery currentImage={currentImage} currentStyle={currentStyle} currentView={currentView} onImageClick={onImageClick}/>
          <ProductInformation>
            <StarsContainer currentItem={currentItem} onReviewLinkClick={onReviewLinkClick} starsAndReviews={true}/>
            <CategoryContainer>
              <p className='category'>{currentItem.category}</p>
              <h2 className='product-name'>{currentItem.name}</h2>
            </CategoryContainer>
            <p className='price'>${Math.round(currentStyle.original_price)}</p>
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
        <DescriptionContainer>
          <ProductInfo currentItem={currentItem} />
          <IconList />
        </DescriptionContainer>
      </>
    );
  } else if (currentView === 'expanded' && Object.keys(currentItem).length)
  return (
    <ProductOverview>
      <ExpandedView currentStyle={currentStyle} currentImage={currentImage} onRestoreDefaultClick={onRestoreDefaultClick}/>
    </ProductOverview>
  )
  return null;
};

export default Overview;
