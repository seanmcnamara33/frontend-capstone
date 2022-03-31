import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {screen, render, cleanup} from '@testing-library/react'
import App from '../components/App.jsx';

test('App component to container', () => {
  render(<App />)
  expect(screen.getByText('Kids Next Door')).toBeInTheDocument();
})