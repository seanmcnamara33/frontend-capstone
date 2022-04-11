/* eslint-disable */
import React from 'react';
import AddCharacteristicsRadioBtn from './AddCharacteristicsRadioBtn.jsx';

const AddCharacteristics = (props) => {
  let data = [];
  for (let key in props.metaData.characteristics) {
    let temp = {};
    temp['name'] = key;
    temp['id'] = props.metaData.characteristics[key].id;
    data.push(temp)
  }

  return (
    data.map((item) => {
      return (
        <div key={item.name}>
          <label>{item.name}</label>
          <AddCharacteristicsRadioBtn handleCharacteristicsChange={props.handleCharacteristicsChange} type={item.id} />
        </div>
      )
    })
  )
}

export default AddCharacteristics;
