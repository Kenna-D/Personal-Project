import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Product = (props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({...res.data, loading: false})
        setName(res.data.name)
        setImage(res.data.image)
        setDetails(res.data.details)
        setPrice(res.data.price)
        setLoading(false)
      })
  }, []);
  

  
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
              <button >Add to Cart</button>
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