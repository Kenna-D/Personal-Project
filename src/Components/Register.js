import React, {useState} from 'react';
import axios from 'axios';
import {updateUser} from '../redux/reducer';
import { connect } from 'react-redux';


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
    <div className='registerPage'>
      {errorMsg && <h3>{errorMsg}<span onClick={removeErrorMsg}>X</span></h3>}
          <div className='login-input-box'>
            <p>Username:</p>
            <input  onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className='login-input-box'>
            <p>Password:</p>
            <input type='password' onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className='login-input-box'>
            <p>Email:</p>
            <input  onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className='login-input-box'>
            <p>Phone Number:</p>
            <input onChange={e => setPhoneNumber(e.target.value)}/>
          </div>
          <div className='login-buttons'>
            <button onClick={register}>Register</button>
          </div>
    </div>
  )
};
export default connect(null, {updateUser})(Register);