/* eslint-disable */
import React from 'react';

const AddStarRating = (props) => {

  const handleValueChange = (event) => {
    props.handleRatingChange('starRatings', event.target.value)
  }
  return (
    <div onChange={handleValueChange}>
      <input type='radio' id='star5' name='starRating' value={5} />
      <label title='text'>5 stars</label>
      <input type='radio' id='star4' name='starRating' value={4} />
      <label title='text'>4 stars</label>
      <input type='radio' id='star3' name='starRating' value={3} />
      <label title='text'>3 stars</label>
      <input type='radio' id='star2' name='starRating' value={2} />
      <label title='text'>2 stars</label>
      <input type='radio' id='star1' name='starRating' value={1} />
      <label title="text">1 star</label>
    </div>
  )
}

export default AddStarRating;