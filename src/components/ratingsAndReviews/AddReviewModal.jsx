/* eslint-disable */
import React from 'react';
import './AddReviewModal.css';


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
          <input placeholder='Nickname'></input>
          <input placeholder='Email'></input>
          <input placeholder='Summary'></input>
          <input placeholder='Body'></input>
          <input type='file' accept='image/jpeg, image/png' multiple></input>

              <button type='submit'>Submit</button>
              <button onClick={props.onClose}> Close </button>
          </form>
      </div>
    </>



  )
};

export default AddReviewModal;