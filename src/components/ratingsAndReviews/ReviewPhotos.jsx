/* eslint-disable */
import React from 'react';
import './ReviewPhotos.css';

const ReviewPhotos = (props) => {
  return (
    props.data.map((photo) => {
      return(
<<<<<<< HEAD
        <div  key={photo}>
          <img className='photos' src={photo.url}></img>
=======
        <div key={photo}>
          <img src={photo.url}></img>
>>>>>>> 171b992fb2c8c0e2268a6b9b420f1db7802b2abb
        </div>
      )
    })
  )
}

export default ReviewPhotos;