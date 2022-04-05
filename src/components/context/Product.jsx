/* eslint-disable */
import React, {createContext, useState, useEffect} from 'react';

const ProductContext = createContext({
  product: {},
  productId: ''
});

const ProductProvider = props => {
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState('');
  const [expanded, setExapanded] = useState(false)
  const load = () => {}

  const value = {}

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;