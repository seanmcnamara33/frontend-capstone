/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import OutfitCard from './OutfitCard.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';


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
  &:hover {
    background-color: rgb(59, 167, 184);
    box-shadow: 0 0 5px rgb(59, 167, 184);
  }
`;

const ButtonRight = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  &:hover {
    background-color: rgb(59, 167, 184);
    box-shadow: 0 0 5px rgb(59, 167, 184);
  }
`;


// ------------------COMPONENT------------------ //

const OutfitList = ({ currentItem }) => {
  const [salePrices, setSalePrices] = useState({});
  const [orgPrice, setOrgPrice] = useState({});
  const [yourFits, setYourFits] = useState({});
  const [outfits, setOutfits] = useState([]);
  const [images, setImages] = useState({});
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(2);

  let salePrice = useRef({});
  let ogPrice = useRef({});
  let yourFit = useRef({});
  let image = useRef({});

  const addOutfit = () => {
    if (!outfits.includes(currentItem)) {
      setOutfits(outfits => {
        return [...outfits, currentItem];
      })
    }
  }

  const getStyle = id => {
    if (!yourFit.current[id] || !image.current[id] || !ogPrice.current[id] || !salePrice.current[id]) {
      fetch(`${process.env.API_URI}/products/${id}/styles`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
        .then(response => {
          response.json().then(result => {
            yourFit.current[id] = result.results[0];
            setYourFits(prev => {
              return {...prev, [id]: result.results[0]};
            });
            image.current[id] = result.results[0].photos[0].thumbnail_url;
            setImages(prev => {
              return {...prev, [id]: result.results[0].photos[0].thumbnail_url};
            })
            ogPrice.current[id] = result.results[0].original_price;
            setOrgPrice(prev => {
              return {...prev, [id]: result.results[0].original_price};
            })
            salePrice.current[id] = result.results[0].sale_price;
            setSalePrices(prev => {
              return {...prev, [id]: result.results[0].sale_price};
            })
          })
        })
    } else {
      let y = yourFit.current[id];
      setSty(prev => {
        return {...prev, [id]: s};
      });
      let i = image.current[id];
      setImages(prev => {
        return {...prev, [id]: i};
      });
      let o = ogPrice.current[id];
      setOrgPrice(prev => {
        return {...prev, [id]: o}
      });
      let sale = salePrice.current[id];
      setSalePrices(prev => {
        return {...prev, [id]: sale}
      });
    }
  }

  useEffect(() => {
    if (outfits) {
      outfits.forEach(outfit => {
        getStyle(outfit.id);
      })
    }
  }, [outfits]);

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
              <OutfitCard currentItem={currentItem} outfit={outfit} deleteClick={deleteClick} image={images[outfit.id]} ogPrice={orgPrice[outfit.id]} sale={salePrices[outfit.id]}/>
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
