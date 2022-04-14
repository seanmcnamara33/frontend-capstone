/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './RatingsCharacteristicsChart.css';

const RatingsCharacteristicsChart = (props) => {
  const [characteristics, setCharacteristics] = useState([]);
  const [chars, setChars] = useState([]);

  const gradeData = {
    'Fit': ['Poor', 'Great'],
    'Length': ['Bad', 'Good'],
    'Comfort': ['Poor', 'Excellent'],
    'Quality': ['Low', 'High']
  }

  const getCharacteristics = (p) => {
    let characteristics = [];
    let temp = {};
    for (let key in p.characteristics) {
      temp[key] = [key, p.characteristics[key].value, gradeData[key][0], gradeData[key][1]]
      characteristics.push(temp)
    }
    setChars(temp)
  }

  useEffect(() => {
    if (props.characteristics) {
      getCharacteristics(props);
    }
  }, [props])

  return (
    <>
      {Object.values(chars).length && Object.values(chars).map(([name, avg, bad, good]) => (
        <div className='characteristics-chart' key={`${name} ${avg}`}>
          {name}
          <div>
            <a className='bad-tag'>{bad}</a> <a className='good-tag'>{good}</a>
            <div className='char-bar'>
              <div className='ratings-inner-icon'
                style={{ marginLeft: Math.round(+avg * 20) + '%' }}>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )


};

export default RatingsCharacteristicsChart;