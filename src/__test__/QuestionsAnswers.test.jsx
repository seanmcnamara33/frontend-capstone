/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';

import QuestionsAnswers from '../components/questionsAnswers/QuestionsAnswers.jsx';

test('Questions and Answers component renders', () => {
  render(<QuestionsAnswers />);
});
