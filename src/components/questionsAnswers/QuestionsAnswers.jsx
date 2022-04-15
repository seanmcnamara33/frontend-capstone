/* eslint-disable */
import React, { useState, useEffect, useContext, useRef } from 'react';
import Search from './search/Search';
import QuestionsList from './questions/QuestionList';
import 'whatwg-fetch';
import { Main, Title } from './Styles';
import { ProductContext } from '../context/Product.jsx';

const QuestionsAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [questionCount, setQuestionCount] = useState(4);
  const { productId } = useContext(ProductContext);
  const cache = useRef({});

  useEffect(()=>{
    const loadQuestions = async product_id =>{
      try {
        let data = await fetch(`${process.env.API_URI}/qa/questions?product_id=${product_id}&page=1&count=1000`, {
          method: 'GET',
          headers: { Authorization: process.env.API_KEY }
        });
        let res = await data.json();
        if(res) {
          if (!cache.current[product_id]) {
            cache.current[product_id] = res.results;
            let arr = cache.current[product_id];
            setQuestions(arr.slice(0, 4));
            setQuestionCount(4);
          }
        }
      } catch (error) {
        console.log('LOAD', error);
      }
    }
    if (productId) {
      if (cache.current[productId]) {
        let arr = cache.current[productId].slice(0, questionCount)
        setQuestions(arr);
      } else {
        loadQuestions(productId);
      }
    }
  }, [productId])

  const handleQuestionCount = () => {
    setQuestionCount(questionCount + 2);
  }

  useEffect(()=>{
    if (cache.current[productId] && questions.length !== questionCount) {
      let arr = cache.current[productId].slice(0, questionCount);
      setQuestions(arr);
    }
  }, [questionCount])

  const filterQuestions = (input = 0) => {
    if (input.length > 2 ) {
      setFiltered(questions.filter(item=>item.question_body.includes(input)))
    } else {
      setFiltered([]);
    }
  }

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