import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import './Product.scss';
import  Nav from './Nav'; 

const {REACT_APP_PUBLISHABLE_KEY} = process.env;

const Product = (props) => {
  const {user_id} = useSelector((state) => state.reducer);

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('');
  const [deliveryOrPickup, setDeliveryOrPickup] = useState('');
  const [customDetails, setCustomDetails] = useState('');
  const product_id = props.match.params.id;
  
  useEffect(() => {
    axios.get(`/api/products/${product_id}`)
      .then(res => {
        // this.setState({...res.data, loading: false})
        setName(res.data.name)
        setImage(res.data.image)
        setDetails(res.data.details)
        setPrice(res.data.price)
        setLoading(false)
      })
  }, [product_id]);

  const onToken = (token) => {
    token.card = void 0;
    // console.log('token', token);
    axios.post('/api/payment', { token, amount: price*100, product_id, color, deliveryOrPickup, customDetails} ).then(response => {
      alert('Your order has been placed.')
      props.history.push(`/order-history/${user_id}`)
    })
    .catch(err => console.log(err))
  };
  
  return(
    <div>
      <Nav/>
      <div className='single-product-box'>
        {!loading
          ? 
          <div className='productContent'>
            
            <div className='productInfo'>
              <img src={image} alt={name}className='productImage'/>
              <h1 className='productsName'>The {name}</h1>
              <h4 className='productPrice'>${price}</h4>
              <h3 className='productDetails'>{details}</h3>
              <div className='colorSelection'>
                <h1 className='productSelection'>Choose a color</h1>
                <select value={color} onChange={e => setColor(e.target.value)}>
                  <option value={''}> --- </option>
                  <option value={'Black'}>Black</option>
                  <option value={'Antique White'}>Antique White</option>
                  <option value={'Americana Blue'}>Americana Blue</option>
                  <option value={'Hershey Brown'}>Hershey Brown</option>
                  <option value={'Mustard'}>Mustard</option>
                  <option value={'Olive Green'}>Olive Green</option>
                  <option value={'Red'}>Red</option>
                  <option value={'Robin Egg Blue'}>Robin Egg Blue</option>
                </select>
              </div>
              <div className='deliverySelection'>
                <h1 className='productSelection'>Delivery or Pickup</h1>
                <select value={deliveryOrPickup} onChange={e => setDeliveryOrPickup(e.target.value)}>
                  <option value={''}> --- </option>
                  <option value={'Pickup'}>Pickup</option>
                  <option value={'Delivery'}>Free Delivery to South Salt Lake County</option>
                </select>
              </div>
              <div className='customDetails'>
                <h1 className='productSelection'>Custom Details</h1>
                <input value={customDetails} onChange={e => setCustomDetails(e.target.value)}></input>
              </div>    
              <div className='productButtons'>
                <Link to={'/all-products'} >
                  <button className='button'>Back to All Products</button>
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