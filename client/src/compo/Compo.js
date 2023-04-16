// Compo.js

import React from 'react';
import { Engagespot } from '@engagespot/react-component';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../Auth/Login';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import Home from '../Home/Home';
import './Compo.css'; // Import the CSS file
import FeedSection from '../Feed/FeedSection';

const Compo = () => {
  const { user } = useContext(DataContext);

  const theme = {
    notificationButton: {
      iconFill: '#B764AB',
    },
    colors: {
      brandingPrimary: '#B764AB',
      colorSecondary: '#ecebfa',
    },
    feedItem: {
      hoverBackground: '#ecebfa',
    },
    dropdown: {
      hoverBackground: '#ecebfa',
      menuItemHoverBackground: '#ecebfa',
    },
  };

  return (
    <div className="wrapper">
      <Routes>
       {user?
        <Route
          path="/feed"
          element={
            <div>
              <Engagespot apiKey="70lqwpbeq4kicg0xszf4z9" userId={user} theme={theme} />
              <FeedSection/>
            </div>
          }
        />
        :null}
        <Route path="/" element={<LoginPage />} />
        <Route  path='/send' element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default Compo;
