/* eslint-disable */
import React, {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../../context/Product';
import 'whatwg-fetch';

import AnswersList from '../answers/AnswersList';

import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io';
import {Question, FlexHeader} from './Styles';

const AccordionItem = ({question, handleAnswerModal, filterReported}) => {
  const {checkSession, productId} = useContext(ProductContext);
  const [isActive, setIsActive] = useState(false);
  const [disableYes, setDisableYes] = useState(true);
  const [helpful, setHelpful] = useState(question.question_helpfulness)

  const sortAnswers = answers =>
  Object.entries(answers).sort((a,b)=>b[1].helpfulness-a[1].helpfulness);

  const upVoteQuestion = async () =>{
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
            <span>({helpful})</span> | <a onClick={()=>handleAnswerModal(question.question_id)}>Add Answer</a> | <a onClick={reportQuestion}>Report</a>
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

export default AccordionItem;