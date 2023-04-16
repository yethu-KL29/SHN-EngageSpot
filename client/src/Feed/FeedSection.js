// FeedSection.js

import React, { useEffect, useState } from 'react';
import { dataGet } from '../service/api';
import Feed from './Feed';
import './style.css'; // Import CSS file for styling

const FeedSection = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    dataGet()
      .then((data) => setPost(data.data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='main-container'>
      <h1 className='main-title'>Feed Section</h1>
      <ul className='feed-list'>
        {post.map((post, i) => (
          <Feed key={i} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default FeedSection;
