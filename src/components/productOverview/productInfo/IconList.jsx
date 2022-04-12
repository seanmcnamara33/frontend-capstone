/* eslint-disable */
import React from 'react';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import {IconListContainer, Icon} from './ProductInfoStyles.jsx';

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
