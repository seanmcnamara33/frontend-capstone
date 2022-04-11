/* eslint-disable */
import React, {useState, useEffect} from 'react';
import { AnswerList } from './Styles';
import {AiOutlineClose} from 'react-icons/ai';
import Answer from './Answer';


const AnswersList = ({id, answers}) => {
  const [display, setDisplay] = useState(false);
  const [arr, setArr] = useState([]);

  return (
    <>
      { answers.length > 0 &&
      <div>
        <AnswerList>
          {[...answers.slice(0, display?4:2)].map(([id, answer])=>(
            <Answer key={id} id={id} answer={answer} />
            ))}
          {answers.length > 2 &&
            <li><button onClick={()=>setDisplay(!display)}>Show More Answers</button></li>
          }
        </AnswerList>
      </div>
      }
    </>
  )
}

export default AnswersList;