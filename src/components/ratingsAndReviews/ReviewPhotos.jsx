/* eslint-disable */
import React from 'react';

const ReviewPhotos = (props) => {
  return (
    props.data.map((photo) => {
      return(
        <div key={photo}>
          <img src={photo.url}></img>
        </div>
      )
    })
  )
}

export default ReviewPhotos;