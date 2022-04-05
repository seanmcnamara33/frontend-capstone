/* eslint-disable */
import React, {} from 'react';


const ExpandedView = ({currentView}) => {
  if (currentView === 'expanded') {
    return (
      <p>We in the expanded view</p>
    );
  }
  return null;
}

export default ExpandedView;