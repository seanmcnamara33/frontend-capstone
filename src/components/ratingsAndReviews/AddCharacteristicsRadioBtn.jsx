/* eslint-disable */
import React, { useState } from 'react';


const AddCharacteristicsRadioBtn = (props) => {

  const handleValueChange = (event) => {
    props.handleCharacteristicsChange(props.type, event.target.value);
  }

  return (
    <div onChange={handleValueChange}>
      <label> None</label>
      <input type='radio' value={0} name={props.type}></input>
      <label>1</label>
      <input type='radio' value={1} name={props.type}></input>
      <label>2</label>
      <input type='radio' value={2} name={props.type}></input>
      <label>3</label>
      <input type='radio' value={3} name={props.type}></input>
      <label>4</label>
      <input type='radio' value={4} name={props.type}></input>
      <label>5</label>
      <input type='radio' value={5} name={props.type}></input>
    </div>
  )
}

export default AddCharacteristicsRadioBtn;