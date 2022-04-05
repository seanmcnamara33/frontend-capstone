/* eslint-disable */
import React from 'react';

const QuestionList = ({questions}) => {

  return (
    <div>
      {questions && questions.map(question=>(
        <div key={question.question_id}>
          <div>{question.asker_name}</div>
          <div>{question.question_body}</div>
          <div>{question.question_date}</div>
          <div>{question.helpfulness}</div>
          <div>{question.question_id}</div>
          <div>{question.reported ? 'yes':'no'}</div>
        </div>
      ))}
    </div>
  )
}

export default QuestionList;