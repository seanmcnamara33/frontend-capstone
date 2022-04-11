/* eslint-disable */
import React from 'react';

const SortBar = (props) => {

  const handleClick = async (event) => {
    console.log(event.target.value)
    if (event.target.value) {
      props.getSortData(event.target.value);
    }
  }

  return (
    <div>
      <label> {props.totalReviews} reviews, sorted by </label>
      <select onClick={handleClick} >
        <option value="relevant">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
    </div>

  )

};

export default SortBar;