/* eslint-disable */
import React from 'react';
import './AddReviewModal.css';
import AddCharacteristics from './AddCharacteristics.jsx';


const AddReviewModal = (props) => {
  if (!props.open) {
    return null;
  }

  return (
    <>
      <div className='modal-styles'>
        <form type='submit'>
          <label>Add New Review!</label>
          <div className='reccomend-style'>
            <p>Do you reccomend this product?</p>
            <input type='radio' name='reccomend' value='yes'></input>
            <label>Yes</label>
            <input type='radio' name='reccomend' value='no'></input>
            <label>No</label>
          </div>
          <AddCharacteristics />
          <input placeholder='Nickname'></input>
          <input placeholder='Email'></input>
          <input placeholder='Example: Best purchase ever!' className='summary-style'></input>
          <input placeholder='Body' className='body-style'></input>
          <input type='file' accept='image/jpeg, image/png' multiple></input>

              <button type='submit'>Submit</button>
              <button onClick={props.onClose}> Close </button>
          </form>
      </div>
    </>



  )
};

export default AddReviewModal;