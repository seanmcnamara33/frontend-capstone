/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import Search from './search/Search';
import QuestionsList from './questions/QuestionList';
import 'whatwg-fetch';
import { Main, Title } from './Styles';
import { ProductContext } from '../context/Product.jsx';

const QuestionsAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [questionCount, setQuestionCount] = useState(100);
  const { productId } = useContext(ProductContext);

  useEffect(()=>{
    const loadQuestions = async product_id =>{
      try {
        let data = await fetch(`${process.env.API_URI}/qa/questions?product_id=${product_id}&page=1&count=${questionCount}`, {
          method: 'GET',
          headers: { Authorization: process.env.API_KEY }
        });
        let res = await data.json();
        if(res) {
          setQuestions(res.results);
        }
      } catch (error) {
        console.log('LOAD', error);
      }
    }
    if (productId) {
      loadQuestions(productId);
    }
  }, [productId, questionCount])

  const handleQuestionCount = () => {
    setQuestionCount(questionCount + 2);
  }

  const filterQuestions = (input = 0) => {
    if (input.length > 2 ) {
      setFiltered(questions.filter(item=>item.question_body.includes(input)))
    } else {
      setFiltered([]);
    }
  }

  // console.log(filtered, questions)
  return (
    <Main id="questions-answers">
      <Title>Questions & Answers</Title>
      <Search filterQuestions={filterQuestions} />
      {
        filtered.length > 0 ?
        <QuestionsList
          productId={productId}
          questions={filtered}
          handleQuestionCount={handleQuestionCount}
        /> :
        <QuestionsList
          productId={productId}
          questions={questions}
          handleQuestionCount={handleQuestionCount}
        />
      }
    </Main>
  )
}

export default QuestionsAnswers;