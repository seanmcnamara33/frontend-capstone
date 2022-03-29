import React, {useState, useEffect, useContext} from 'react';

const App = props => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{
    checkUser()
  }, [props, data]);

  return (
    <>
      <Switch>
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
        <Route to='/home' />
      </Switch>
    </>
  );
}


const pageTwo = props => {

  toggle

  return (
  )
}
export default App;