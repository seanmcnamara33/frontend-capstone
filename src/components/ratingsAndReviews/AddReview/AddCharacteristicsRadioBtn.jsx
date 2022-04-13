/* eslint-disable */
import React, { useState } from 'react';


const AddCharacteristicsRadioBtn = (props) => {

  const handleValueChange = (event) => {
    props.handleCharacteristicsChange(props.type, event.target.value);
  }

  return (
    <div onChange={handleValueChange}>
      <label style={{marginLeft: '0.2em'}}>1</label>
      <input type='radio' value={1} name={props.type}></input>
      <label style={{marginLeft: '0.2em'}}>2</label>
      <input type='radio' value={2} name={props.type}></input>
      <label style={{marginLeft: '0.2em'}}>3</label>
      <input type='radio' value={3} name={props.type}></input>
      <label style={{marginLeft: '0.2em'}}>4</label>
      <input type='radio' value={4} name={props.type}></input>
      <label style={{marginLeft: '0.2em'}}>5</label>
      <input type='radio' value={5} name={props.type}></input>
    </div>
  )
}

export default AddCharacteristicsRadioBtn;