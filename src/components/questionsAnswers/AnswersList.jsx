/* eslint-disable */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;

const Answer = ({id, answer}) => {
  console.log(answer);
  return(
    <li key={id}>
      <h4>A: {answer.body}</h4>
      <div>
        by {answer.answerer_name}, {answer.date} | Helpful? <a href="#">Yes</a> ({answer.helpfulness}) | <a href="#">{answer.reported}</a>
      </div>
    </li>
  )
}

const AnswersList = ({id, answers}) => {
  const [display, setDisplay] = useState(false);
  const [arr, setArr] = useState([]);

  // const loadAnswers = async() => {
  //   try {
  //     let body = await fetch(`${process.env.API_URI}/qa/questions/${id}/answers`, {
  //       headers: { Authorization: process.env.API_KEY }
  //     });
  //     let result = await body.json();
  //     setArr(result.results);
  //   } catch (e) {
  //     console.log('ANSWRE', e)
  //   }
  // }

  // useEffect(()=>{
  //   loadAnswers();
  // }, [])
  console.log(answers, arr);
  return (
    <>
      {answers.length &&
      <>
        <List>
          {[...answers.slice(0, display?4:2)].map(([id, answer])=>(
            <Answer key={id} id={id} answer={answer} />
            ))}
        </List>
        <button onClick={()=>setDisplay(!display)}>Show More</button>
      </>
      }
    </>
  )
}

export default AnswersList;