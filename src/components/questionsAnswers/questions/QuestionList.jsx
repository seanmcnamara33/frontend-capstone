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
          <h2>Add An Answer</h2>
          <button onClick={handleAnswerModal}><AiOutlineClose/></button>
        </FlexHeader>
        <h3>About the {name}</h3>
      </Header>
      <AddAnswer />
    </Content>
  </Modal>
)

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

const Accordion = ({questions, height}) => {
  const {currentItem, productId} = useContext(ProductContext);
  const [answerModal, setAnswerModal] = useState(false);
  const [filterableQuestions, setFilterableQuestions] = useState([]);

  useEffect(()=>{
    if (filterableQuestions.length === 0 && questions) {
      setFilterableQuestions(questions);
    }
  },[questions, filterableQuestions])

  const handleAnswerModal = () => setAnswerModal(!answerModal)
  const filterReported = id => {
    let filtered = filterableQuestions.filter(q=>q.question_id!==id);
    setFilterableQuestions(filtered);
  }

  return (
    <>
      <List height={height ? '50vh' : '90%'}>
        {filterableQuestions.length &&
          filterableQuestions.map(question=>(
            <AccordionItem
              key={question.question_id}
              question={question}
              handleAnswerModal={handleAnswerModal}
              filterReported={filterReported}
            />
        ))}
      </List>
      <AnswerModal
        answerModal={answerModal}
        handleAnswerModal={handleAnswerModal}
        name={currentItem.name}
      />
    </>
  )
}

const AccordionItem = ({question, handleAnswerModal, filterReported, setQuestionId}) => {
  const {checkSession, productId, handleQuestionId} = useContext(ProductContext);
  const [isActive, setIsActive] = useState(false);
  const [disableYes, setDisableYes] = useState(true);
  const [helpful, setHelpful] = useState(question.question_helpfulness)

  const sortAnswers = answers =>
  Object.entries(answers).sort((a,b)=>b[1].helpfulness-a[1].helpfulness);

  const upVoteQuestion = async () =>{
    console.log(checkSession(sessionStorage.getItem('session')))
    // PUT /qa/questions/:question_id/helpful
    try {
      await fetch(`${process.env.API_URI}/qa/questions/${question.question_id}/helpful`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY }
      })
      setHelpful(helpful + 1);
    } catch (err) {
      console.log('UPVOTE QUESTION', err);
    }
    setDisableYes(false)
  }

  const reportQuestion = async() => {
    // PUT /qa/questions/:question_id/report
    try {
      await fetch(`${process.env.API_URI}/qa/questions/${question.question_id}/report`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY }
      });
      filterReported(question.question_id);
    } catch (err) {
      console.log('REPORT QUESTION', err);
    }
  }

  useEffect(()=>{
    handleQuestionId(question.question_id);
  }, [question])

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
            <span>({helpful})</span> | <a onClick={handleAnswerModal}>Add Answer</a> | <a onClick={reportQuestion}>Report</a>
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