import React, {Component} from 'react';


class AboutUs extends Component {
// 
  render(){
    return(
      <div className='aboutUs'>
        <h1 className='aboutUsTitle'>About Us</h1>
        <div className='aboutFiller'>
          <div className='aboutUsText'>
            <h3 className='h3TextA'>
            We are a small family company that is based in Salt Lake City Utah. We have been working for 5 years to bring people quality products.
          </h3>
          </div>         
          <div className='aboutUsImage'>
            <div className='AUImage' ></div>
          </div>
        </div>
      </div>
    )
  }
}
export default AboutUs;