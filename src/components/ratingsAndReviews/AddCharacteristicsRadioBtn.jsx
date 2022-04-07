/* eslint-disable */
import React, { useState } from 'react';


const AddCharacteristicsRadioBtn = (props) => {

  const [radioValue, setRadioValue] = useState('');

  const handleValueChange = (event) => {
    setRadioValue(event.target.value)
  }

  return (
    <div onChange={handleValueChange}>
      <p> None</p>
      <input type='radio' name='characteristics'></input>
      <p>1</p>
      <input type='radio' value='1' name='characteristics'></input>
      <p>2</p>
      <input type='radio' value='2' name='characteristics'></input>
      <p>3</p>
      <input type='radio' value='3' name='characteristics'></input>
      <p>4</p>
      <input type='radio' value='4' name='characteristics'></input>
      <p>5</p>
      <input type='radio' value='5' name='characteristics'></input>
    </div>
  )
}

export default AddCharacteristicsRadioBtn;