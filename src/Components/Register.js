import React, {useState} from 'react';
import axios from 'axios';
import {updateUser} from '../redux/reducer';
import { connect } from 'react-redux';
import './Register.scss';

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
    <div className='rlogin'>
      <div className='rloginContainer'>
        <div className='registerBox'>
          <h1 className='rloginLogo'>Register</h1>
          {errorMsg && <h3>{errorMsg}<span onClick={removeErrorMsg}>X</span></h3>}
          <div className='registerinputBox'>
            <div className='register-input-box'>
              <p>Username:</p>
              <input className='Rinput' onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className='register-input-box'>
              <p>Password:</p>
              <input className='Rinput' onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className='register-input-box'>
              <p>Email:</p>
              <input className='Rinput' onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='register-input-box'>
              <p>Phone Number:</p>
              <input className='Rinput' onChange={e => setPhoneNumber(e.target.value)}/>
            </div>
          </div>
          <div className='register-buttons'>
            <button className='registerButton' onClick={register}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
};
export default connect(null, {updateUser})(Register);