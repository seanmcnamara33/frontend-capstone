/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import QuestionsList from './QuestionList';
import 'whatwg-fetch';
import { Main } from './QuestionsStyles';

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
    <Main>
      <Search />
      <QuestionsList questions={questions}/>
    </Main>
  )
}

export default QuestionsAnswers;