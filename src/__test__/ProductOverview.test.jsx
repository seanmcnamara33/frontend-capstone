/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';

import Overview from '../components/productOverview/productInfo/Overview.jsx';
import ProductInfo from '../components/productOverview/productInfo/ProductInfo.jsx';

test('Overview component renders', () => {
  render(<Overview />);
});

describe("Specific Page Component View Tests", () => {
  test('renders Overview Component Items', () => {
    render(<ProductInfo />);
    const linkElement = screen.getByText('Product Description', {exact: false})
    expect(linkElement).toBeInTheDocument();
  });
})