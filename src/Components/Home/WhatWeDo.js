import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WhatWeDo extends Component {

  render(){
    return(
      <div className='whatWeDo'>
        <h1 className='whatWeDoTitle'>What We Do</h1>
        <div className='filler' >
          <div className='whatWeDoImage'>
            <div className='homeImage'>
              <Link to='all-products' >
                <button className='allButton'>Shop all products Here</button>
              </Link>
            </div>
            
          </div>
          <div className='whatWeDoText'>
            <h3 className='h3Text'>
            We build rustic items. If requested, we are happy to not distress any item, but it will still be a rustic item. That means it will still be made of pine and will have splits, cracks, and knots. If you are looking for a modern, factory-finish, simply asking that your item not be distressed may not achieve the look you desire.
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
export default WhatWeDo;