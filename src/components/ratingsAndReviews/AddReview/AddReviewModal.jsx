/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './AddReviewModal.css';
import AddCharacteristics from './AddCharacteristics.jsx';
import AddStarRating from './AddStarRating.jsx';
import 'whatwg-fetch';


const AddReviewModal = (props) => {
  if (!props.open) {
    return null;
  }

  const [reviewForm, setReviewForm] = useState({
    body: '',
    photos: [],
    photosUrl: [],
    cloudinary: []
  });

  const handleCharacteristicsChange = (key, value) => {
    setReviewForm({ ...reviewForm, characteristics: { ...reviewForm.characteristics, [key]: value } })
  }

  const handleRatingChange = (key, value) => {
    setReviewForm({ ...reviewForm, [key]: value })
  }

  const handleReviewFormChange = (key, value) => {
    setReviewForm({ ...reviewForm, [key]: value })
  }

  const newCharacteristics = (obj) => {
    let newobj = {};
    for (let key in obj) {
      newobj[key] = +obj[key];
    }
    return newobj;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.API_URI}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.API_KEY
      },
      body: JSON.stringify(
        {
          'product_id': props.id,
          'rating': +reviewForm.starRatings,
          'summary': reviewForm.summary,
          'body': reviewForm.body,
          'recommend': reviewForm.recommend,
          'name': reviewForm.name,
          'email': reviewForm.email,
          'photos': reviewForm.cloudinary,
          'characteristics': newCharacteristics(reviewForm.characteristics)
        }
      )
    }).then((response) => {
      console.log('success post')

    }).catch((err) => {
      console.log('failed post', err);
    })
  }

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", process.env.UPLOAD_PRESET);
    formData.append("cloud_name", process.env.CLOUD_NAME);

    fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then((data) => {
        handleReviewFormChange('cloudinary', [...reviewForm.cloudinary, data.url])
      })
      .catch((err) => {
        console.log(err)
      })
  };


  useEffect(() => {
    const lastAddedPhoto = reviewForm.photos[reviewForm.photos.length - 1];
    if (lastAddedPhoto) {
      handleReviewFormChange('photosUrl', [...reviewForm.photosUrl, URL.createObjectURL(lastAddedPhoto)]);
    }
  }, [reviewForm.photos.length]);


  return (
    <>
      <div className='modal-styles'>
        <label className='modal-header'>Add New Review!
          <form type='submit' className='modal-content' onSubmit={handleSubmit}>


            <AddStarRating handleRatingChange={handleRatingChange} />

            <div className='reccomend-style' onChange={(event) => { event.target.value === 'yes' ? handleReviewFormChange('recommend', true) : handleReviewFormChange('recommend', false) }}>
              <div>Do you reccomend this product?</div>
              <input type='radio' name='recommend' value='yes'></input>
              <label>Yes</label>
              <input type='radio' name='recommend' value='no'></input>
              <label>No</label>
            </div>
            <div>
              <AddCharacteristics handleCharacteristicsChange={handleCharacteristicsChange} metaData={props.metaData} />
            </div>

            <input required placeholder='Nickname' onChange={(event) => { handleReviewFormChange('name', event.target.value) }}></input>
            <input required type='email' placeholder='Email' onChange={(event) => { handleReviewFormChange('email', event.target.value) }}></input>
            <input required placeholder='Example: Best purchase ever!' className='summary-style' maxLength='60' value={reviewForm.summary} onChange={(event) => { handleReviewFormChange('summary', event.target.value) }}></input>

            <div>
              <textarea required type='text' minLength='50' maxLength='1000' max placeholder='Body' className='body-style' value={reviewForm.body} onChange={(event) => { handleReviewFormChange('body', event.target.value) }}></textarea><br></br>
              <label>Character Count: {reviewForm.body.length}</label>
            </div>


            {reviewForm.photos.length > 4 ? null : <input type='file' accept='image/jpeg, image/png' onChange={(event) => {
              uploadImage(event.target.files[0]);
            }}></input>}

            <div className='photo-form'>
              {reviewForm.cloudinary.map((photo) => (<img className='modal-images' src={photo}></img>))}
            </div>
            <div className='buttons'>
              <button className='add-btn' type='submit'>Submit</button>
              <button className='add-btn' onClick={props.onClose}> Close </button>
            </div>
          </form>
        </label>
      </div>
    </>
  )
};

export default AddReviewModal;