// Feed.js

import React from 'react';
import { FaRegComment, FaRegThumbsUp, FaRegShareSquare } from 'react-icons/fa'; // Import Font Awesome icons
import './style.css'; // Import CSS file for styling

const Feed = (props) => {
  const { title, description, author } = props.post;
  return (
    <div className='feed-card'>
      <div className='feed-header'>
        <h2 className='feed-title'>
          <FaRegThumbsUp className='feed-icon' />
          {title}
        </h2>
        <div className='feed-actions'>
          <FaRegComment className='feed-icon' />
          <FaRegShareSquare className='feed-icon' />
        </div>
      </div>
      <p className='feed-description'>
        <FaRegComment className='feed-icon' />
        {description}
      </p>
      <p className='feed-author'>
        <FaRegThumbsUp className='feed-icon' />
        By {author}
      </p>
    </div>
  );
};

export default Feed;
