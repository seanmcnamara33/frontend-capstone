/* eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './index.css';
import { ProductProvider } from './components/context/Product';

render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root')
);
