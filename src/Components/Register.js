import React, {useState} from 'react';
import axios from 'axios';
import {updateUser} from '../redux/reducer';
import { connect } from 'react-redux';
import './Register.css';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function register(){
    axios.post('/api/auth/register', {username, password, email, phoneNumber})
      .then(res => {
        getUser()
      })
      .catch(err => {
        console.log(err)
        setErrorMsg('Username Taken')
      })
  }

  function getUser(){
    axios.get('/api/auth/me')
      .then(res => {
        console.log('login', props)
        const {user_id} = res.data
        // const username = {username}
        props.updateUser({username, user_id})
        props.history.push('/home')
      })
      .catch(err => console.log(err))
  }

  function removeErrorMsg(){
    setErrorMsg('')
  };

  return(
    <div className='login'>
      <div className='loginContainer'>
        <div className='loginBox'>
          <h1 className='loginLogo'>Register</h1>
          {errorMsg && <h3>{errorMsg}<span onClick={removeErrorMsg}>X</span></h3>}
          <div className='inputBox'>
            <div className='login-input-box'>
              <p>Username:</p>
              <input className='input' onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className='login-input-box'>
              <p>Password:</p>
              <input className='input' onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className='login-input-box'>
              <p>Email:</p>
              <input className='input' onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='login-input-box'>
              <p>Phone Number:</p>
              <input className='input' onChange={e => setPhoneNumber(e.target.value)}/>
            </div>
          </div>
          <div className='register-buttons'>
            <button className='loginButton' onClick={register}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
};
export default connect(null, {updateUser})(Register);