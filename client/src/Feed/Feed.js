// Feed.js

import React from 'react';
import {
  Comment,
  Share,
  AccountCircle,
} from '@material-ui/icons';
import './style.css';

const Feed = (props) => {
  const { title, description, author ,image} = props.post;
  return (
    <div className='feed-card'>
      <div className='feed-header'>
        <img className='feed-avatar' src="https://imgs.search.brave.com/P0mmt7jmaaJM9lYjknkrULSlqUgR-0_hTo0Ik_IEFxk/rs:fit:1200:1152:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tQ3c1MV9tNjlf/NE0vWG9TeUpTSnJZ/QUkvQUFBQUFBQUFw/MkUvTGwtMWctMGh0/ZGt3bVR6eGtrT2pJ/SlVkcUluRXlySnBR/Q0xjQkdBc1lIUS9z/MjU2MC9hdmF0YXIt/NWstazgtMzg0MHgy/MTYwLmpwZw" alt='Avatar' />
        <h2 className='feed-title'>{title}</h2>
      </div>
      <p className='feed-description'>{description}</p>
      <img src={image}></img>
      <div className='feed-footer'>
        <div className='feed-actions'>
          <Comment className='feed-icon' />
          <Share className='feed-icon' />
        </div>
        <p className='feed-author'>
          <AccountCircle
            className='feed-icon'
            style={{ color: 'grey', marginRight: '8px' }}
          />
          {author}
        </p>
      </div>
    </div>
  );
};

export default Feed;
