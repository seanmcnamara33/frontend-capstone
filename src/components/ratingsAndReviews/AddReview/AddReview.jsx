/* eslint-disable */
import React, { useState } from 'react';
import AddReviewModal from './AddReviewModal.jsx'
import './AddReviewModal.css';

const AddReview = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className='add-btn' onClick={() => setIsOpen(true)}> Add A Review</button>

      <AddReviewModal id={props.id} metaData={props.metaData} open={isOpen} onClose={() => setIsOpen(false)} />

    </div>

  )
};

export default AddReview;
