/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'whatwg-fetch';
import StarsContainer from '../../common/StarsContainer.jsx';


const placeholder = 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80';


// -------------------STYLES------------------- //

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: end;
  align-items: center;
  border: 2px solid rgb(207, 106, 48);
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
  font-family:'Roboto',sans-serif;
  &:hover {
    border: 2px solid rgb(59, 167, 184);
    box-shadow: 0 0 5px rgb(59, 167, 184);
  }
`;

const OutfitImageStyle = styled.div`
  background-image: url(${props => props.src});
  height: 350px;
  max-width: 300px;
  min-width: 300px;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const IconStyle = styled.i`
  display: flex;
  justify-content: end;
  margin-right: 0.3em;
  font-size: 30px;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 300px;
  justify-content: space-between;
`;

const CategoryStyle = styled.div`
  display: flex;
  padding-left: 5px;
  padding-top: 5px;
  align-self: start;
  font-family:'Roboto',sans-serif;
  font-weight: small;
`;

const NameStyle = styled.div`
  display: flex;
  align-self: center;
  font-family:'Roboto',sans-serif;
  font-weight: bold;
`;


// ------------------COMPONENT------------------ //

const OutfitCard = ({ outfit, deleteClick, currentItem, image, ogPrice, sale }) => {
  return (
    <CardStyle>
      {
        image ?
        <div>
          <OutfitImageStyle src={image} alt="outfit card image">
            <IconStyle onClick={() => deleteClick(outfit.id)}>&#10060;</IconStyle>
          </OutfitImageStyle>
        </div> :
        <div>
          <OutfitImageStyle src={placeholder} alt="outfit card placeholder image">
            <IconStyle onClick={() => deleteClick(outfit.id)}>&#10060;</IconStyle>
          </OutfitImageStyle>
        </div>
      }
      <InnerDiv>
        <CategoryStyle className="outfit-category">{outfit.category.toUpperCase()}</CategoryStyle>
        <StarsContainer currentItem={outfit} starsAndReviews={false} singleReview={false}/>
      </InnerDiv>
      <NameStyle className="outfit-name">{outfit.name}</NameStyle>
      { sale ? <div className="price">was ${ogPrice} now ${sale}</div> : <div className="price">${ogPrice}</div>}
    </CardStyle>
  )
}

export default OutfitCard;