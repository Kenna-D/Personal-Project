import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AllProducts extends Component {
  constructor(props){
    super(props);
    this.state = {
      // search: '',
      products: [],
      loading: true
    }
  };

  componentDidMount(){
    this.getProduct()
  }

  getProduct = () => {
    axios.get('/api/products')
      .then(res => {
        this.setState({products: res.data, loading: false})
      })
  };
  
  render(){
    let {products, loading} = this.state;
    let mappedProducts = products.map(product => {
      return <div key={product.product_id} className='productsInfo'>
        <img src={product.image} alt={product.name} className='productsImages'/>
        <Link to={`/product/${product.product_id}`} >

        <h2 className='productsName'>{product.name}</h2>        
        </Link>
        <h4 className='productsPrice'>${product.price}</h4>
        <h5 className='productsDetails'>{product.details}</h5>
        
      </div>
    });
    return(
      <div className='allProduct'>
        <h1 className='productsLabel'>All Products</h1>
        <div className='all-products-body'>
          {!loading 
            ?
            mappedProducts
            :
            <div>
              loading
            </div>
          }
        </div>
      </div>
    );
  };
};

export default AllProducts;