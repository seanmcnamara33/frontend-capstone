/* eslint-disable */
import React from 'react';
import styled from 'styled-components'

const plus = 'https://images.unsplash.com/photo-1560443794-1333caf35d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80';


// -------------------STYLES------------------- //

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: end;
  align-items: center;
  border: solid;
  border-image: linear-gradient(45deg, rgb(207, 106, 48) , rgb(59, 167, 184));
  border-image-slice: 1;
  margin-right: 10px;
  margin-left: 10px;
  border-image-width: 2px;
  font-family:'Roboto',sans-serif;
`;

const ImageStyle = styled.img`
  height: 360px;
  max-width: 300px;
  min-width: 300px;
  /* border-top-left-radius: 18px;
  border-top-right-radius: 18px; */
  object-fit: cover;
`;


// ------------------COMPONENT------------------ //

const AddOutfitCard = ({ addOutfit }) => {
  return (
    <div>
      <CardStyle onClick={addOutfit}>
        <ImageStyle src={plus}></ImageStyle>
        <p>Add current item to your outfits</p>
      </CardStyle>
    </div>
  )
}

export default AddOutfitCard;