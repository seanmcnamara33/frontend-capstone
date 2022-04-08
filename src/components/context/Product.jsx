/* eslint-disable */
import React, {createContext, useState, useEffect, useRef} from 'react';
import {fakeSession} from '../common/helpers';

export const ProductContext = createContext({
  product: {},
  productId: '',
  checkSession: ()=>{},
  createSession: ()=>{},
  getFirstItem: ()=>{}
});

export const ProductProvider = props => {
  const [currentItem, setCurrentItem] = useState({});
  const [productId, setProductId] = useState('');
  const session = useRef();

  const checkSession = (s) => {
    // let s = sessionStorage.getItem('session');
    return s === session.current;
  }

  const createSession = () => {
    let s = sessionStorage.getItem('session');
    session.current = s;
    console.log(session)
    if (!s) {
      session.current = fakeSession();
      sessionStorage.setItem('session', session.current);
    }
  }

  const getFirstItem = () => {
    fetch(`${process.env.API_URI}/products`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then((results) => {
          setCurrentItem(results[0]);
          setProductId(results[0].id);
        });
      })
      .catch((err) => {
        console.log(`Error found in getFirstItem: ${err}`);
      });
  };

  const value = {
    currentItem,
    productId,
    checkSession,
    createSession,
    getFirstItem
  }

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}