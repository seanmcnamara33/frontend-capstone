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
  const {productId} = useContext(ProductContext);


  const loadQuestions = async product_id =>{
    console.log('reload product id', product_id)
    try {
      let data = await fetch(`${process.env.API_URI}/qa/questions?product_id=${product_id}&page=1&count=${questionCount}`, {
        method: 'GET',
        headers: { Authorization: process.env.API_KEY }
      });
      let res = await data.json();
      console.log(res)
      if(res) {
        setQuestions(res.results);
      }
    } catch (error) {
      console.log('LOAD', error);
    }
  }

  useEffect(()=>{
    if (productId) {
      loadQuestions(productId);
    }
  }, [productId, questionCount])

  const handleQuestionCount = () => {
    setQuestionCount(questionCount + 2);
  }

  const filterQuestions = input => {
    if (input.length > 2 ) {
      setFiltered(questions.filter(item=>item.question_body.includes(input)))
    } else {
      setFiltered([])
    }
  }

  return (
    <Main>
      <Title>Questions & Answers</Title>
      <Search filterQuestions={filterQuestions} />
      <QuestionsList
        productId={productId}
        questions={filtered.length > 0 ? filtered : questions}
        handleQuestionCount={handleQuestionCount}
      />
    </Main>
  )
}

export default QuestionsAnswers;