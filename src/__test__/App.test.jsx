import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
// eslint-disable-next-line import/extensions
import App from '../components/App.jsx';

// eslint-disable-next-line no-undef
test('App component to container', () => {
  render(<App />);
  // eslint-disable-next-line no-undef
  expect(screen.getByText('Kids Next Door')).toBeInTheDocument();
});
