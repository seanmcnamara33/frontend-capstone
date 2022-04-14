/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';

import RelatedList from '../components/relatedProducts/related/RelatedList.jsx';

test('Related Product List component renders', () => {
  render(<RelatedList />);
});