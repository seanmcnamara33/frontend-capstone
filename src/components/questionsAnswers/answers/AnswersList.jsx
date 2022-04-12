/* eslint-disable */
import React, {useState, useEffect} from 'react';
import { AnswerList } from './Styles';
import {AiOutlineClose} from 'react-icons/ai';
import Answer from './Answer.jsx';
import {MainBtn} from '../../AppStyles';

const AnswersList = ({id, answers}) => {
  const [display, setDisplay] = useState(false);
  const [filterAnswers, setFilterAnswers] = useState([]);

  useEffect(()=>{
    if (filterAnswers.length === 0 && answers) {
      setFilterAnswers(answers);
    }
  }, [answers, filterAnswers]);

  const filterReported = answer_id => {
    let filtered = filterAnswers.filter(([id])=>parseInt(id)!==answer_id);
    setFilterAnswers(filtered);
  }

  return (
    <>
      { filterAnswers.length > 0 &&
      <div>
        <AnswerList>
          {[...filterAnswers.slice(0, display?4:2)].map(([id, answer])=>(
            <Answer
              key={id}
              id={id}
              answer={answer}
              filterReported={filterReported}
            />
            ))}
          {filterAnswers.length > 2 &&
            <li>
              <MainBtn
                onClick={()=>setDisplay(!display)}
              >Show More Answers</MainBtn>
            </li>
          }
        </AnswerList>
      </div>
      }
    </>
  )
}

export default AnswersList;