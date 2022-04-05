/* eslint-disable */
import React, {useState, useEffect} from 'react';
import AnswersList from './AnswersList'
import styled from 'styled-components';

const List = styled.div(props => ({
  border: '2px solid #000',
  height: props.height,
  overflow: 'auto'
}))

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
`
const QuestionList = ({questions}) => {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <List height={display ? '90vh' : '90%'}>
        {questions && [...questions.slice(0, display?questions.length:4)].map(question=>(
          <div key={question.question_id}>
            <Question >
              <h3>Q: {question.question_body}</h3>
              <div>
                Helpful? <a href='#'>Yes</a>
                <span>({question.question_helpfulness})</span> | <a href='#'>Add Answer</a>
              </div>
            </Question>
            <AnswersList id={question.question_id} answers={Object.entries(question.answers).sort((a,b)=>b[1].helpfulness-a[1].helpfulness)} />
          </div>
        ))}
      </List>
      {
        questions.length > 0 &&
        <button onClick={()=>setDisplay(!display)}>Show More Questions</button>
      }
      <button>Add A Question</button>
    </div>
  )
}

export default QuestionList;