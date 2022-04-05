/* eslint-disable */
import React from 'react';
import Overview from './productOverview/Overview.jsx';
import QuestionsAnswers from './questionsAnswers/QuestionsAnswers.jsx';


const App = () => {
  // ! things we need to make overall state

  // load the data
  // pass the whole product to overview
  // then pass only ids to the rest of the componentes

  return (
    <>
      {/* <div>Some</div> */}
      <Overview />
      <QuestionsAnswers />
    </>
  )
}

export default App;
