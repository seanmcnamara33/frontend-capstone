/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ReviewList from '../components/ratingsAndReviews/ReviewList.jsx';


test('Review list renders 2 reviews on page load', () => {
  render(<ReviewList />);
  expect(ReviewList.currentReviews.length).toBe(2);
});