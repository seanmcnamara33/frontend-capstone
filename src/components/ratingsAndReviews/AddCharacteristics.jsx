/* eslint-disable */
import React from 'react';
import AddCharacteristicsRadioBtn from './AddCharacteristicsRadioBtn.jsx';

const AddCharacteristics = (props) => {
  return (
      <div className='review-list'>
        {/* <label>Characteristics</label> */}
        <label>Size
          <AddCharacteristicsRadioBtn />
        </label>

        <label>Width
          <AddCharacteristicsRadioBtn />
        </label>

        <label>Comfort
          <AddCharacteristicsRadioBtn />
        </label>

        <label>Quality
          <AddCharacteristicsRadioBtn />
        </label>

        <label>Length
          <AddCharacteristicsRadioBtn />
        </label>

        <label>Fit
          <AddCharacteristicsRadioBtn />
        </label>
      </div>

  )
}

export default AddCharacteristics;
