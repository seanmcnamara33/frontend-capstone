/* eslint-disable */
import React, { useEffect } from 'react';
import './RatingsCharacteristicsChart.css';

const RatingsCharacteristicsChart = (props) => {

  const gradeData = {
    'Fit': ['Poor', 'Great'],
    'Length': ['Bad', 'Good'],
    'Comfort': ['Poor', 'Excellent'],
    'Quality': ['Low', 'High']
  }

  const getCharacteristics = (props) => {
    let characteristics = [];
    for (let i in props.characteristics) {
      let temp = {};
      temp[i] = props.characteristics[i].value
      characteristics.push(temp)
    }
    return characteristics;
  }

  return (
    getCharacteristics(props).map((item) => {
      for (let key in item) {
        return (
          <div className='characteristics-chart' key={item[key]}>
            {key}
            <div>
              <a className='bad-tag'>{gradeData[key][0]}</a> <a className='good-tag'>{gradeData[key][1]}</a>
              <div className='char-bar'>
                <div className='ratings-inner-icon'
                style={{marginLeft: Math.round(+item[key]*20) + '%'}}>
                </div>
              </div>
            </div>
          </div>
        )
      }
    })
  )


};

export default RatingsCharacteristicsChart;