/* eslint-disable */
import React, { useState } from 'react';


const AddCharacteristicsRadioBtn = (props) => {

  const handleValueChange = (event) => {
    props.handleCharacteristicsChange(props.type, event.target.value);
  }

  return (
    <div onChange={handleValueChange}>
      <p> None</p>
      <input type='radio' name={props.type}></input>
      <p>1</p>
      <input type='radio' value='1' name={props.type}></input>
      <p>2</p>
      <input type='radio' value='2' name={props.type}></input>
      <p>3</p>
      <input type='radio' value='3' name={props.type}></input>
      <p>4</p>
      <input type='radio' value='4' name={props.type}></input>
      <p>5</p>
      <input type='radio' value='5' name={props.type}></input>
    </div>
  )
}

export default AddCharacteristicsRadioBtn;