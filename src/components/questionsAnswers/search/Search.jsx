/* eslint-disable */
import React from 'react';
import {SearchInput} from './Styles';

const Search = ({filterQuestions}) => (
  <SearchInput
    type="text"
    maxLength="60"
    placeholder="Have a Question? Search for answers..."
    onChange={e=>filterQuestions(e.target.value)}
  />
)

export default Search;