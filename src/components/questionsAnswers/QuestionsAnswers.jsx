import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import QuestionsList from './QuestionList.jsx';
/* eslint-disable */
const QuestionsAnswers = () => {
  const [questions, setQuestions] = useState([]);

  const loadQuestions = async () =>{
    try {
      let data = await fetch(`${process.env.API_URI}/qa/questions?product_id=65631`, {
        method: 'GET',
        headers: { Authorization: process.env.API_KEY }
      });
      let res = await data.json();
      if(res) {
        setQuestions(res.results);
      }
    } catch (error) {
      console.log('LOAD', error)
    }
  }

  useEffect(()=>{
    loadQuestions();
  }, [])

  return (
    <div>
      <Search />
      <QuestionsList questions={questions}/>
    </div>
  )
}

export default QuestionsAnswers;