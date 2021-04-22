import React from 'react';
import WhatWeDo from './WhatWeDo';
import AboutUs from './AboutUs';
import './Home.scss';
import  Nav from '../Nav'; 

const Home = (props) => {
  
    return (
      <div className='homePage'>
        <Nav />
        <div className='homePage2'>
          <div className='openingLogo'>
            <h1 className='h1'>
              LOVE YOUR SHELF
            </h1>           
          </div>
          <WhatWeDo />
          <AboutUs />
        </div>
      </div>
    )
};

export default Home;