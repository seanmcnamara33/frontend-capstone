/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Content, Header } from '../../AppStyles';
import FeaturesList from './FeaturesList.jsx';

const Comparison = ({ show, close, name, currentItem, id, relatedFeatures }) => {
  const [features, setFeatures] = useState([]);

  const getFeatures = (id) => {
    fetch(`${process.env.API_URI}/products/${id}`, {
      method: 'GET',
      headers: {
        Authorization: process.env.API_KEY
      }
    })
      .then(response => response.json())
      .then(results => {
        setFeatures(results.features);
      })
      .catch(err => console.log(`Error getting features: ${err}`))
  }

  useEffect(() => {
    if (id) {
      getFeatures(id);
    }
  }, [id])

  return (
    <Modal show={show}>
      <Content>
        <Header>
          <button onClick={close}>x</button>
          <h3>Comparing</h3>
          <p>{currentItem.name} &nbsp; Features &nbsp; {name}</p>
        </Header>
        <FeaturesList features={features} relatedFeatures={relatedFeatures}/>
      </Content>
    </Modal>
  )
}

export default Comparison;