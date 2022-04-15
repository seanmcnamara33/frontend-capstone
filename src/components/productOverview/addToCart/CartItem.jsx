/* eslint-disable */
import React from 'react';
import {Item, ItemName, ItemCount, RemoveItemButton} from './AddToCartStyles.jsx'

const CartItem = ({item, onRemoveItemButtonClick}) => {
  return (
    <Item>
      <ItemName>Item SKU: {item.sku_id.toString()}</ItemName>
      <ItemCount>Item Count: {item.count}</ItemCount>
      <RemoveItemButton data-sku={item.sku_id} onClick={(event) => onRemoveItemButtonClick(event)}>Remove</RemoveItemButton>
    </Item>
  );
}
export default CartItem;