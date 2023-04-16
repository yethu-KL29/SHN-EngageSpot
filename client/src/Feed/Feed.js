// Feed.js

import React from 'react';
import './style.css'; // Import CSS file for styling

const Feed = (props) => {
  const { title, description, author } = props.post;
  return (
    <div className='feed-card'>
      <h2 className='feed-title'>{title}</h2>
      <p className='feed-description'>{description}</p>
      <p className='feed-author'>By {author}</p>
    </div>
  );
};

export default Feed;
