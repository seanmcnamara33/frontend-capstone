/* eslint-disable */
import React, { useState } from 'react';
import 'whatwg-fetch';

import { formatDate } from '../../common/helpers';

import { Thumbnail, PhotoList } from './Styles.jsx';

const Answer = ({ id, answer, filterReported }) => {
  const [disableYes, setDisableYes] = useState(true);
  const [helpful, setHelpful] = useState(answer.helpfulness);

  const checkPhotoUrl = url =>
    /(http)?s?:?/.test(url)

  const reportAnswer = async() => {
    try {
      await fetch(`${process.env.API_URI}/qa/answers/${id}/report`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.API_KEY
        }
      })
      filterReported(answer.id);
    } catch (err) {
      console.log('REPORT ANSWER', err);
    }
  }

  const upVoteAnswer = async () => {
    try {
      await fetch(`${process.env.API_URI}/qa/answers/${id}/helpful`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.API_KEY
        }
      })
      setHelpful(helpful + 1);
      setDisableYes(false);
    } catch (err) {
      console.log('UPVOTE ANSWER', err);
    }
  }

  return(
    <li>
      <h4>A: {answer.body}</h4>
      <div>
        by {answer.answerer_name}, {formatDate(answer.date)} |
        Helpful? { disableYes && <a onClick={upVoteAnswer}>Yes</a> } ({ helpful }) |{' '}
        <a onClick={reportAnswer}>{answer.reported ? 'NO':'report'}</a>
      </div>
      <PhotoList>
        {answer.photos.length > 0 && answer.photos.map((photo, i)=>(
          checkPhotoUrl(photo) ?
            <Thumbnail key={i} photo={photo} /> : ''
        ))}
      </PhotoList>
    </li>
  )
}

export default Answer;