/* eslint-disable */
import React from 'react';
import {SearchInput} from './Styles';

const Search = ({filterQuestions}) => (
  <SearchInput
    data-testid="question-search"
    type="text"
    maxLength="60"
    placeholder="Have a Question? Search for answers..."
    onChange={e=>filterQuestions(e.target.value)}
  />
)

export default Search;