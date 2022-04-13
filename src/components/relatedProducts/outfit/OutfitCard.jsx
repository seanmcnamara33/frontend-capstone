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
  border: solid;
  border-image: linear-gradient(45deg, rgb(207, 106, 48) , rgb(59, 167, 184));
  border-image-slice: 1;
  margin-right: 10px;
  margin-left: 10px;
  border-image-width: 2px;
  font-family:'Roboto',sans-serif;
`;

const OutfitImageStyle = styled.div`
  background-image: url(${props => props.src});
  height: 350px;
  max-width: 300px;
  min-width: 300px;
  /* border-top-left-radius: 18px;
  border-top-right-radius: 18px; */
  background-position: center;
  background-size: cover;
`;

const ImageStyle = styled.img`
  height: 350px;
  max-width: 300px;
  min-width: 300px;
  object-fit: cover;
`;

const IconStyle = styled.i`
  display: flex;
  justify-content: end;
  margin-right: 0.3em;
  font-size: 30px;
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

const OutfitCard = ({ outfit, deleteClick, currentItem }) => {
  const [style, setStyle] = useState([]);
  const [image, setImage] = useState('');

  const getStyle = (ID) => {
    fetch(`${process.env.API_URI}/products/${ID}/styles`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then(result => {
          setStyle(result.results[0]);
          setImage(result.results[0].photos[0].thumbnail_url);
        })
      })
  }

  useEffect(() => {
    if (outfit) {
      getStyle(outfit.id);
    }
  }, [outfit])

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
      <CategoryStyle className="outfit-category">{outfit.category.toUpperCase()}
      </CategoryStyle>
      <NameStyle className="outfit-name">{outfit.name}</NameStyle>
      { style.sale_price ? <div className="price">was ${style.original_price} now ${style.sale_price}</div> : <div className="price">${style.original_price}</div>}
      <StarsContainer currentItem={outfit} starsAndReviews={false} singleReview={false}/>
    </CardStyle>
  )
}

export default OutfitCard;