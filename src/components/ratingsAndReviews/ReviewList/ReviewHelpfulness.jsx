/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { formatDate } from '../../common/helpers.js';

const ReviewHelpfulness = (props) => {
  const [helpfulness, setHelpfulness] = useState(props.helpfulness);

  useEffect(() => {
    setHelpfulness(props.helpfulness)
  }, [props.helpfulness])


  const handleYesClick = () => {
    event.preventDefault();
    console.log(props.review_id)
    fetch((`${process.env.API_URI}/reviews/${props.review_id}/helpful`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.API_KEY
      }
    })).then((response) => {
      console.log('success helpfulness', response)

      setHelpfulness(helpfulness + 1)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleReportClick = () => {
    fetch((`${process.env.API_URI}/reviews/${props.review_id}/report`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.API_KEY
      }
    })).then((response) => {
      console.log('success report')
    }).catch((err) => {
      console.log(err)
    })
  }



  return(
    <>
    By {props.reviewer_name}, {formatDate(props.date)} | Helpful? <a href="#" onClick={handleYesClick}>Yes</a>
    ({helpfulness}) | <a href="#" onClick={handleReportClick}>{props.reported ? 'NO' : 'report'}</a>
    </>
  )

}

export default ReviewHelpfulness;