/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import AnswersList from '../answers/AnswersList'
import { Question, List, FlexHeader } from './Styles';
import { Modal, Content, Header } from '../../AppStyles'
import AddQuestion from './AddQuestion';

const QuestionList = ({questions, productId, handleQuestionCount}) => {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleModal = () => setShow(!show)

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
        <List height={height ? '50vh' : '90%'}>
          {questions && questions.map(question => (
            <div key={question.question_id}>
              <Question onClick={()=>setShowAnswer(!showAnswer)}>
                <h3>Q: {question.question_body}</h3>
                <div>
                  Helpful? <a href='#'>Yes</a>
                  <span>({question.question_helpfulness})</span> | <a href='#'>Add Answer</a>
                </div>
              </Question>
              <AnswersList
                id={question.question_id}
                answers={Object.entries(question.answers).sort((a,b)=>b[1].helpfulness-a[1].helpfulness)}
              />
            </div>
          ))}
        </List>
        {
          questions.length > 0 &&
          <button onClick={moreQuestions}>Show More Questions</button>
        }
        <button onClick={handleModal} >Add A Question</button>
      </div>
      <Modal onClose={handleModal} show={show}>
        <Content>
          <Header>
            <FlexHeader>
              <h2>Ask A Question</h2>
              <button onClick={handleModal}><AiOutlineClose/></button>
            </FlexHeader>
            <h3>About the {'product name'}</h3>
          </Header>
          <AddQuestion addQuestion={addQuestion}/>
        </Content>
      </Modal>
    </>
  )
}

export default QuestionList;