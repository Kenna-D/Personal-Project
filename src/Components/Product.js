import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      image: '',
      details:'',
      price: 0,
      loading: true,
      isLoggedIn: false
    }
  };
  componentDidMount(){
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({...res.data, loading: false})
        console.log(this.state)
      })
  };
  

  

  render(){
    return(
      <div>
        
        <div className='single-product-box'>
          {!this.state.loading
            ? 
            <div className='productContent'>
              
              <div className='productInfo'>
                <img src={this.state.image} alt={this.state.name} className='productImage'/>
                <h1>{this.state.name}</h1>
                <h4>${this.state.price}</h4>
                <h3>{this.state.details}</h3>    
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
  }
};

export default Product;