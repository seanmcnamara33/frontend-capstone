/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, fireEvent } from '@testing-library/react';

import Search from '../../components/questionsAnswers/search/Search.jsx';

test('Search bar renders', ()=>{
  render(<Search />);
  const searchField = screen.getByPlaceholderText('Have a Question? Search for answers...')
  expect(searchField).toBeInTheDocument();
})

test('Search updates typed values', ()=>{
  const filterQuestions = jest.fn(input => {});

  render(<Search filterQuestions={filterQuestions}/>);

  let input = screen.getByTestId('question-search');

  fireEvent.change(input, { target: { value: 'What question are you looking for'}});

  expect(input.value).toBe('What question are you looking for');
})

test('does not filer less than 3 chars', ()=>{
  const filterQuestions = jest.fn(input => {});

  render(<Search filterQuestions={filterQuestions}/>);

  let input = screen.getByTestId('question-search');

  fireEvent.change(input, { target: { value: 'Wh'}});

  expect(input.value).toBe('');
});