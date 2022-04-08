/* eslint-disable */
import React from 'react';
import './ReviewPhotos.css';

const ReviewPhotos = (props) => {
  return (
    props.data.map((photo) => {
      return(
        <div  key={photo}>
          <img className='photos' src={photo.url}></img>
        </div>
      )
    })
  )
}

export default ReviewPhotos;