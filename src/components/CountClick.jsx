/* eslint-disable */
import React, {useState, useEffect} from 'react';
// element of page that was clicked
// time of Click
// module clicked

const CountClick = ({children}) => {
  const [clicks, setClicks] = useState({});

  const sendClick = async (obj) => {
    try {
      const res = await fetch(`${process.env.API_URI}/interactions`, {
        method: 'POST',
        body: obj,
        headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY }
      })
      const result = await res.text();
      console.log(result);
    } catch (err) {
      console.log('CLICK ERR', err);
    }
  }


  const handleClick = e => {
    e.path.forEach(( ele, i, arr )=>{
      if (ele.id === 'root' && arr[i-1]?.id) {
        let body = JSON.stringify({
          element: e.target.localName, time: new Date().toISOString(), widget: arr[i-1].id
        })
        console.log(body);
        sendClick(body);
      }
    })
  }

  useEffect(()=>{
    window.addEventListener('click', handleClick);
    return ()=> window.removeEventListener('click', handleClick)
  },[]);

  return (
    <>
      {children}
    </>
  )
}

export default CountClick;