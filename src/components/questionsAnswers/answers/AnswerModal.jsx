/* eslint-disable */
import React from 'react';
import { FlexHeader } from '../Styles';
import { Modal, Content, Header } from '../../AppStyles';
import { AiOutlineClose } from 'react-icons/ai';
import AddAnswer from '../answers/AddAnswer';
import { CloseBtn } from '../../AppStyles';

const AnswerModal = ({handleAnswerModal, answerModal, item}) => (
  <Modal onClose={handleAnswerModal} show={answerModal}>
    <Content>
      <Header>
        <FlexHeader>
          <h2>Add An Answer</h2>
          <CloseBtn onClick={handleAnswerModal}><AiOutlineClose/></CloseBtn>
        </FlexHeader>
        <h3>About the {item.name}</h3>
      </Header>
      <AddAnswer handleAnswerModal={handleAnswerModal} />
    </Content>
  </Modal>
);

export default AnswerModal;