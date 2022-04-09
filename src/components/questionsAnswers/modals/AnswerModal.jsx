/* eslint-disable */
import React from 'react';
import { FlexHeader } from '../Styles';
import { Modal, Content, Header } from '../../AppStyles';
import { AiOutlineClose } from 'react-icons/ai';
import AddAnswer from '../answers/AddAnswer';

const AnswerModal = ({handleAnswerModal, answerModal, name}) => (
  <Modal onClose={handleAnswerModal} show={answerModal}>
    <Content>
      <Header>
        <FlexHeader>
          <h2>Add An Answer</h2>
          <button onClick={handleAnswerModal}><AiOutlineClose/></button>
        </FlexHeader>
        <h3>About the {name}</h3>
      </Header>
      <AddAnswer />
    </Content>
  </Modal>
);

export default AnswerModal;