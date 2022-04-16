/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Content, Header } from '../../AppStyles';
import FeaturesList from './FeaturesList.jsx';


// -------------------STYLES------------------- //

const IconStyle = styled.i`
  display: flex;
  justify-content: end;
  margin-right: 0.3em;
  font-size: 20px;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  min-height: 10px;
  max-height: 10px;
  justify-content: end;
`;



// ------------------COMPONENT------------------ //

const Comparison = ({ show, close, name, currentItem, id, relatedFeatures, mainFeatures }) => {
  return (
    <Modal show={show} style={{'zIndex': '1'}}>
      <Content>
        <Header>
          <InnerDiv>
            <IconStyle onClick={close}>&#10060;</IconStyle>
          </InnerDiv>
          <h2>Comparing</h2>
        </Header>
        <FeaturesList features={mainFeatures} relatedFeatures={relatedFeatures} main={currentItem.name} related={name}/>
      </Content>
    </Modal>
  )
}

export default Comparison;