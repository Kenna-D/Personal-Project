

import React, {Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser, logout} from '../redux/reducer';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: 'closed'
    }
  };
  componentDidMount(){
    axios.get('api/auth/me')
      .then(res => updateUser(res.data))
  };

  handleClick = () => {
    if(this.state.menu === 'closed'){
      this.setState({menu: 'open'})
    } else {
      this.setState({menu: 'closed'})
    }
  };

  logout = () => {
    axios.post('/api/auth/logout')
      .then(res => {
        this.props.history.push('/')
        this.logout()
      })
  };

  render(){
    return(
      <header>
        <div className="logo">
          Love Your Shelf
        </div>
        <nav className="homeNav">
          <section>
            <div className='menu'>
              <img src='https://image.flaticon.com/icons/png/128/545/545705.png' alt='Menu' className='menuIcon' onClick={this.handleClick}/>
            </div>
          
            <ul className={this.state.menu === 'closed' ? 'closed' : 'open'}>
              <Link to='/home' onClick={this.handleClick}><li> Home</li></Link>
              <Link to='/all-products' onClick={this.handleClick}><li> All Products</li></Link>
              <Link to='/cart' onClick={this.handleClick}><li> Your Cart</li></Link>
              <Link to='/order-history/:id' onClick={this.handleClick}><li> Past Orders</li></Link>
              <li onClick={this.logout}> Logout</li>
            </ul>
    
        </section>
          
          
        </nav>
      </header>

    )
  }
};

const mapStateToProps = (reduxState) => {
  return {
    user: reduxState
}}

export default withRouter(connect(mapStateToProps, {updateUser, logout})(Nav));