/* eslint-disable */
import React, {useState, useEffect} from 'react';
import { AnswerList } from './Styles';
import { formatDate } from '../../common/helpers';

const Answer = ({id, answer}) => {
  return(
    <li key={id}>
      <h4>A: {answer.body}</h4>
      <div>
        by {answer.answerer_name}, {formatDate(answer.date)} | Helpful? <a href="#">Yes</a> ({answer.helpfulness}) | <a href="#">{answer.reported}</a>
      </div>
    </li>
  )
}

const AnswersList = ({id, answers}) => {
  const [display, setDisplay] = useState(false);
  const [arr, setArr] = useState([]);

  return (
    <>
      { answers.length > 0 &&
      <>
        <AnswerList>
          {[...answers.slice(0, display?4:2)].map(([id, answer])=>(
            <Answer key={id} id={id} answer={answer} />
            ))}
        </AnswerList>
        {answers.length > 2 &&
          <a onClick={()=>setDisplay(!display)}>Show More</a>
        }
      </>
      }
    </>
  )
}

export default AnswersList;