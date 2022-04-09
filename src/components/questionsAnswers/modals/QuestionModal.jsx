/* eslint-disable */
import React from 'react';
import { FlexHeader } from '../Styles';
import { Modal, Content, Header } from '../../AppStyles';
import { AiOutlineClose } from 'react-icons/ai';
import AddQuestion from '../questions/AddQuestion';

const QuestionModal = ({handleQuestionModal, questionModal, name, addQuestion}) => (
  <Modal onClose={handleQuestionModal} show={questionModal}>
    <Content>
      <Header>
        <FlexHeader>
          <h2>Ask A Question</h2>
          <button onClick={handleQuestionModal}><AiOutlineClose/></button>
        </FlexHeader>
        <h3>About the {name}</h3>
      </Header>
      <AddQuestion addQuestion={addQuestion}/>
    </Content>
  </Modal>
);

export default QuestionModal;