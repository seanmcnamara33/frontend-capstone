/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Content, Header } from '../../AppStyles';
import FeaturesList from './FeaturesList.jsx';


// ------------------COMPONENT------------------ //

const Comparison = ({ show, close, name, currentItem, id, relatedFeatures, mainFeatures }) => {
  return (
    <Modal show={show}>
      <Content>
        <Header>
          <button onClick={close} style={{'margin-top': '10px'}}>Close</button>
          <h3>Comparing</h3>
        </Header>
        <FeaturesList features={mainFeatures} relatedFeatures={relatedFeatures} main={currentItem.name} related={name}/>
      </Content>
    </Modal>
  )
}

export default Comparison;