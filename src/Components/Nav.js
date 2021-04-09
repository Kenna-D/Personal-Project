

import React, {Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser, logout} from '../redux/reducer';

class Nav extends Component {
  constructor(props){
    super(props);

  };
  componentDidMount(){
    axios.get('api/auth/me')
      .then(res => updateUser(res.data))
  };

  // isLoggedIn(){
  //   axios.get('/api/auth/me')
  //     .then(res => {
  //       if(res){
  //         this.setState({isLoggedIn: true})
  //       }
  //     })
  // };

  render(){
    console.log(this.props)
    return(
      <header>
        <div className="logo">
          Love Your Shelf
        </div>
        <nav className="homeNav">
          <Link to='/login' className='loginLink'>
            <p>Login</p>
          </Link>
          {/* {!isLoggedIn
            ?
              <Link to='/login'>
                Login
              </Link>
            :
              <div>
                <img src='https://image.flaticon.com/icons/png/128/848/848043.png' alt='User Icon' />
              </div>
          } */}
          <div className='menu'>
            <img src='https://image.flaticon.com/icons/png/128/545/545705.png' alt='Menu' className='menuIcon'/>
          </div>
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