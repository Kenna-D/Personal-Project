import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import './Product.css';

const {REACT_APP_PUBLISHABLE_KEY} = process.env;
const Product = (props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [color, setColor] = useState('');
  // const [deliveryOrPickup, setDeliveryOrPickup] = useState('');
  // const [customDetails, setCustomDetails] = useState('');
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
  
  // const makeOrder = () => {
  //   axios.post('/api/orders/create', {})
  // }
  
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
              <div>
                <h1>Choose a color</h1>
                <select>
                  <option> --- </option>
                  <option>Black</option>
                  <option>Antique White</option>
                  <option>Americana Blue</option>
                  <option>Hershey Brown</option>
                  <option>Mustard</option>
                  <option>Olive Green</option>
                  <option>Red</option>
                  <option>Robin Egg Blue</option>
                </select>
              </div>
              <div>
                <h1>Delivery or Pickup</h1>
                <select>
                  <option> --- </option>
                  <option>Pickup</option>
                  <option>Free Delivery to South Salt Lake County</option>
                </select>
              </div>
              <div>
                <h1>Custom Details</h1>
                <input></input>
              </div>    
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