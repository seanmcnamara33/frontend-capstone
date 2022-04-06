/* eslint-disable */
import React, {useState, useEffect} from 'react';
import AnswersList from './AnswersList'
import { Question, List, Modal, Content, Header } from './QuestionsStyles';
import AddQuestion from './AddQuestion';

const QuestionList = ({questions}) => {
  const [display, setDisplay] = useState(false);
  const [height, setHeight] = useState(false);

  return (
    <>
      <div>
        <List height={height ? '50vh' : '90%'}>
          {questions && [...questions.slice(0, height?questions.length:2)].map(question=>(
            <div key={question.question_id}>
              <Question>
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
          <button onClick={()=>setHeight(!height)}>Show More Questions</button>
        }
        <button onClick={()=>setDisplay(!display)}>Add A Question</button>
      </div>
      <Modal display={display ? 'block' : 'none'}>
        <Content>
          <Header>
            <h1>Add A Question</h1>
          </Header>
          <AddQuestion />
        </Content>
      </Modal>
    </>
  )
}

export default QuestionList;