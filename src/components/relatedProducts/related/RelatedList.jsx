/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import RelatedProductCard from './RelatedProductCard.jsx';
import 'whatwg-fetch';


// -------------------STYLES------------------- //

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
  justify-content: space-around;
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

const RelatedList = ({ currentItem, id }) => {
  const [relatedProds, setRelatedProds] = useState([]);
  const [mainFeatures, setMainFeatures] = useState([]);
  const [categories, setCategories] = useState({});
  const [salePrices, setSalePrices] = useState({});
  const [orgPrice, setOrgPrice] = useState({});
  const [images, setImages] = useState({});
  const [names, setNames] = useState({});
  const [begin, setBegin] = useState(0);
  const [rel, setRel] = useState({});
  const [sty, setSty] = useState({});
  const [end, setEnd] = useState(3);

  let salePrice = useRef({});
  let category = useRef({});
  let ogPrice = useRef({});
  let related = useRef({});
  let style = useRef({});
  let image = useRef({});
  let name = useRef({});

  const getRelatedIdsAndMainFeats = (productId) => {
    fetch(`${process.env.API_URI}/products/${productId}/related`, { method: 'GET', headers: { Authorization: process.env.API_KEY }})
      .then(response => response.json())
      .then(results => setRelatedProds([...new Set(results)]))
      .catch(err => console.log(`Error getting related products: ${err}`))
    fetch(`${process.env.API_URI}/products/${id}`, { method: 'GET', headers: { Authorization: process.env.API_KEY }})
      .then(response => response.json())
      .then(results => setMainFeatures(results.features))
      .catch(err => console.log(`Error getting features: ${err}`))
  }

  const getProducts = id => {
    if (!related.current[id]) {
      fetch(`${process.env.API_URI}/products/${id}`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then(response => {
        response.json().then(result => {
          related.current[id] = result;
          setRel(prev => {
            return {...prev, [id]: result};
          });
          name.current[id] = result.name;
          setNames(prev => {
            return {...prev, [id]: result.name};
          });
          category.current[id] = result.category.toUpperCase();
          setCategories(prev => {
            return {...prev, [id]: result.category.toUpperCase()};
          });
        })
      })
    } else {
      let d = related.current[id];
      setRel(prev => {
        return {...prev, [id]: d};
      });
      let n = name.current[id];
      setNames(prev => {
        return {...prev, [id]: n};
      });
      let c = category.current[id];
      setCategories(prev => {
        return {...prev, [id]: c};
      });
    }
  }

  const getStyles = id => {
    if (!style.current[id] || !image.current[id] || !ogPrice.current[id] ||!salePrice.current[id]) {
      fetch(`${process.env.API_URI}/products/${id}/styles`, { method: 'GET', headers: { Authorization: process.env.API_KEY } })
      .then(response => {
        response.json().then(result => {
          style.current[id] = result.results[0];
          setSty(prev => {
            return {...prev, [id]: result.results[0]}
          });
          image.current[id] = result.results[0].photos[0].thumbnail_url;
          setImages(prev => {
            return {...prev, [id]: result.results[0].photos[0].thumbnail_url}
          });
          ogPrice.current[id] = result.results[0].original_price;
          setOrgPrice(prev => {
            return {...prev, [id]: result.results[0].original_price}
          });
          salePrice.current[id] = result.results[0].sale_price;
          setSalePrices(prev => {
            return {...prev, [id]: result.results[0].sale_price}
          });
        })
      })
    } else {
      let s = style.current[id];
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

  const sourceCardData = () => {
    relatedProds.forEach(relatedId => {
      getProducts(relatedId);
      getStyles(relatedId)
    })
  }

  useEffect(() => {
    if (id) {
      getRelatedIdsAndMainFeats(id);
    }
  }, [id])

  useEffect(() => {
    sourceCardData();
  }, [relatedProds])

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
    <div id="related-products">
    <HeaderStyle>Related Products</HeaderStyle>
    <WidgetStyle>
      {begin > 0 && <ButtonLeft onClick={leftClick}>&laquo;</ButtonLeft>}
      <RelatedListStyle>
        {
          Object.keys(rel).length > 0 &&
          Object.keys(sty).length > 0 &&
          relatedProds.slice(begin, end).map((prod, index) => {
            return (
              <li key={prod}>
                <RelatedProductCard product={rel[prod]} style={sty[prod]} currentItem={currentItem} id={id} mainFeatures={mainFeatures} image={images[prod]} ogPrice={orgPrice[prod]} category={categories[prod]} sale={salePrices[prod]} name={names[prod]}/>
              </li>
            )
          })
        }
      </RelatedListStyle>
      {end < relatedProds.length && <ButtonRight onClick={rightClick}>&raquo;</ButtonRight>}
    </WidgetStyle>
    </div>
  );
}

export default RelatedList;