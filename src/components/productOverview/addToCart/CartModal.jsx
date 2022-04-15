/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Content, Header } from '../../AppStyles';
import CartItem from './CartItem.jsx';

const CartModal = ({show, onModalClose, cartContents, onRemoveItemButtonClick}) => {
  if (show === true) {
    return(
      <Modal show={show}>
        <Content>
          <Header>
            <button onClick={() => onModalClose()} style={{'marginTop': '10px'}}>Close</button>
            <h2>Cart</h2>
          </Header>
          {cartContents.map((item, index) => {
            return <CartItem onRemoveItemButtonClick={onRemoveItemButtonClick} item={item} key={item.sku_id}></CartItem>
          })}
        </Content>
      </Modal>
    );
  } else {
    return null;
  }
}
export default CartModal;