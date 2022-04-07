/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: end;
  align-items: center;
  border: solid;
  border-image: linear-gradient(45deg, rgb(207, 106, 48) , blue);
  border-image-slice: 1;
  margin-right: 10px;
  margin-left: 10px;
  border-image-width: 2px;
  font-family:'Roboto',sans-serif;
`;

const ImageStyle = styled.img`
  height: 350px;
  max-width: 300px;
  min-width: 300px;
  object-fit: cover;
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

const OutfitCard = ({ outfit }) => {
  const [style, setStyle] = useState([]);
  const [image, setImage] = useState('');

  const getStyle = () => {
    fetch(`${process.env.API_URI}/products/${outfit.id}/styles`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then((response) => {
        response.json().then(result => {
          setStyle(result.results[0]);
          setImage(result.results[0].photos[0].thumbnail_url);
        })
      })
  }

  useEffect(() => {
    getStyle();
  }, [])

  return (
    <CardStyle>
      <ImageStyle src={image}></ImageStyle>
      <CategoryStyle className="outfit-category">{outfit.category.toUpperCase()}</CategoryStyle>
      <NameStyle className="outfit-name">{outfit.name}</NameStyle>
      { style.sale_price ? <div className="price">was ${style.original_price} now ${style.sale_price}</div> : <div className="price">${style.original_price}</div>}
    </CardStyle>
  )
}

export default OutfitCard;