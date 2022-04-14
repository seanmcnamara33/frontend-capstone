/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const plus = 'https://images.unsplash.com/photo-1560443794-1333caf35d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80';


// -------------------STYLES------------------- //

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 410.5px;
  max-width: 300px;
  min-width: 300px;
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

const ImageStyle = styled.div`
  height: inherit;
  max-width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 125px;
  color: rgb(207, 106, 48);
  opacity: 90%;
  &:hover {
    color: rgb(59, 167, 184);
  }
`;


// ------------------COMPONENT------------------ //

const AddOutfitCard = ({ addOutfit }) => {
  return (
    <div>
      <CardStyle onClick={addOutfit}>
        <ImageStyle alt="add outfit icon">
          <BsFillPlusCircleFill/>
        </ImageStyle>
      </CardStyle>
    </div>
  )
}

export default AddOutfitCard;