/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Content, Header } from '../../AppStyles';
import FeaturesList from './FeaturesList.jsx';

const Comparison = ({ show, close, name, currentItem, id, relatedFeatures, mainFeatures }) => {
  return (
    <Modal show={show}>
      <Content>
        <Header>
          <button onClick={close}>x</button>
          <h3>Comparing</h3>
          <p>{currentItem.name} &nbsp; Features &nbsp; {name}</p>
        </Header>
        <FeaturesList features={mainFeatures} relatedFeatures={relatedFeatures}/>
      </Content>
    </Modal>
  )
}

export default Comparison;