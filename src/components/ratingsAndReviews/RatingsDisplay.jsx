/* eslint-disable */
import React, { useState, useEffect } from 'react';

const RatingsDisplay = (props) => {

  const [ratingsData, setRatingsData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URI}/reviews/meta/?product_id=65631`, {
      method: 'GET',
      headers: { Authorization: process.env.API_KEY }
    })
      .then((response) => {
        response.json().then((results) => {
          // console.log('success', results)
          setRatingsData(results);
        });
      })
      .catch((err) => {
        console.log('failed load Ratings GET');
      });
  }, [])


  let arr = [];
  Object.keys(ratingsData).forEach((key) => {
    arr.push({key : ratingsData[key]})
  })

  console.log('here',arr)


  return (
    <React.Fragment>
      {

      }
    </React.Fragment>
  );
};

export default RatingsDisplay;


//   Object.entries(ratingsData).map(([key, value]) => (
//     <div key={key}>
//     {key} {JSON.stringify(value)}
//     </div>
//   )
//  )