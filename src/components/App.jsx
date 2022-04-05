/* eslint-disable */
import React from 'react';
import Overview from './productOverview/Overview.jsx';
import QuestionsAnswers from './questionsAnswers/QuestionsAnswers.jsx';
import styled from 'styled-components';
import 'whatwg-fetch';

const NavBar = styled.div`
  width: 100%;
  height: 3em;
  background: rgb(222, 99, 23);
  color: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const App = () => {
  // ! things we need to make overall state

  // load the data
  // pass the whole product to overview
  // then pass only ids to the rest of the componentes

  return (
    <>
      <NavBar>Kids Next Door</NavBar>
      <Overview />
      <QuestionsAnswers />
    </>
  )
}

export default App;
