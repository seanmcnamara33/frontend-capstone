/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const FeaturesList = ({ features, relatedFeatures }) => {
  const [allFeatures, setAllFeatures] = useState([]);
  const [uniq, setUniq] = useState([]);
  const [total, setTotal] = useState({});
  const featNames = [];
  const shared = {};

  const unique = () => {
    allFeatures.forEach(feature => featNames.push(feature.feature))
  }

  const buildShared = () => {
    features.forEach(feature => {
      shared[feature.feature] = [feature.value, null];
    })
    relatedFeatures.forEach(feature => {
      if (shared[feature.feature]) {
        shared[feature.feature][1] = feature.value;
      } else {
        shared[feature.feature] = [null, feature.value];
      }
    })
    setTotal(shared);
  }

  useEffect(() => {
    buildShared()
  }, [features])

  useEffect(() => {
    setAllFeatures([...features, ...relatedFeatures])
  }, [features])

  useEffect(() => {
    unique();
    setUniq([...new Set(featNames)]);
  }, [allFeatures])

  return (
    <div>
      <table>
        {uniq.map(feature => {
          return (
              <tr>
                {total[feature][0] ? <td>{total[feature][0]}</td> : <td>null</td>}
                <td>{feature}</td>
                {total[feature][1] ? <td>{total[feature][1]}</td> : <td>null</td>}
              </tr>
          )
        })}
      </table>
    </div>
  )
}

export default FeaturesList;
