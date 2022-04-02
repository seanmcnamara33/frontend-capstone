/* eslint-disable */
import React, {useState, useEffect} from 'react';
import AnswersList from './AnswersList.jsx'
import styled from 'styled-components';

const List = styled.div`
  border: 2px solid #000;
`;
const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
`
const QuestionList = ({questions}) => {

  return (
    <div>
      {questions && questions.map(question=>(
        <List key={question.question_id}>
          <Question>
            <h3>Q: {question.question_body}</h3>
            <div>
              Helpful? <a href='#'>Yes</a>
              <span>({question.question_helpfulness})</span> | <a href='#'>Add Answer</a>
            </div>
          </Question>
          <>
            <AnswersList id={question.question_id} answers={Object.entries(question.answers)} />
          </>
        </List>
      ))}
    </div>
  )
}

export default QuestionList;