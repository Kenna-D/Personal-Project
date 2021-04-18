import React, {Component} from 'react';


class AboutUs extends Component {
// 
  render(){
    return(
      <div className='aboutUs'>
        <h1 className='aboutUsTitle'>About Us</h1>
        <div className='filler'>
          <div className='aboutUsText'>
            <h3>
            We are a small family company that is based in Salt Lake City Utah. We have been working for 5 years to bring people quality products.
          </h3>
          </div>         
          <div className='aboutUsImage'>
            <img alt='Father and Son' src='https://previews.dropbox.com/p/thumb/ABJazWPHbJ65T5vwKhpKqMpp_KrhacPC7OKaqlr-_6GvKLV6JDT6GNokTA01xj8WOPyXSm5tFwrTHIX1-x4pg9q1ahj2cxR96eCG6WXS8WIj1CEi8WyJIAeZgbQu1BmXm9NverzOF28P1sVWOhhTM0RzxUqBNYtHxtEe-jy3ragqpfqft5tknMB24ae-hcp5fXk5Nk_MsrZsUP4O0GxSMnnHYIhm_X_ZwVHVp-0BrGxHgK8TUd0c7_4SLn1fUWeP-r3AZ_CFyDTxvNbLvMNSLOFvKr8yXyo3h1o88PKv6YqeOOw_QaUszEizXUBj-zAnu_lajg_oRjyuCI1LR1zjeZWxHcVID7_-sopddvk_07EWlwIKM8RJxhn86j3hJaR7V31cHCREVdMd1cYdKDtDYwiPyDshDZ1s0EdGXpqySkNyKw/p.jpeg?fv_content=true&size_mode=5' className='homeImage'/>      
          </div>
        </div>
      </div>
    )
  }
}
export default AboutUs;