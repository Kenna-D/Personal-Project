import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import WhatWeDo from './WhatWeDo';
import AboutUs from './AboutUs';

class Home extends Component {

  render(){
    return (
      <div>
        <header>
          <div className="logo">
            Love Your Shelf
          </div>
          <nav className="homeNav">
            <Link to='/login'>
              Login
            </Link>
            <div>
              Hamburger Menu
            </div>
          </nav>
        </header>
        <WhatWeDo />
        <AboutUs />
      </div>
    )
  }
};

export default Home;