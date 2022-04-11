/* eslint-disable */
import React, { useState } from 'react';
import './ReviewPhotos.css';

const ReviewPhotos = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }


  return (
    props.data.map((photo) => {
      return (
        <div key={photo} className={isOpen ? 'modal' : null}>
          <img className={isOpen ? 'large-photo' :'small-photo'} src={photo.url} onClick={handleClick}></img>
        </div>
      )
    })
  )
}

export default ReviewPhotos;