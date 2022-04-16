/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { formatDate } from '../../common/helpers.js';

const ReviewHelpfulness = (props) => {
  const [helpfulness, setHelpfulness] = useState(props.helpfulness);
  const [showYes, setShowYes] = useState(true);

  useEffect(() => {
    setHelpfulness(props.helpfulness)
  }, [props.helpfulness])


  const handleYesClick = (id) => {
    event.preventDefault();
    fetch(`${process.env.API_URI}/reviews/${id}/helpful`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.API_KEY
      }
    }).then((response) => {
      setHelpfulness(helpfulness + 1)
      setShowYes(false);
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleReportClick = () => {
    fetch(`${process.env.API_URI}/reviews/${props.review_id}/report`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.API_KEY
      }
    }).then((response) => {
      console.log('success report')
    }).catch((err) => {
      console.log(err)
    })
  }



  return (
    <div>
      <span style={{ "fontSize": "small" }}>by user: {props.name}</span>
      <div style={{ "float": "right" }}>
        {formatDate(props.date)} | Helpful? <a href="#" onClick={() => handleYesClick(props.review_id)}>{showYes ? 'Yes' : null}</a>
        ({helpfulness}) | <a href="#" onClick={handleReportClick}>{props.reported ? 'NO' : 'report'}</a>
      </div>
    </div>
  )

}

export default ReviewHelpfulness;