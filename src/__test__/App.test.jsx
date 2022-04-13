/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import App from '../components/App.jsx';
import {ProductProvider} from '../components/context/Product';

test('App Navbar should render to container', () => {
  render(
    <ProductProvider>
      <App />
    </ProductProvider>
  );

  expect(screen.getByText('Kids Next Door')).toBeInTheDocument();
});
