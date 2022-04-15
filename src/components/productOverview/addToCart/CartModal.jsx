import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Content, Header } from '../../AppStyles';

const CartModal = ({show, onModalClose}) => {
  if (show === true) {
    console.log('in the modal')
    return(
      <Modal show={show}>
        <Content>
          <Header>
            <button onClick={() => onModalClose()} style={{'marginTop': '10px'}}>Close</button>
            <h2>Cart</h2>
          </Header>
        </Content>
      </Modal>
    );
  } else {
    return null;
  }
}
export default CartModal;