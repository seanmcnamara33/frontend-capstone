/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const IconListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Icon = styled.div`
  margin: 5px;
`;
const IconList = () => {
  return (
    <IconListContainer>
      <Icon><FaFacebook /></Icon>
      <Icon><FaPinterest /></Icon>
      <Icon><FaTwitter /></Icon>
    </IconListContainer>
  );
};

export default IconList;
