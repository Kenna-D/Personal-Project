import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateUser} from '../redux/reducer';
import './Login.css';

const Login = (props) => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // handleChange(prop, val){
  //   this.setState({
  //     [prop]: val
  //   })
  // };

  

  function login() {
    axios.post('/api/auth/login', {username, password})
      .then(res => {
        getUser()
      })
      .catch(err => {
        console.log(err)
        setErrorMsg('Incorrect username or password!')
      })
    
  };

  function getUser(){
    axios.get('/api/auth/me')
      .then(res => {
        const {user_id, username} = res.data
        props.updateUser({username, user_id})
        console.log(props)
        props.history.push('/home')
      })
      .catch(err => console.log(err))
  }


  function removeErrorMsg(){
    setUsername('')
    setPassword('')
    setErrorMsg('')
  };

  // render(){
    return(
      <div className='login'>
        <div className='loginContainer'>
          <div className='loginBox'>

            <h1 className='loginLogo'>Love Your Shelf</h1>
            {errorMsg && <h3>{errorMsg}<span onClick= {removeErrorMsg}>X</span></h3>}
            <div className='login-input-box'>
              <p>Username:</p>
              <input className='input' onChange={e => setUsername(e.target.value)} />
            </div>
            <div className='login-input-box'>
              <p>Password:</p>
              <input className='input' type='password' onChange={e => setPassword (e.target.value)}/>
            </div>
            <div className='login-buttons'>
              <button className='loginButton' onClick={login}>Login</button>
              <Link className='link' to='/register'>
                Not a member yet? Register here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  // };
};
export default connect(null, {updateUser})(Login);