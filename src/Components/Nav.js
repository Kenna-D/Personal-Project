

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser, logout} from '../redux/reducer';

const Nav =(props) => {
  const [menu, setMenu] = useState('closed');

  useEffect(() => {
    axios.get('/api/auth/me')
      .then(res => {
        // console.log(res)
        props.updateUser(res.data)
      })
     .catch(err => console.log(err))

  }, [props]);
  

  function handleClick() {
    if(menu === 'closed'){
      setMenu('open')
    } else {
      setMenu('closed')
    }
  };

  function logout() {
    axios.post('/api/auth/logout')
      .then(res => {
        props.history.push('/')
        props.logout()
      })
  };

  
    // console.log(this.props)
  return(
    <header>
      <div className="logo">
        Love Your Shelf
      </div>
      <nav className="homeNav">
        <section>
          <div className='menu'>
            <img src='https://image.flaticon.com/icons/png/128/545/545705.png' alt='Menu' className='menuIcon' onClick={handleClick}/>
          </div>
        
          <ul className={menu === 'closed' ? 'closed' : 'open'}>
            <Link to='/home' onClick={handleClick}><li> Home</li></Link>
            <Link to='/all-products' onClick={handleClick}><li>All Products</li></Link>
            <Link to='/cart' onClick={handleClick}><li> Your Cart</li></Link>
            <Link to={`/order-history/${props.user.user_id}`}onClick={handleClick}><li> Past Orders</li></Link>
            <li onClick={logout}> Logout</li>
          </ul>
  
        </section>
      </nav>
    </header>
  )
};

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState
}}

export default withRouter(connect(mapStateToProps, {updateUser, logout})(Nav));