/* eslint-disable */
import React from 'react';

const SortBar = (props) => {
  return (
    <div>
      <label> {'0'} reviews, sorted by </label>
      <select>
        <option>Helpful</option>
        <option>Newest</option>
        <option>Relevant</option>
      </select>
    </div>

  )

};

export default SortBar;