/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../context/Product';
import 'whatwg-fetch';

import AnswersList from '../answers/AnswersList';

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Question, FlexHeader, Item, TitleWrap } from './Styles';
import { StyledLink } from '../Styles';

const AccordionItem = ({ question, handleAnswerModal, filterReported }) => {
  const {checkSession, productId} = useContext(ProductContext);
  const [isActive, setIsActive] = useState(false);
  const [disableYes, setDisableYes] = useState(true);
  const [helpful, setHelpful] = useState(question.question_helpfulness)

  const sortAnswers = answers =>
  Object.entries(answers).sort((a,b)=>b[1].helpfulness-a[1].helpfulness);

  const upVoteQuestion = async () =>{
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
    <Item>
      <div>
        <Question>
          <FlexHeader onClick={()=>setIsActive(!isActive)}>
            {isActive ?  <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
            <TitleWrap>Q: {question.question_body}</TitleWrap>
          </FlexHeader>
          <div>
            Helpful? {disableYes && <StyledLink onClick={upVoteQuestion}>Yes</StyledLink>} {' '}
            <span>({helpful})</span> | {' '}
            <StyledLink onClick={()=>handleAnswerModal(question.question_id)}>Add Answer</StyledLink> | {' '}
            <StyledLink onClick={reportQuestion}>Report</StyledLink>
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
    </Item>
  )
}

export default AccordionItem;