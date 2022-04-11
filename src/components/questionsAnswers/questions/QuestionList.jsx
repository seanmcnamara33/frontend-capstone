/* eslint-disable */
import React, {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../../context/Product';

import AnswersList from '../answers/AnswersList'
import QuestionModal from './QuestionModal';
import Accordion from './Accordion';

const QuestionList = ({questions, handleQuestionCount}) => {
  const {currentItem, productId, checkSession} = useContext(ProductContext);
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
          <button onClick={moreQuestions}>Show More Questions</button>
        }
        <button onClick={handleQuestionModal}>Add A Question</button>
      </div>
      <QuestionModal
        handleQuestionModal={handleQuestionModal}
        questionModal={questionModal}
        name={currentItem.name}
        addQuestion={addQuestion}
      />
    </>
  )
}

export default QuestionList;