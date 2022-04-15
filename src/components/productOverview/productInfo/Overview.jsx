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
import AddToCart from '../addToCart/AddToCart.jsx';
import ExpandedView from '../imageGallery/ExpandedView.jsx';
import CartModal from '../addToCart/CartModal.jsx';
import Select from 'react-select';
import {AiOutlineShopping} from 'react-icons/ai';
import {getStyles, addToCart, getCart} from '../../common/helpers.js';
import 'whatwg-fetch';
import {ProductOverview, ProductInformation, CategoryContainer, CartFeatures, AddToCartFeatures, StarButton, DescriptionContainer, Price, SalePrice, OriginalPrice, OriginalPriceNoSale, Category, ProductName, CartIcon} from './ProductInfoStyles.jsx';

const Overview = ({currentItem}) => {
  const [currentView, setView] = useState('default');
  const [currentStyle, setCurrentStyle] = useState({});
  const [allStyles, setAllStyles] = useState([]);
  const [currentSize, setSize] = useState({});
  const [currentAmount, setAmount] = useState(0);
  const [currentImage, setCurrentImage] = useState('');
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentSku, setCurrentSku] = useState(0);
  const [show, setShow] = useState(false);
  const [cartContents, setCartContents] = useState([]);
  const selectRef = useRef();

  const getFirstStyle = async (productId) => {
    let result = await getStyles(productId);
    setCurrentStyle(result.results[0]);
    setAllStyles(result.results);
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
    let currentSkuValue;
    for (let sku in currentStyle.skus) {
      if (currentStyle.skus[sku].size === size) {
        currentSku = currentStyle.skus[sku];
        setCurrentSku(sku);
      }
    }
    if (currentSku === undefined) {
      setSize('out-of-stock')
      setAmount(0)
    } else {
      setSize(currentSku);
      setAmount(1);
    }
  };

  const onQuantityChange = (event) => {
    setAmount(event.value);
  };

  const onCartButtonClick = async () => {
    let result = await getCart();
    setShow(true);
    setCartContents(result);
  };

  const onModalClose = async () => {
    setShow(false);
  };

  const onRemoveItemButtonClick = async (event) => {
    const sku = event.target.dataset.sku;
    const newCart = Array.from(cartContents);
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].sku_id.toString() === sku) {
        newCart.splice(i, 1);
      }
    }
    setCartContents(newCart);
  };

  const onAddToCartClick = async () => {
    let result = await addToCart(currentSku);
  };

  const onAddToCartClickNoSize = (sizes) => {
    if (sizes.length) {
      selectRef.current.focus();
    }
  };

  const onImageClick = (image) => {
    setCurrentImage(image);
    setView('expanded');
  };

  const onRestoreDefaultClick = (image) => {
    setCurrentImage(image);
    setView('default');
  };

  useEffect(() => {
    if (currentItem !== undefined && Object.keys(currentItem).length) {
      getFirstStyle(currentItem.id);
    }
  }, [currentItem]);

  useEffect(() => {
    if (currentStyle !== undefined && Object.keys(currentStyle).length) {
      if (Number(currentStyle.sale_price > 0)) {
        setCurrentPrice(Number(currentStyle.sale_price));
      } else {
        setCurrentPrice(Number(currentStyle.original_price));
      }
    }
  }, [currentStyle])

  if (currentItem !== undefined && currentView === 'default' && Object.keys(currentItem).length) {
    return (
      <>
        <ProductOverview id="overview">
          <ImageGallery currentImage={currentImage} currentStyle={currentStyle} currentView={currentView} onImageClick={onImageClick}/>
          <ProductInformation>
            <StarsContainer currentItem={currentItem} onReviewLinkClick={onReviewLinkClick} starsAndReviews={true} singleReview={false}/>
            <CategoryContainer>
              <Category>{currentItem.category}</Category>
              <ProductName>{currentItem.name}</ProductName>
            </CategoryContainer>
            <div>{Number(currentStyle.sale_price) > 0 ?
              <Price>
                <OriginalPrice>${Math.round(Number(currentStyle.original_price)).toString()}</OriginalPrice>
                <SalePrice>${Math.round(Number(currentStyle.sale_price)).toString()}</SalePrice>
              </Price> :
              <OriginalPriceNoSale>${Math.round(Number(currentStyle.original_price)).toString()}</OriginalPriceNoSale>}
            </div>
            <StyleSelector currentItem={currentItem} currentStyle={currentStyle} />
            <StylesView currentStyle={currentStyle} allStyles={allStyles} onStyleCircleClick={onStyleCircleClick} />
            <CartFeatures>
              <SelectSize selectRef={selectRef} openMenuOnFocus={Select.openMenuOnFocus} currentStyle={currentStyle} onSizeChange={onSizeChange} />
              <SelectQuantity currentSize={currentSize} currentStyle={currentStyle} onQuantityChange={onQuantityChange} />
            </CartFeatures>
            <AddToCartFeatures>
              <AddToCart currentStyle={currentStyle} currentSize={currentSize} currentAmount={currentAmount} onAddToCartClickNoSize={onAddToCartClickNoSize} onAddToCartClick={onAddToCartClick} />
              <CartIcon onClick={() => onCartButtonClick()}><AiOutlineShopping size='35px'/></CartIcon>
              <CartModal onRemoveItemButtonClick={onRemoveItemButtonClick} cartContents={cartContents} show={show} onModalClose={onModalClose}></CartModal>
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
    <ProductOverview id="overview">
      <ExpandedView currentStyle={currentStyle} currentImage={currentImage} onRestoreDefaultClick={onRestoreDefaultClick}/>
    </ProductOverview>
  )
  return null;
};

export default Overview;
