/* eslint-disable */
import React, {useState, useEffect, useContext} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io';
import AnswersList from '../answers/AnswersList'
import { Question, List, FlexHeader } from './Styles';
import { Modal, Content, Header } from '../../AppStyles'
import AddQuestion from './AddQuestion';
import AddAnswer from '../answers/AddAnswer';
import {ProductContext} from '../../context/Product';


const AnswerModal = ({handleAnswerModal, answerModal, name}) => (
  <Modal onClose={handleAnswerModal} show={answerModal}>
    <Content>
      <Header>
        <FlexHeader>
          <h2>Add A Answer</h2>
          <button onClick={handleAnswerModal}><AiOutlineClose/></button>
        </FlexHeader>
        <h3>About the {name}</h3>
      </Header>
      <AddAnswer />
    </Content>
  </Modal>
)

const Accordion = ({questions, height}) => {
  const {currentItem, productId} = useContext(ProductContext);
  const [answerModal, setAnswerModal] = useState(false);

  const handleAnswerModal = () => setAnswerModal(!answerModal)

  return (
    <>
      <List height={height ? '50vh' : '90%'}>
        {questions.map(question=>(
          <AccordionItem key={question.question_id} question={question} handleAnswerModal={handleAnswerModal}/>
        ))}
      </List>
      <AnswerModal
        answerModal={answerModal}
        handleAnswerModal={handleAnswerModal}
      />
    </>
  )
}

const AccordionItem = ({question, handleAnswerModal}) => {
  const {checkSession} = useContext(ProductContext);

  const [isActive, setIsActive] = useState(false);
  const [disableYes, setDisableYes] = useState(true);

  const sortAnswers = answers =>
  Object.entries(answers).sort((a,b)=>b[1].helpfulness-a[1].helpfulness);

  const upVoteQuestion = () =>{
    console.log(checkSession(sessionStorage.getItem('session')))
    // PUT /qa/questions/:question_id/helpful
    setDisableYes(false)
  }

  const upVoteAnswer = () => {
    // PUT /qa/answers/:answer_id/helpful
  }

  const reportQuestion = () => {
    // PUT /qa/questions/:question_id/report
  }

  const reportAnswer = () => {
    // PUT /qa/answers/:answer_id/report
  }
  return (
    <div>
      <div >
        <Question>
          <FlexHeader onClick={()=>setIsActive(!isActive)}>
            {isActive ?  <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
            <h3>Q: {question.question_body}</h3>
          </FlexHeader>
          <div>
            Helpful? {disableYes && <a onClick={upVoteQuestion}>Yes</a>}
            <span>({question.question_helpfulness})</span> | <a onClick={handleAnswerModal}>Add Answer</a> | <a>Report</a>
          </div>
        </Question>
      </div>
      {
        isActive &&
          <div>
            <AnswersList
              id={question.question_id}
              answers={sortAnswers(question.answers)}
            />
          </div>
      }
    </div>
  )
}

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
      <Modal onClose={handleQuestionModal} show={questionModal}>
        <Content>
          <Header>
            <FlexHeader>
              <h2>Ask A Question</h2>
              <button onClick={handleQuestionModal}><AiOutlineClose/></button>
            </FlexHeader>
            <h3>About the {currentItem.name}</h3>
          </Header>
          <AddQuestion addQuestion={addQuestion}/>
        </Content>
      </Modal>
    </>
  )
}

export default QuestionList;