/* eslint-disable */
import React, { useState } from 'react';
import './AddReviewModal.css';
import AddCharacteristics from './AddCharacteristics.jsx';


const AddReviewModal = (props) => {
  if (!props.open) {
    return null;
  }

  const [bodyCount, setBodyCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState(null);
  const [reccomend, setReccomend] = useState(null);
  const [photos, setPhotos] = useState(['']);
  const [characteristics, setCharacteristics] = useState({});


  const handleBodyChange = (event) => {
    setBodyCount(event.target.value.length);
    setBody(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  }

  const handleRatingChange = (event) => {
    //code
  }

  const handleReccomendChange = (event) => {
    event.target.value === 'yes' ? setReccomend(true) : setReccomend(false)
  }

  const handleCharacteristicsChange = (event) => {
    //code
  }

  const onSubmit = () => {
    //handlesubmit
  }


  return (
    <>
      <div className='modal-styles'>
        <form type='submit'>
          <label>Add New Review!</label>
          <div className='reccomend-style' onChange={handleReccomendChange}>
            <p>Do you reccomend this product?</p>
            <input type='radio' name='reccomend' value='yes'></input>
            <label>Yes</label>
            <input type='radio' name='reccomend' value='no'></input>
            <label>No</label>
          </div>

          <AddCharacteristics onSubmit={onSubmit}/>

          <input placeholder='Nickname'></input>
          <input placeholder='Email'></input>
          <input placeholder='Example: Best purchase ever!' className='summary-style'></input>

          <div>
            <input type='text' minLength='50' maxLength='1000' max placeholder='Body' className='body-style' onChange={handleBodyChange}></input>
            <label>Character Count: {bodyCount}</label>
          </div>

          <input type='file' accept='image/jpeg, image/png' multiple></input>
          <button type='submit'>Submit</button>
          <button onClick={props.onClose}> Close </button>
        </form>
      </div>
    </>



  )
};

export default AddReviewModal;