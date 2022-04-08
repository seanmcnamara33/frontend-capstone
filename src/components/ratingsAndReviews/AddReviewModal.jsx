/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './AddReviewModal.css';
import AddCharacteristics from './AddCharacteristics.jsx';
import AddStarRating from './AddStarRating.jsx';


const AddReviewModal = (props) => {
  if (!props.open) {
    return null;
  }

  const [reviewForm, setReviewForm] = useState({ body: '', photos: [], photosUrl: [] });

  const handleCharacteristicsChange = (key, value) => {
    setReviewForm({ ...reviewForm, characteristics: { ...reviewForm.characteristics, [key]: value } })
  }

  const handleRatingChange = (key, value) => {
    setReviewForm({...reviewForm, [key]: value})
  }

  const handleReviewFormChange = (key, value) => {
    setReviewForm({ ...reviewForm, [key]: value })
  }

  const onSubmit = () => {
    //handlesubmit
  }

  useEffect(() => {
    const lastAddedPhoto = reviewForm.photos[reviewForm.photos.length - 1];
    if (lastAddedPhoto) {
      handleReviewFormChange('photosUrl', [...reviewForm.photosUrl, URL.createObjectURL(lastAddedPhoto)]);
    }
  }, [reviewForm.photos.length]);

  console.log(reviewForm)

  return (
    <>
      <div className='modal-styles'>
        <form type='submit'>
          <label>Add New Review!</label>

          <AddStarRating handleRatingChange={handleRatingChange}/>

          <div className='reccomend-style' onChange={(event) => { event.target.value === 'yes' ? handleReviewFormChange('recommend', true) : handleReviewFormChange('recommend', false) }}>
            <p>Do you reccomend this product?</p>
            <input type='radio' name='reccomend' value='yes'></input>
            <label>Yes</label>
            <input type='radio' name='reccomend' value='no'></input>
            <label>No</label>
          </div>

          <AddCharacteristics onSubmit={onSubmit} handleCharacteristicsChange={handleCharacteristicsChange} />

          <input placeholder='Nickname' onChange={(event) => { handleReviewFormChange('name', event.target.value) }}></input>
          <input placeholder='Email' onChange={(event) => { handleReviewFormChange('email', event.target.value) }}></input>
          <input placeholder='Example: Best purchase ever!' className='summary-style' maxLength='60' onChange={(event) => { handleReviewFormChange('summary', event.target.value) }}></input>

          <div>
            <input type='text' minLength='50' maxLength='1000' max placeholder='Body' className='body-style' onChange={(event) => { handleReviewFormChange('body', event.target.value) }}></input>
            <label>Character Count: {reviewForm.body.length}</label>
          </div>
          {reviewForm.photos.length > 4 ? null : <input type='file' accept='image/jpeg, image/png' onChange={(event) => {
            handleReviewFormChange('photos', [...reviewForm.photos, event.target.files[0]]);
          }}></input>}
          {reviewForm.photosUrl.map((photo) => (<img src={photo}></img>))}


          <button type='submit'>Submit</button>
          <button onClick={props.onClose}> Close </button>
        </form>
      </div>
    </>



  )
};

export default AddReviewModal;