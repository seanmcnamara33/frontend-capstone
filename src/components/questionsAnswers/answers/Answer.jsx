/* eslint-disable */
import React from 'react';
import 'whatwg-fetch';

import { formatDate } from '../../common/helpers';

import { Thumbnail, PhotoList } from './Styles.jsx';

const Answer = ({id, answer}) => {
  // /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/
  const checkPhotoUrl = url =>
    /(http)?s?:?/.test(url)

  const reportAnswer = () => {
    // PUT /qa/answers/:answer_id/report
  }

  const upVoteAnswer = () => {
    // PUT /qa/answers/:answer_id/helpful
  }

  return(
    <li key={id}>
      <h4>A: {answer.body}</h4>
      <div>
        by {answer.answerer_name}, {formatDate(answer.date)} | Helpful? <a href="#">Yes</a> ({answer.helpfulness}) | <a href="#">{answer.reported ? 'NO':'report'}</a>
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