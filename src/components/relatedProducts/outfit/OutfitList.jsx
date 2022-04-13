/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddOutfitCard from './AddOutfitCard.jsx';
import OutfitCard from './OutfitCard.jsx';


// -------------------STYLES------------------- //

const HeaderStyle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  margin: none;
  padding-top: 10px;
`;

const WidgetStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

const OutfitListStyle = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  width: auto;
  padding-left: 5px;
  padding-right: 5px;
`;

const ButtonLeft = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 100%;
`;

const ButtonRight = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 100%;
`;


// ------------------COMPONENT------------------ //

const OutfitList = ({ currentItem }) => {
  const [outfits, setOutfits] = useState([]);
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(2);

  const addOutfit = () => {
    if (!outfits.includes(currentItem)) {
      setOutfits(outfits => {
        let temp = [...outfits, currentItem];
        return temp;
      })
    }
  }

  const rightClick = () => {
    if (begin === outfits.length - 2) {
      setBegin(outfits.length - 2);
      setEnd(outfits.length);
    } else {
      setBegin(begin + 1);
      setEnd(end + 1);
    }
  }

  const leftClick = () => {
    if (begin === 0) {
      setBegin(0);
      setEnd(2);
    } else {
      setBegin(begin - 1);
      setEnd(end - 1);
    }
  }

  const deleteClick = (outfitId) => {
    let newOutfits = outfits.filter(outfit => outfit.id !== outfitId)
    setOutfits(newOutfits)
  }

  return (
    <div id="outfit-list">
    <HeaderStyle>Your Outfits</HeaderStyle>
    <WidgetStyle>
      <OutfitListStyle>
      <AddOutfitCard addOutfit={addOutfit}/>
      {begin > 0 && <ButtonLeft onClick={leftClick}>&laquo;</ButtonLeft>}
        {outfits.length > 0 && outfits.slice(begin, end).map((outfit, index) => {
          return (
            <li key={index}>
              <OutfitCard currentItem={currentItem} outfit={outfit} deleteClick={deleteClick}/>
            </li>
          )
        })}
      </OutfitListStyle>
      {end < outfits.length && <ButtonRight onClick={rightClick}>&#187;</ButtonRight>}
    </WidgetStyle>
    </div>
  )
};

export default OutfitList;
