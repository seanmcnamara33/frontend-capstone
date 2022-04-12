// /* eslint-disable */
// import React, { useState, useEffect } from 'react';
// import './AddReviewModal.css';
// import AddCharacteristics from './AddCharacteristics.jsx';
// import AddStarRating from './AddStarRating.jsx';
// import 'whatwg-fetch';


// const AddReviewModal = (props) => {
//   if (!props.open) {
//     return null;
//   }

//   const [reviewForm, setReviewForm] = useState({ body: '', photos: [], photosUrl: [] });

//   const handleCharacteristicsChange = (key, value) => {
//     setReviewForm({ ...reviewForm, characteristics: { ...reviewForm.characteristics, [key]: value } })
//   }

//   const handleRatingChange = (key, value) => {
//     setReviewForm({ ...reviewForm, [key]: value })
//   }

//   const handleReviewFormChange = (key, value) => {
//     setReviewForm({ ...reviewForm, [key]: value })
//   }

//   const newCharacteristics = (obj) => {
//     let newobj = {};
//     for (let key in obj) {
//       newobj[key] = +obj[key];
//     }
//     return newobj;
//   }


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch(`${process.env.API_URI}/reviews`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: process.env.API_KEY
//       },
//       body: JSON.stringify(
//         {
//           'product_id': props.id,
//           'rating': +reviewForm.starRatings,
//           'summary': reviewForm.summary,
//           'body': reviewForm.body,
//           'recommend': reviewForm.recommend,
//           'name': reviewForm.name,
//           'email': reviewForm.email,
//           'photos': ['https://unsplash.com/photos/Y3qbZDYpIfE'],
//           'characteristics': newCharacteristics(reviewForm.characteristics)
//         }
//       )
//     }).then((response) => {
//       console.log('success post')

//     }).catch((err) => {
//       console.log('failed post', err);
//     })
//   }

//     const uploadImage = () => {
//       const formData = new FormData()
//       formData.append("file", files[0])
//       formData.append("upload_preset", process.env.CLOUD_PRESET)
//       formData.append("cloud_name", process.env.CLOUD_NAME)

//       fetch(`${process.end.CLOUD_URI}`, {
//         method: 'POST',
//         body: formData
//       }).then((response) => {
//         // handleReviewFormChange('photosURL', [...reviewForm.photosUrl, ])
//         console.log(response)
//       }).catch((err) => {
//         console.log(err)
//       })
//     }


//   useEffect(() => {
//     const lastAddedPhoto = reviewForm.photos[reviewForm.photos.length - 1];
//     if (lastAddedPhoto) {
//       handleReviewFormChange('photosUrl', [...reviewForm.photosUrl, URL.createObjectURL(lastAddedPhoto)]);
//     }
//   }, [reviewForm.photos.length]);


//   return (
//     <>
//       <div className='modal-styles'>
//         <form type='submit' onSubmit={handleSubmit}>
//           <label>Add New Review!</label>

//           <AddStarRating handleRatingChange={handleRatingChange} />

//           <div className='reccomend-style' onChange={(event) => { event.target.value === 'yes' ? handleReviewFormChange('recommend', true) : handleReviewFormChange('recommend', false) }}>
//             <p>Do you reccomend this product?</p>
//             <input type='radio' name='recommend' value='yes'></input>
//             <label>Yes</label>
//             <input type='radio' name='recommend' value='no'></input>
//             <label>No</label>
//           </div>

//           <AddCharacteristics handleCharacteristicsChange={handleCharacteristicsChange} metaData={props.metaData} />

//           <input required placeholder='Nickname' onChange={(event) => { handleReviewFormChange('name', event.target.value) }}></input>
//           <input required type='email' placeholder='Email' onChange={(event) => { handleReviewFormChange('email', event.target.value) }}></input>
//           <input required placeholder='Example: Best purchase ever!' className='summary-style' maxLength='60' value={reviewForm.summary} onChange={(event) => { handleReviewFormChange('summary', event.target.value) }}></input>

//           <div>
//             <input required type='text' minLength='50' maxLength='1000' max placeholder='Body' className='body-style' value={reviewForm.body} onChange={(event) => { handleReviewFormChange('body', event.target.value) }}></input>
//             <label>Character Count: {reviewForm.body.length}</label>
//           </div>

//           {reviewForm.photos.length > 4 ? null : <input type='file' accept='image/jpeg, image/png' onChange={(event) => {
//             handleReviewFormChange('photos', [...reviewForm.photos, event.target.files[0]]);
//           }}></input>}

//           {reviewForm.photosUrl.map((photo) => (<img className='modal-images' src={photo}></img>))}



//           <button type='submit'>Submit</button>
//           <button onClick={props.onClose}> Close </button>
//         </form>
//       </div>
//     </>



//   )
// };

// export default AddReviewModal;

// // var cl = new cloudinary.Cloudinary({cloud_name: "dmxv1avcr", secure: true});
// // cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
// //   { public_id: "olympic_flag" },
// //   function(error, result) {console.log(result); });

// //   https://api.cloudinary.com/v1_1/dmxv1avcr/upload

// // {reviewForm.photos.length > 4 ? null : <input type='file' accept='image/jpeg, image/png' onChange={(event) => {
// //   handleReviewFormChange('photos', [...reviewForm.photos, event.target.files[0]]);
// // }}></input>}