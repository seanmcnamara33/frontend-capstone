/* eslint-disable */
import React, {useState, useEffect} from 'react';
// element of page that was clicked
// time of Click
// module clicked

const CountClick = ({children}) => {
  const [clicks, setClicks] = useState([]);
  // {count: 0, time: '', module}
  const handleClick = e => {
    // children.map(child=>console.log(child.type.name))
    console.log(window)
    if(e.target) {
      setClicks([
        ...clicks,
        {element: e.target, time: Date.now(), module: '' }
      ]);
    }
  }

  useEffect(()=>{
    window.addEventListener('click', handleClick);
    return ()=> window.removeEventListener('click', handleClick)
  },[clicks])


  return (
    <>
      {children}
    </>
  )
}

export default CountClick;