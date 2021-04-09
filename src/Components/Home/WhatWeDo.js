import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WhatWeDo extends Component {

  render(){
    return(
      <div className='whatWeDo'>
        <h1 className='whatWeDoTitle'>What We Do</h1>
        <div className='filler' >
          <div className='whatWeDoImage'>
            <img alt='A Product' src='url' className='homeImage'/>
            <Link to='all-products' >
             <button>Shop all products Here</button>
            </Link>
          </div>
          <div className='whatWeDoText'>
            <h3>
              what we do speach
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
export default WhatWeDo;