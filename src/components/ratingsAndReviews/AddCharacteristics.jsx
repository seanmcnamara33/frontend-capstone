/* eslint-disable */
import React from 'react';
import AddCharacteristicsRadioBtn from './AddCharacteristicsRadioBtn.jsx';

const AddCharacteristics = (props) => {
  return (
      <div className='review-list'>
        <label>Size
          <AddCharacteristicsRadioBtn handleCharacteristicsChange={props.handleCharacteristicsChange} type="Size" />
        </label>

        <label>Width
          <AddCharacteristicsRadioBtn handleCharacteristicsChange={props.handleCharacteristicsChange} type="Width"/>
        </label>

        <label>Comfort
          <AddCharacteristicsRadioBtn handleCharacteristicsChange={props.handleCharacteristicsChange} type="Comfort"/>
        </label>

        <label>Quality
          <AddCharacteristicsRadioBtn handleCharacteristicsChange={props.handleCharacteristicsChange} type="Quality"/>
        </label>

        <label>Length
          <AddCharacteristicsRadioBtn handleCharacteristicsChange={props.handleCharacteristicsChange} type="Length"/>
        </label>

        <label>Fit
          <AddCharacteristicsRadioBtn handleCharacteristicsChange={props.handleCharacteristicsChange} type="Fit"/>
        </label>
      </div>

  )
}

export default AddCharacteristics;
