import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WhatWeDo extends Component {

  render(){
    return(
      <div>
        <div className='whatWeDoImage'>
          <img alt='A Product' src='url'/>
          <Link to='all-products' >
            Shop all products Here
          </Link>
        </div>
        <div className='whatWeDo'>
          <h3>
            what we do speach
          </h3>
        </div>
      </div>
    )
  }
}
export default WhatWeDo;