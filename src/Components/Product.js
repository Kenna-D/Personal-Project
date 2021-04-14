import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
const {REACT_APP_PUBLISHABLE_KEY} = process.env;
console.log(REACT_APP_PUBLISHABLE_KEY);
const Product = (props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    axios.get(`/api/products/${props.match.params.id}`)
      .then(res => {
        // this.setState({...res.data, loading: false})
        setName(res.data.name)
        setImage(res.data.image)
        setDetails(res.data.details)
        setPrice(res.data.price)
        setLoading(false)
      })
  }, [props.match.params.id]);

  const onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('/api/payment', { token, amount: price*100 } ).then(response => {
      alert('Your order has been placed.')
    })
    .catch(err => console.log(err))
  };
  

  
  return(
    <div>
      
      <div className='single-product-box'>
        {!loading
          ? 
          <div className='productContent'>
            
            <div className='productInfo'>
              <img src={image} alt={name}className='productImage'/>
              <h1 className='productsName'>{name}</h1>
              <h4 className='productPrice'>${price}</h4>
              <h3 className='productDetails'>{details}</h3>    
              <div className='productButtons'>
                <Link to={'/all-products'} >
                  <button >Back to All Products</button>
                </Link>
              <StripeCheckout 
                token={onToken}
                stripeKey={REACT_APP_PUBLISHABLE_KEY}
                amount={price*100}
              />
            </div>
            </div>
            
          </div>
          : 
          <div>
            still Loading
          </div>
        }
      </div>
    </div>
  )

};

export default Product;