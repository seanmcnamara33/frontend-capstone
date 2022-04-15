/* eslint-disable */
import React, {createContext, useState, useEffect, useRef} from 'react';
import {fakeSession, getItems} from '../common/helpers';
import 'whatwg-fetch';

export const ProductContext = createContext({
  product: {},
  productId: '',
  getFirstItem: ()=>{}
});

export const ProductProvider = props => {
  const [currentItem, setCurrentItem] = useState({});
  const [productId, setProductId] = useState('');
  const [questionId, setQuestionId] = useState(0);

  const getFirstItem = async () => {
    const results = await getItems();
    setCurrentItem(results[0]);
    setProductId(results[0].id);
  }

  const handleQuestionId = id =>{
    setQuestionId(id)
  }

  const value = {
    currentItem,
    setCurrentItem,
    productId,
    setProductId,
    getFirstItem,
    questionId,
    handleQuestionId
  }

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}