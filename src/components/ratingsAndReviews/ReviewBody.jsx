/* eslint-disable */
import React, { useState } from 'react';


const ReviewBody = (props) => {
  let showBody = null;
  let fullBody = props.body;
  let shortBody = ''
  for (var i = 0; i < 250; i++) {
    if (props.body[i] !== undefined) {
      shortBody += props.body[i]
    }
  }

  const [Body, setBody] = useState(fullBody.length <= 250 ? fullBody: shortBody);

  const handleClick = () => {
    if (showBody === false) {
      showBody = true;
      setBody(fullBody);
    } else {
      showBody = false;
      setBody(shortBody);
    }
  };

  if (fullBody.length <= 250) {
    showBody = true;
    return (
      <div>
        {Body}
      </div>
    )
  } else {
    showBody = false;
    return (
      <div>
        {Body + '...'}
        {/* showless not functioning as expected */}
        <button type='button' onClick={handleClick}>{showBody === false ? 'Show More' : 'Show Less'}</button>
      </div>
    )
  }
}

export default ReviewBody;