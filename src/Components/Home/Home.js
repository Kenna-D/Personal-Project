import React, {Component} from 'react';
import WhatWeDo from './WhatWeDo';
import AboutUs from './AboutUs';

class Home extends Component {

  render(){
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
  }
};

export default Home;