import './Nav.scss';
import React, {useState} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser, logout} from '../redux/reducer';

const Nav =(props) => {
  const [menu, setMenu] = useState('closed');  

  function handleClick() {
    // console.log(props)
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

  return(
    <header>
      {/* <div className="logo">
        Love Your Shelf
      </div> */}
      <nav className="homeNav">
        <section>
          <div className='navbar'>

          <div className='menu'>
            <img src='https://image.flaticon.com/icons/png/128/545/545705.png' alt='Menu' className='menuIcon' onClick={handleClick}/>
          </div>
          <div>
            <h1 className='siteLogo'>Love Your Shelf</h1>
          </div>
          <div className='logout'>
            <img src='https://image.flaticon.com/icons/png/128/1286/1286853.png' alt='logout' className='logoutIcon' onClick={logout} />
          </div>
          </div>
        
          <ul className={menu === 'closed' ? 'closed' : 'open'}>
            <Link to='/home' onClick={handleClick}><li> Home</li></Link>
            <Link to='/all-products' onClick={handleClick}><li>All Products</li></Link>
            <Link to={`/order-history/${props.user.reducer.user_id}`}onClick={handleClick}><li> Past Orders</li></Link>
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