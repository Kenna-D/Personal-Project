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
      console.log(product)
      return <div key={product.product_id}>
        <Link to={`/product/${product.product_id}`} >
          <h4>{product.name}</h4>
        </Link>
        
      </div>
    });
    return(
      <div>
        
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