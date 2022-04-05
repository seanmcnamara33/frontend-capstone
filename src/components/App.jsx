import React from 'react';
import Overview from './productOverview/Overview.jsx';
import RelatedList from './relatedProducts/RelatedList.jsx';
// eslint-disable-next-line react/function-component-definition
const App = () => (
  <>
    {/* <h1 className="title">Kids Next Door NExt</h1> */}
    <Overview />
    <RelatedList />
  </>

);

export default App;
