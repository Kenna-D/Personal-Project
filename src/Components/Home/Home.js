import React from 'react';
import WhatWeDo from './WhatWeDo';
import AboutUs from './AboutUs';
import './Home.css';

const Home = (props) => {
  // useEffect(() => {
  //   console.log('componentDidMount', props)
  // })

  
    return (
      <div className='homePage'>
        <div className='openingLogo'>
          <h1>
            L O V E   Y O U R   S H E L F
          </h1>
        </div>
        <WhatWeDo />
        <AboutUs />
      </div>
    )
  
};

export default Home;