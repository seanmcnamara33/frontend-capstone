/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './RatingsCharacteristicsChart.css';

const RatingsCharacteristicsChart = (props) => {
  // const [characteristics, setCharacteristics] = useState([]);
  const [chars, setChars] = useState([]);

  const gradeData = {
    'Size': ['Small', 'Perfect','Big'],
    'Width': ['Narrow', 'Perfect', 'Wide'],
    'Fit': ['Tight', 'Perfect',  'Baggy'],
    'Length': ['Short', 'Perfect', 'Long'],
    'Comfort': ['Poor', 'Excellent'],
    'Quality': ['Low', 'High']
  }

  const getCharacteristics = (p) => {
    let characteristics = [];
    let temp = {};
    for (let key in p.characteristics) {
        temp[key] = [key, p.characteristics[key].value, gradeData[key][0], gradeData[key][1], gradeData[key][2]];
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
      {Object.values(chars).length && Object.values(chars).map(([name, avg, firstChar, secondChar, thirdChar]) => (
        <div className='characteristics-chart' key={`${name} ${avg}`}>
          {name}
          <div className='characteristics'>
            <a className='bad-tag'>{firstChar}</a> <a className={thirdChar !== undefined ? 'ok-tag' : 'good-tag'}>{secondChar}</a> <a className={thirdChar !== undefined ?'good-tag':null}>{thirdChar}</a>
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