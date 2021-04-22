import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './AllProducts.scss';
import  Nav from './Nav'; 

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/api/products')
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
  }, []);
  
  let mappedProducts = products.map(product => {
    return <div key={product.product_id} className='productsInfo'>
      <Link to={`/product/${product.product_id}`} className='toProductLink' >
      <div className='productImageBack'>
        <img src={product.image} alt={product.name} className='productsImages'/>
      </div>
      <h2 className='productsName'>{product.name}</h2>        
      </Link>
      <h4 className='productsPrice'>${product.price}</h4>
      {/* <h5 className='productsDetails'>{product.details}</h5> */}
      
    </div>
  });
  return(
    <div>
      <Nav/>
    
      <div className='allProduct'>
      
        <h1 className='productsLabel'>Our Products</h1>
        <p className='colorOptions'>All of our products are available in these different colors: Black, Antique White, Americana Blue, Hershey BarBrown, Mustard, Olive Green, Red and Robin Egg Blue.</p>
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
    </div>
  );
};

export default AllProducts;