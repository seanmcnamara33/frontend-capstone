/* eslint-disable */
import React, {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../../context/Product';
import 'whatwg-fetch';

import AnswersList from '../answers/AnswersList'
import QuestionModal from './QuestionModal';
import Accordion from './Accordion';

import { MainBtn } from '../../AppStyles';

const QuestionList = ({ questions, handleQuestionCount }) => {
  const { currentItem, productId } = useContext(ProductContext);
  const [questionModal, setQuestionModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [height, setHeight] = useState(false);

  const handleQuestionModal = () => setQuestionModal(!questionModal)

  const moreQuestions = () =>{
    handleQuestionCount();
    if(!height) {
      setHeight(true);
    }
  }

  const addQuestion = async (values) => {
    try {
      let body = JSON.stringify({ product_id: parseInt(productId), ...values });

      await fetch(`${process.env.API_URI}/qa/questions`,{
        method: 'POST',
        body: body,
        headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY }
      })
    } catch (err) {
      console.log('POST QUESTION', err);
    }
  }

  return (
    <>
      <div>
        <Accordion questions={questions} height={height}/>
        {
          questions.length > 0 &&
          <MainBtn onClick={moreQuestions}>Show More Questions</MainBtn>
        }
        <MainBtn onClick={handleQuestionModal}>Add A Question</MainBtn>
      </div>
      <QuestionModal
        handleQuestionModal={handleQuestionModal}
        questionModal={questionModal}
        item={currentItem}
        addQuestion={addQuestion}
      />
    </>
  )
}

export default QuestionList;