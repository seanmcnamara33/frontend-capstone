/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import RelatedProductCard from './RelatedProductCard.jsx';

const HeaderStyle = styled.h2`
  display: flex;
  justify-content: center;
  font-family:'Roboto',sans-serif;
`;

const WidgetStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RelatedListStyle = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 400px;
  width: auto;
  padding-left: 5px;
  padding-right: 5px;
`;

const ButtonLeft = styled.button`
  /* background-image: linear-gradient(45deg, rgb(207, 106, 48) , blue); */
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 100%;
`;

const ButtonRight = styled.button`
  /* background-image: linear-gradient(45deg, blue, rgb(207, 106, 48)); */
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 100%;
`;

const RelatedList = () => {
  const [relatedProds, setRelatedProds] = useState([]);
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(3);
  const [display, setDisplay] = useState([]);
  const productId = 65635;

  const getRelatedProductsID = () => {
    fetch(`${process.env.API_URI}/products/${productId}/related`, { method: 'GET', headers: { Authorization: process.env.API_KEY }})
      .then((response) => {
        response.json().then((results) => {
          setRelatedProds([...new Set(results)]);
          setDisplay([...new Set(results)]);
        })
      })
      .catch((err) => console.log(`Error getting related products: ${err}`))
  }

  useEffect(() => {
    getRelatedProductsID();
  }, [])

  const rightClick = () => {
    if (begin === relatedProds.length - 3) {
      setBegin(relatedProds.length - 3);
      setEnd(relatedProds.length);
    } else {
      setBegin(begin + 1);
      setEnd(end + 1);
    }
  }

  const leftClick = () => {
    if (begin === 0) {
      setBegin(0);
      setEnd(3);
    } else {
      setBegin(begin - 1);
      setEnd(end - 1);
    }
  }

  return (
    <div>
    <HeaderStyle>Related Products</HeaderStyle>
    <WidgetStyle>
      {begin > 0 && <ButtonLeft onClick={leftClick}>&laquo;</ButtonLeft>}
      <RelatedListStyle>
        {display.slice(begin, end).map((prod, index) => {
          return (
            <li key={prod}>
              <RelatedProductCard prod={prod}/>
            </li>
          );
        })}
      </RelatedListStyle>
      {end < relatedProds.length && <ButtonRight onClick={rightClick}>&#187;</ButtonRight>}
    </WidgetStyle>
    </div>
  );
}

export default RelatedList;