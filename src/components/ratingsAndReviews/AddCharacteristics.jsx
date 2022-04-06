/* eslint-disable */
import React from 'react';
import AddCharacteristicsRadioBtn from './AddCharacteristicsRadioBtn.jsx';

const AddCharacteristics = () => {
  return (
    <div className='review-list'>
      {/* <label>Characteristics</label> */}
      <label>Size</label>
      <AddCharacteristicsRadioBtn />
      <label>Width</label>
      <AddCharacteristicsRadioBtn />
      <label>Comfort</label>
      <AddCharacteristicsRadioBtn />
      <label>Quality</label>
      <AddCharacteristicsRadioBtn />
      <label>Length</label>
      <AddCharacteristicsRadioBtn />
      <label>Fit</label>
      <AddCharacteristicsRadioBtn />
    </div>

  )
}

export default AddCharacteristics;
