/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Feature from './Feature';
import MainValue from './MainValue';
import RelatedValue from './RelatedValue';
import styled from 'styled-components';

const ListStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const FeaturesList = ({ features, relatedFeatures }) => {
  const [allFeatures, setAllFeatures] = useState([]);
  const [uniq, setUniq] = useState([]);
  const featNames = [];

  const unique = () => {
    allFeatures.forEach(feature => featNames.push(feature.feature))
  }

  useEffect(() => {
    setAllFeatures([...features, ...relatedFeatures])
  }, [features])

  useEffect(() => {
    unique();
    setUniq([...new Set(featNames)]);
  }, [allFeatures])


  return (
    <ListStyle>
      <ul>
        {features.map(feature => {
              return (
                <MainValue feature={feature}/>
              )
        })}
      </ul>
      <ul>
        {console.log(allFeatures, 'all')}
        {uniq.map(feature => {
          return (
            <Feature main={features} related={relatedFeatures} feature={feature}/>
          )
        })}
      </ul>
      <ul>
        {relatedFeatures.map(feature => {
            return (
              <RelatedValue feature={feature}/>
            )
        })}
      </ul>
    </ListStyle>
  )
}

export default FeaturesList;