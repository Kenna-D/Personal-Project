import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateUser} from '../redux/reducer';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      errorMsg: ''
    };

    this.login = this.login.bind(this);
  };

  handleChange(prop, val){
    this.setState({
      [prop]: val
    })
  };

  login(){
    axios.post('/api/auth/login', this.state)
      .then(res => {
        this.getUser()
        
        
      })
      .catch(err => {
        console.log(err)
        this.setState({errorMsg: 'Incorrect username or password!'})
      })
    
  };

  getUser = () => {
    axios.get('/api/auth/me')
      .then(res => {
        console.log('login', res.data)
        const {user_id} = res.data
        const {username} = this.state
        this.props.updateUser({username, user_id})
        this.props.history.push('/home')
      })
      .catch(err => console.log(err))
  }


  removeErrorMsg = () => {
    this.setState({
      username: '',
      password: '',
      errorMsg: ''
    })
  };

  render(){
    return(
      <div className='login'>
        <div className='loginContainer'>
          <img alt='logo'/>
          <h1>Love Your Shelf</h1>
          {this.state.errorMsg && <h3>{this.state.errorMsg}<span onClick={this.removeErrorMsg}>X</span></h3>}
          <div className='login-input-box'>
            <p>Username:</p>
            <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)}/>
          </div>
          <div className='login-input-box'>
            <p>Password:</p>
            <input value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)}/>
          </div>
          <div className='login-buttons'>
            <button onClick={this.login}>Login</button>
            <Link to='/register'>
              Not a member yet? Register here!
            </Link>
          </div>
        </div>
      </div>
    );
  };
};
export default connect(null, {updateUser})(Login);